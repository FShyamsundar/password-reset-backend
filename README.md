# Password Reset Backend API

A secure Node.js REST API for user authentication and password reset functionality with email verification.

## 🚀 Features

- User registration with encrypted passwords
- User login authentication
- Password reset via email with time-limited tokens
- Secure token generation and validation
- Email notifications using Nodemailer
- MongoDB database integration
- RESTful API architecture

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: bcryptjs for password hashing
- **Email Service**: Nodemailer with Gmail
- **Security**: crypto for token generation

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── db.js              # MongoDB connection configuration
│   ├── controllers/
│   │   └── authController.js  # Authentication logic (signup, login, forgot, reset)
│   ├── middlewares/
│   │   └── errorHandler.js    # Global error handling middleware
│   ├── models/
│   │   └── User.js            # User schema with password reset fields
│   ├── routes/
│   │   └── authRoutes.js      # API route definitions
│   ├── utils/
│   │   └── sendEmail.js       # Email sending utility
│   └── app.js                 # Express app configuration
├── .env                       # Environment variables (not in repo)
├── .gitignore                 # Git ignore rules
├── package.json               # Dependencies and scripts
├── server.js                  # Application entry point
└── README.md                  # Documentation
```

## 🔧 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Gmail account with App Password enabled

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/FShyamsundar/password-reset-backend.git
cd password-reset-backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:
```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL=your_gmail@gmail.com
PASSWORD=your_gmail_app_password
```

4. **MongoDB Setup**
   - Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a new cluster
   - Create database user with read/write permissions
   - Whitelist your IP (or use 0.0.0.0/0 for all IPs)
   - Get connection string and add to `.env`

5. **Gmail App Password Setup**
   - Enable 2-Factor Authentication on Gmail
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Generate new app password
   - Add to `.env` (remove spaces)

6. **Start the server**
```bash
npm start
```

Server will run on `http://localhost:5000`

## 📡 API Endpoints

### 1. User Signup
**POST** `/api/auth/signup`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "message": "User created successfully",
  "userId": "64abc123def456789"
}
```

### 2. User Login
**POST** `/api/auth/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "64abc123def456789",
  "userId": "64abc123def456789",
  "name": "John Doe"
}
```

### 3. Forgot Password
**POST** `/api/auth/forgot-password`

**Request Body:**
```json
{
  "email": "john@example.com"
}
```

**Response:**
```json
{
  "message": "Password reset link sent to your email"
}
```

### 4. Reset Password
**POST** `/api/auth/reset-password/:token`

**Request Body:**
```json
{
  "password": "newSecurePassword123"
}
```

**Response:**
```json
{
  "message": "Password reset successful"
}
```

## 🔒 Security Features

- Passwords hashed using bcryptjs (10 salt rounds)
- Reset tokens generated using crypto (32 bytes)
- Token expiry: 10 minutes
- CORS enabled for frontend integration
- Environment variables for sensitive data

## 🚀 Deployment

### Deploy on Render

1. Push code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click **New +** → **Web Service**
4. Connect your repository
5. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Add environment variables:
   - `MONGO_URI`
   - `EMAIL`
   - `PASSWORD`
   - `PORT`
   - `NODE_ENV=production`
7. Deploy

### Deploy on Railway

1. Go to [Railway](https://railway.app)
2. New Project → Deploy from GitHub
3. Select repository
4. Add environment variables
5. Deploy

## 📦 Dependencies

```json
{
  "express": "^4.18.2",
  "mongoose": "^8.0.3",
  "bcryptjs": "^2.4.3",
  "dotenv": "^16.3.1",
  "nodemailer": "^6.9.7",
  "cors": "^2.8.5",
  "crypto": "^1.0.1"
}
```

## 🐛 Troubleshooting

**MongoDB Connection Error:**
- Check connection string format
- Verify database user credentials
- Whitelist IP address in MongoDB Atlas

**Email Not Sending:**
- Verify Gmail App Password (no spaces)
- Check 2FA is enabled on Gmail
- Ensure EMAIL and PASSWORD in .env are correct

**Port Already in Use:**
- Change PORT in .env file
- Kill process using port 5000

## 📄 License

MIT License

## 👤 Author

FShyamsundar

## 🔗 Links

- Frontend Repository: [password-reset-frontend](https://github.com/FShyamsundar/password-reset-frontend)
- Live Demo: [Coming Soon]
