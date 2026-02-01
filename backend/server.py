from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact/Quote Request Models
class QuoteRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    service_type: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "pending"

class QuoteRequestCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    service_type: str
    message: str

class QuoteRequestResponse(BaseModel):
    id: str
    name: str
    email: str
    phone: str
    service_type: str
    message: str
    created_at: str
    status: str

# Testimonial Models
class Testimonial(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    content: str
    rating: int = 5
    project_type: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    approved: bool = False

class TestimonialCreate(BaseModel):
    name: str
    content: str
    rating: int = 5
    project_type: Optional[str] = None

# Routes
@api_router.get("/")
async def root():
    return {"message": "Jireh Remodeling & Construction API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

# Quote Request Routes
@api_router.post("/quote", response_model=QuoteRequestResponse)
async def create_quote_request(input: QuoteRequestCreate):
    quote_obj = QuoteRequest(**input.model_dump())
    doc = quote_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.quote_requests.insert_one(doc)
    return QuoteRequestResponse(
        id=doc['id'],
        name=doc['name'],
        email=doc['email'],
        phone=doc['phone'],
        service_type=doc['service_type'],
        message=doc['message'],
        created_at=doc['created_at'],
        status=doc['status']
    )

@api_router.get("/quotes", response_model=List[QuoteRequestResponse])
async def get_quote_requests():
    quotes = await db.quote_requests.find({}, {"_id": 0}).to_list(1000)
    return [QuoteRequestResponse(**q) for q in quotes]

# Testimonial Routes
@api_router.post("/testimonials", response_model=dict)
async def create_testimonial(input: TestimonialCreate):
    testimonial_obj = Testimonial(**input.model_dump())
    doc = testimonial_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.testimonials.insert_one(doc)
    return {
        "id": doc['id'],
        "name": doc['name'],
        "content": doc['content'],
        "rating": doc['rating'],
        "project_type": doc['project_type'],
        "created_at": doc['created_at'],
        "approved": doc['approved'],
        "message": "Thank you for your testimonial! It will be reviewed shortly."
    }

@api_router.get("/testimonials", response_model=List[dict])
async def get_testimonials(approved_only: bool = True):
    query = {"approved": True} if approved_only else {}
    testimonials = await db.testimonials.find(query, {"_id": 0}).to_list(100)
    return testimonials

# Services data endpoint
@api_router.get("/services")
async def get_services():
    return {
        "services": [
            {
                "id": "bathroom",
                "title": "Bathroom Remodel",
                "description": "Transform your bathroom into a relaxing retreat with custom tile, fixtures, and cabinetry.",
                "image": "https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?w=800"
            },
            {
                "id": "flooring",
                "title": "Flooring",
                "description": "From hardwood to luxury vinyl, we install beautiful, durable floors that last.",
                "image": "https://images.unsplash.com/photo-1622653416662-5a74e75717db?w=800"
            },
            {
                "id": "framing",
                "title": "Framing (Metal & Wood)",
                "description": "Professional metal and wood framing for new construction and renovations.",
                "image": "https://images.unsplash.com/photo-1618373012585-ae012fc350e8?w=800"
            },
            {
                "id": "drywall",
                "title": "Drywall",
                "description": "Expert drywall installation, repair, and finishing for flawless walls.",
                "image": "https://images.unsplash.com/photo-1768839725085-829e6ac7ac26?w=800"
            },
            {
                "id": "painting",
                "title": "Interior & Exterior Painting",
                "description": "Professional painting services that bring your vision to life with precision.",
                "image": "https://images.unsplash.com/photo-1721274503578-80116d19ce9d?w=800"
            },
            {
                "id": "outdoor",
                "title": "Decks, Patios & Pergolas",
                "description": "Create your dream outdoor living space with custom decks, patios, and pergolas.",
                "image": "https://images.unsplash.com/photo-1760552268175-431696421106?w=800"
            },
            {
                "id": "carpentry",
                "title": "Carpentry & Trim Work",
                "description": "Fine carpentry and trim work that adds character and value to your home.",
                "image": "https://images.unsplash.com/photo-1601066675934-9657b64c0a4e?w=800"
            },
            {
                "id": "siding",
                "title": "Siding & Windows",
                "description": "Protect and beautify your home with quality siding and window installation.",
                "image": "https://images.unsplash.com/photo-1748908271592-d9d5690b288b?w=800"
            }
        ]
    }

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
