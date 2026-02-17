# Password Reset Backend

Node.js + Express + MongoDB backend for password reset functionality.

## Structure
```
backend/
├── src/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   └── authController.js  # Auth logic (signup, login, forgot, reset)
│   ├── middlewares/
│   │   └── errorHandler.js    # Error handling
│   ├── models/
│   │   └── User.js            # User schema
│   ├── routes/
│   │   └── authRoutes.js      # API routes
│   ├── utils/
│   │   └── sendEmail.js       # Email utility
│   └── app.js                 # Express app config
├── .env                       # Environment variables
├── .gitignore
├── package.json
└── server.js                  # Entry point
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure `.env`:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL=your_gmail@gmail.com
PASSWORD=your_gmail_app_password
```

3. Start server:
```bash
npm start
```

## API Endpoints

- POST `/api/auth/signup` - Create new user
- POST `/api/auth/login` - User login
- POST `/api/auth/forgot-password` - Send reset email
- POST `/api/auth/reset-password/:token` - Reset password
