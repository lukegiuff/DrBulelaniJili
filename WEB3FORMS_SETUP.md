# Web3Forms Setup Guide

## Overview
This project uses Web3Forms as a free email backend service for the contact form. Web3Forms sends form submissions directly to your email without requiring a backend server.

## Setup Instructions

### 1. Get Your Web3Forms Access Key

1. Go to [Web3Forms.com](https://web3forms.com)
2. Click "Get Started" or "Create Access Key"
3. Enter your email address (bulelanijili@g.harvard.edu)
4. Check your email for the access key
5. Copy the access key (it will look something like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### 2. Add Environment Variable

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add the following line:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
3. Replace `your_access_key_here` with your actual access key from Web3Forms

### 3. Configure Email Settings

The form is currently set up to send emails to: **bulelanijili@g.harvard.edu**

To change the recipient email, update the `to` field in `src/app/contact/ContactClient.tsx`:
```typescript
to: 'your-new-email@example.com'
```

## Features Implemented

- ✅ Form validation
- ✅ Loading states during submission
- ✅ Success/error message display
- ✅ Form reset after successful submission
- ✅ Professional email formatting
- ✅ Includes sender's contact information
- ✅ Custom subject line for easy identification

## Form Fields Sent

- **Name**: First Name + Last Name
- **Email**: Sender's email address
- **Phone**: Optional phone number
- **Message**: Main inquiry message
- **Subject**: "New Contact Form Submission from Dr. Bulelani Jili Website"

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email (bulelanijili@g.harvard.edu) for the form submission
4. The email should contain all the form data in a readable format

## Troubleshooting

- **Form not sending**: Check that your access key is correct in `.env.local`
- **Not receiving emails**: Check your spam folder
- **Error messages**: The form will display specific error messages if something goes wrong

## Security Notes

- The access key is safe to use in frontend code (hence `NEXT_PUBLIC_` prefix)
- Web3Forms includes spam protection
- No sensitive data is stored - emails are sent directly to your inbox 