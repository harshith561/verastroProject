# VERASTRO INFRA — Website

A complete, production-ready website for **VERASTRO INFRA**, a division of Verastro Inc.

## Project Structure

```
veertoinfo/
├── frontend/      # Next.js 16 App (React, Tailwind CSS v4)
│   ├── app/       # App Router pages & API routes
│   ├── components/
│   ├── data/
│   ├── lib/
│   └── public/
│
└── backend/       # Standalone Node.js/Express email server
    ├── src/
    │   ├── routes/
    │   └── lib/
    └── .env
```

## Frontend

Built with:
- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **React Hook Form + Zod** (form validation)

### Setup

```bash
cd frontend
npm install
cp .env.local.example .env.local
# Fill in environment variables
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=

# SMTP (server-side only — never expose to browser)
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASSWORD=
SMTP_FROM=
CONTACT_EMAIL=
CAREERS_EMAIL=
```

## Backend

Standalone Express.js server for email handling.

```bash
cd backend
npm install
cp .env.example .env
# Fill in environment variables
npm run dev
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | About VERASTRO INFRA |
| `/services` | All Services |
| `/engineering` | Engineering capabilities |
| `/investments` | Investment opportunities |
| `/careers` | Job listings & application |
| `/contact` | Contact form & locations |
| `/privacy-policy` | Privacy Policy |
| `/terms-of-use` | Terms of Use |

## Company

**VERASTRO INFRA** is a division of Verastro Inc., focused on engineering, site development, landscaping, grading, drainage, and outdoor infrastructure.

📍 Delaware · Florida · Texas · Arkansas  
📞 (904) 302-9170  
📧 inquiries@verastroinfra.com
