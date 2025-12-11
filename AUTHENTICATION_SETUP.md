# Resume Builder Authentication Setup

## Clerk Authentication Integration

This application now uses Clerk for authentication. To complete the setup, follow these steps:

### 1. Create a Clerk Account
1. Go to [https://clerk.com](https://clerk.com) and sign up for a free account
2. Create a new application in the Clerk dashboard

### 2. Configure Environment Variables
Update the `.env.local` file with your actual Clerk keys:

```bash
# Replace these with your actual Clerk keys from the dashboard
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_actual_secret_key_here

# These URLs are already configured
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

### 3. Clerk Dashboard Configuration
In your Clerk dashboard:
1. Set the sign-in URL to: `http://localhost:3000/sign-in`
2. Set the sign-up URL to: `http://localhost:3000/sign-up`
3. Set the redirect URLs to: `http://localhost:3000/dashboard`

### 4. Features Implemented

#### Authentication Pages
- **Sign In**: `/sign-in` - Custom styled Clerk SignIn component
- **Sign Up**: `/sign-up` - Custom styled Clerk SignUp component
- **Dashboard**: `/dashboard` - Protected route with user info

#### Protected Routes
All main application routes are now protected:
- `/dashboard` - User dashboard with welcome message
- `/builder` - Resume builder (requires authentication)
- `/templates` - Template selector (requires authentication)

#### User Interface Updates
- **User Button**: Added to dashboard and builder pages for account management
- **Custom Styling**: Clerk components styled to match the glassmorphism theme
- **Responsive Design**: Authentication works on all device sizes

#### Security Features
- **Middleware Protection**: Routes are protected server-side
- **Automatic Redirects**: Unauthenticated users redirected to sign-in
- **Session Management**: Handled automatically by Clerk

### 5. How It Works

1. **Landing Page** (`/`) - Checks authentication status and redirects accordingly
2. **Unauthenticated Users** - Redirected to `/sign-in`
3. **Authenticated Users** - Can access `/dashboard`, `/builder`, and `/templates`
4. **Sign Out** - Available through the UserButton component

### 6. Development

Once you've configured the Clerk keys:

```bash
npm run dev
```

The application will be fully functional with authentication!

### 7. Production Deployment

For production deployment:
1. Update environment variables with production Clerk keys
2. Update redirect URLs in Clerk dashboard to production domain
3. Deploy as normal - authentication will work automatically

## Authentication Flow

```
/ (Home) → Check Auth Status
├── Not Signed In → /sign-in → Sign In → /dashboard
└── Signed In → /dashboard

Protected Routes: /dashboard, /builder, /templates
Public Routes: /sign-in, /sign-up
```

The resume builder is now a fully authenticated application!