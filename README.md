# Movie-Verse

Movie-Verse is a web application that allows users to browse and like their favorite movies. Users can sign up, log in, and save their liked movies to their account. The app fetches movie data from an API and categorizes them for easy navigation.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Firebase Setup](#firebase-setup)
- [Deployment](#deployment)

## Features

- User registration and authentication using Firebase.
- User login and logout functionality.
- Movie listing by categories.
- Liking and saving movies to the user's account.
- Real-time synchronization of liked movies using Firebase Firestore.
- Responsive design using Tailwind CSS.

## Tech Stack

- React
- Firebase (Authentication, Firestore)
- Tailwind CSS
- Vercel (for deployment)

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-verse.git
   cd movie-verse
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Firebase Setup

To use Firebase for authentication and data storage, you need to set up a Firebase project. Follow these steps:

1. Go to the [Firebase Console](https://console.firebase.google.com/).

2. Create a new project for your app.

3. Set up Firebase Authentication and Firestore for your project.

4. Obtain your Firebase configuration by going to Project settings > General and scrolling down to the Firebase SDK snippet. You will find a config object with your API keys and other settings.

5. Create a `.env.local` file in the project's root directory and add your Firebase configuration:

   ```env
   REACT_APP_API_KEY=your-api-key
   REACT_APP_AUTH_DOMAIN=your-auth-domain
   REACT_APP_PROJECT_ID=your-project-id
   REACT_APP_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_APP_ID=your-app-id
   ```

6. Make sure to configure Firebase rules to secure your Firestore database.

## Deployment

The app is deployed on Vercel. To deploy your own instance of the app on Vercel, follow these steps:

1. Install the Vercel CLI globally (if not already installed):

   ```bash
   npm install -g vercel
   ```

2. Log in to your Vercel account using the CLI:

   ```bash
   vercel login
   ```

3. Deploy the app to Vercel:

   ```bash
   vercel
   ```

4. Follow the prompts to choose your project settings and deployment options.
