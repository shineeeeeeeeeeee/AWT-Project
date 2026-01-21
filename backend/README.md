Features It Will Include

MongoDB (Mongoose) for storing users

Express for API routes (/api/signup, /api/login, /api/role)

bcrypt for password hashing

JWT for authentication tokens

CORS setup for frontend connection

Environment variables for secure keys



Flow Matching Your Frontend

Signup:
→ POST /api/signup with { fullName, email, password }
→ Returns user info (no role yet).

Select Role:
→ POST /api/role with { email, role }
→ Updates user’s role.

Login:
→ POST /api/login with { email, password }
→ Verifies credentials, returns JWT + role.