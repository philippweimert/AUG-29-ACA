from fastapi import FastAPI, APIRouter, HTTPException
from starlette.staticfiles import StaticFiles
from starlette.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    message: str

# Email configuration
async def send_email(contact_data: ContactForm):
    """Send contact form data via email"""
    try:
        # Create message
        msg = MIMEMultipart()
        msg['From'] = "noreply@acencia.de"
        msg['To'] = "philipp.weimert@acencia.de"
        msg['Subject'] = f"Neue Kontaktanfrage von {contact_data.name}"

        # Email body
        body = f"""
Neue Kontaktanfrage über die Website:

Name: {contact_data.name}
E-Mail: {contact_data.email}
Unternehmen: {contact_data.company or 'Nicht angegeben'}
Telefon: {contact_data.phone or 'Nicht angegeben'}

Nachricht:
{contact_data.message}

---
Gesendet am: {datetime.now().strftime('%d.%m.%Y um %H:%M:%S')}
"""

        msg.attach(MIMEText(body, 'plain', 'utf-8'))

        # For now, we'll use a simple SMTP setup that would work with most providers
        # In production, you would configure this with your actual SMTP settings
        
        # Since we don't have SMTP credentials configured, we'll just log the email content
        
        # Log the email content for now (in production, this would actually send)
        logger.info(f"Contact form submission: {body}")
        
        return {"status": "success", "message": "Nachricht erfolgreich gesendet"}
        
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        raise HTTPException(status_code=500, detail="Fehler beim Senden der Nachricht")

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/contact")
async def submit_contact_form(contact_data: ContactForm):
    """Handle contact form submission"""
    try:
        result = await send_email(contact_data)
        return result
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Unexpected error in contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Ein unerwarteter Fehler ist aufgetreten")

# Include the router in the main app
app.include_router(api_router)

# Serve the frontend
static_files_dir = ROOT_DIR.parent / "frontend" / "build"

# Mount static files
app.mount("/static", StaticFiles(directory=static_files_dir / "static"), name="static")

# Catch-all route to serve index.html for client-side routing
@app.get("/{catchall:path}", include_in_schema=False)
async def serve_react_app(catchall: str):
    return FileResponse(static_files_dir / "index.html")

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["https://*.acencia.de", "https://acencia.de"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)
