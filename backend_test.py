import requests
import sys
from datetime import datetime
import json

class JirehAPITester:
    def __init__(self, base_url="https://construct-makeover.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                except:
                    print(f"   Response: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")
                self.failed_tests.append({
                    "test": name,
                    "endpoint": endpoint,
                    "expected": expected_status,
                    "actual": response.status_code,
                    "response": response.text[:200]
                })

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                "test": name,
                "endpoint": endpoint,
                "error": str(e)
            })
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test("API Root", "GET", "api/", 200)

    def test_get_services(self):
        """Test services endpoint"""
        success, response = self.run_test("Get Services", "GET", "api/services", 200)
        if success and 'services' in response:
            services = response['services']
            print(f"   Found {len(services)} services")
            for service in services[:3]:  # Show first 3
                print(f"   - {service.get('title', 'Unknown')}")
        return success

    def test_create_quote_request(self):
        """Test quote request creation"""
        test_data = {
            "name": f"Test User {datetime.now().strftime('%H%M%S')}",
            "email": "test@example.com",
            "phone": "(210) 555-0123",
            "service_type": "Bathroom Remodel",
            "message": "This is a test quote request for bathroom remodeling."
        }
        
        success, response = self.run_test(
            "Create Quote Request",
            "POST",
            "api/quote",
            200,
            data=test_data
        )
        
        if success and 'id' in response:
            print(f"   Quote ID: {response['id']}")
            return response['id']
        return None

    def test_get_quotes(self):
        """Test getting quote requests"""
        return self.run_test("Get Quote Requests", "GET", "api/quotes", 200)

    def test_get_testimonials(self):
        """Test testimonials endpoint"""
        success, response = self.run_test("Get Testimonials", "GET", "api/testimonials", 200)
        if success:
            print(f"   Found {len(response)} testimonials")
        return success

    def test_create_testimonial(self):
        """Test testimonial creation"""
        test_data = {
            "name": f"Test Customer {datetime.now().strftime('%H%M%S')}",
            "content": "Great work on our bathroom remodel! Highly recommend Jireh R&C.",
            "rating": 5,
            "project_type": "Bathroom Remodel"
        }
        
        success, response = self.run_test(
            "Create Testimonial",
            "POST",
            "api/testimonials",
            200,
            data=test_data
        )
        
        if success and 'id' in response:
            print(f"   Testimonial ID: {response['id']}")
            return response['id']
        return None

    def test_status_endpoints(self):
        """Test status check endpoints"""
        # Create status check
        test_data = {
            "client_name": f"Test Client {datetime.now().strftime('%H%M%S')}"
        }
        
        success, response = self.run_test(
            "Create Status Check",
            "POST",
            "api/status",
            200,
            data=test_data
        )
        
        if success:
            # Get status checks
            self.run_test("Get Status Checks", "GET", "api/status", 200)
        
        return success

def main():
    print("🚀 Starting Jireh Remodeling & Construction API Tests")
    print("=" * 60)
    
    tester = JirehAPITester()
    
    # Run all tests
    print("\n📋 Testing Core API Endpoints...")
    tester.test_api_root()
    
    print("\n🏠 Testing Services...")
    tester.test_get_services()
    
    print("\n💬 Testing Quote System...")
    quote_id = tester.test_create_quote_request()
    tester.test_get_quotes()
    
    print("\n⭐ Testing Testimonials...")
    testimonial_id = tester.test_create_testimonial()
    tester.test_get_testimonials()
    
    print("\n📊 Testing Status System...")
    tester.test_status_endpoints()
    
    # Print final results
    print("\n" + "=" * 60)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.failed_tests:
        print("\n❌ Failed Tests:")
        for failure in tester.failed_tests:
            if 'error' in failure:
                error_msg = failure['error']
            else:
                error_msg = f"Status {failure.get('actual')} (expected {failure.get('expected')})"
            print(f"   - {failure['test']}: {error_msg}")
    
    success_rate = (tester.tests_passed / tester.tests_run) * 100 if tester.tests_run > 0 else 0
    print(f"\n🎯 Success Rate: {success_rate:.1f}%")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())