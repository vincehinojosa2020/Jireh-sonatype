# Jireh Remodeling & Construction Website PRD

## Original Problem Statement
Revamp cousin Erik's construction website (Jireh Remodeling & Construction). Complete redesign needed: new logo, new site, new everything. Business based in San Antonio, serves Greater Central Region from Schertz to Cedar Park. Phone: 210-980-9174 with "Text to get started" as primary CTA.

## User Personas
1. **Homeowners in San Antonio/Central Texas** - Looking for reliable, honest remodeling services
2. **Commercial Property Owners** - Need professional painting/renovation services
3. **Faith-oriented customers** - Value family-owned, faith-rooted businesses

## Core Requirements
- Modern, professional website reflecting construction/remodeling industry
- Prominent "Text to Get Started" CTA with phone number (210) 980-9174
- Services showcase with visual portfolio
- Contact/Quote request form
- Mobile-responsive design
- Faith-based messaging without being preachy

## What's Been Implemented (Feb 1, 2025)

### Frontend
- **Navbar** - Glassmorphism navigation with logo, nav links, CTA button, mobile menu
- **Hero Section** - Full-screen hero with construction background, prominent CTA
- **Services Section** - Bento grid layout with 8 services (Bathroom, Flooring, Framing, Drywall, Painting, Decks/Patios, Carpentry, Siding)
- **Projects Gallery** - Filterable project showcase with lightbox modal
- **About Section** - Erik's story, faith-based mission, company values
- **Testimonials** - Carousel with customer reviews
- **Contact Section** - Quote request form with service selector
- **Footer** - Contact info, quick links, social media, "Made by Charlotte" credit
- **Floating CTA** - Sticky "Text to Get Started" button

### Backend API
- `GET /api/services` - Returns list of services
- `POST /api/quote` - Submit quote request
- `GET /api/quotes` - Retrieve quote requests
- `POST /api/testimonials` - Submit testimonial
- `GET /api/testimonials` - Retrieve approved testimonials

### Design System
- **Typography**: Playfair Display (headings), Manrope (body)
- **Colors**: Navy (#0F172A), Amber (#D97706), Warm Stone (#FAFAF9)
- **Components**: Shadcn UI, Sonner toasts

## Prioritized Backlog

### P0 - Critical (Done)
- ✅ Homepage with all sections
- ✅ Contact form functionality
- ✅ Mobile responsive design
- ✅ "Text to Get Started" CTA

### P1 - High Priority
- Admin dashboard for quote management
- Email notifications for new quotes
- Image upload for project gallery

### P2 - Medium Priority
- Google Maps integration for service area
- Blog/News section
- SEO optimization
- Analytics integration

### P3 - Nice to Have
- Live chat widget
- Customer portal for project tracking
- Before/After project comparisons

## Next Tasks
1. Set up email notifications (SendGrid/Resend) for quote submissions
2. Create admin dashboard for Erik to manage quotes
3. Add more project photos to gallery
4. Implement Google Business reviews integration
