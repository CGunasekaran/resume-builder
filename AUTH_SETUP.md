# Authentication Setup Guide

## Current Status
The Resume Builder app is currently running **without authentication** to allow development without requiring Clerk setup.

## Adding Clerk Authentication (When Ready)

### 1. Get Clerk Keys
1. Sign up at [clerk.com](https://clerk.com)
2. Create a new application
3. Copy your publishable key from the dashboard

### 2. Environment Configuration
Update `.env.local` with your real keys:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
CLERK_SECRET_KEY=sk_test_your_actual_secret_key_here
```

### 3. Restore Authentication Files

#### Restore middleware.ts:
```bash
mv middleware.ts.disabled middleware.ts
```

#### Update layout.tsx:
```tsx
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
```

#### Update dashboard/page.tsx:
```tsx
import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId) {
    return null;
  }

  // Add UserButton to header
  // Replace placeholder with: <UserButton />
}
```

#### Update builder/page.tsx:
```tsx
import { UserButton } from "@clerk/nextjs";

// Replace the user placeholder with:
<UserButton
  appearance={{
    elements: {
      avatarBox: "h-8 w-8 sm:h-10 sm:w-10",
      userButtonPopoverCard: "bg-white/10 backdrop-blur-xl border border-white/20",
      userButtonPopoverActionButton: "text-white hover:bg-white/10",
    },
  }}
/>
```

#### Recreate authentication pages:
```bash
mkdir -p app/\(auth\)/sign-in/\[\[...sign-in\]\]
mkdir -p app/\(auth\)/sign-up/\[\[...sign-up\]\]
```

### 4. Dependencies
The Clerk packages are already installed:
- `@clerk/nextjs`: ^6.36.2

### 5. Protected Routes
The middleware will automatically protect:
- `/dashboard`
- `/builder` 
- `/templates`

## Current Features Working Without Auth
✅ Homepage and landing page  
✅ Resume builder with all editing features  
✅ Template selection and preview  
✅ PDF generation  
✅ File upload functionality  
✅ Mobile responsiveness  

## What Will Be Added With Auth
🔐 User-specific resume storage  
🔐 Dashboard with saved resumes  
🔐 User profile management  
🔐 Protected routes  

## Development Notes
- The app is fully functional without authentication
- User data is stored in local state (not persisted)
- PDF generation works without account
- All templates and editing features are available

## Backup Files
- `middleware.ts.disabled` - Contains the authentication middleware
- Previous authentication components were removed but can be recreated using the code above

---

**Ready to add authentication?** Follow steps 1-4 above when you have your Clerk account set up.