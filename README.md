# Journal Hub

A platform where authors can upload articles to a journal. Visitors can explore and read the articles, while authors can log in, manage, and upload their works. The website is built using React for the frontend and Firebase for the backend.

[![GitHub VishalBhat07](https://img.shields.io/badge/GitHub-VishalBhat07-red?style=for-the-badge&logo=github)](https://github.com/VishalBhat07)
<br>
[![GitHub SRNI-2005](https://img.shields.io/badge/GitHub-srni--2005-blue?style=for-the-badge&logo=github)](https://github.com/SRNI-2005)


## Features

- **User Authentication:** Sign-up and sign-in functionality for authors.
- **Article Upload:** Authors can upload articles with relevant metadata (title, author, description, keywords, etc.).
- **File Upload:** Articles are uploaded with associated files (PDF, DOCX, etc.).
- **Firebase Integration:** Firebase is used for authentication and Firestore as the database to store article metadata.
- **Responsive Design:** Works across devices, ensuring a smooth experience on mobile, tablet, and desktop.

## Technologies Used

- **Frontend:** React, HTML5, CSS3
- **Backend:** Firebase Authentication, Firebase Firestore
- **Hosting:** Firebase Hosting (or other options if applicable)

## Project Setup

### Prerequisites

- **Node.js** installed
- **Firebase** account

### Clone the repository

```bash
git clone https://github.com/VishalBhat07/journal-website.git
cd journal-website
npm install
```

### Set up environment variables
- Create a .env file in the root of the project with the following content:
```bash
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id
```
- Replace the values with your Firebase project configuration, which can be found in your Firebase console.

### Start the Development Server
```bash
npm start
```
- The app will start on ``http://localhost:3000/``.

### Firebase Configuration
- Ensure you have set up Firebase Authentication and Firestore in your Firebase console to handle user login and data storage.

### Deployment
To deploy the application, you can use Firebase Hosting or any other platform:

1. Install Firebase CLI if not already installed:
```bash
npm install -g firebase-tools
```
2. Login to Firebase:
```bash
firebase login
```
3. Initialize Firebase in the project:
```bash
firebase init
```
4. Deploy the project:
```bash
firebase deploy
```

### Folder Structure

```bash
src/
├── components/        # Reusable components like Navbar, ArticleList, UploadPopup
├── firebase.js        # Firebase configuration
├── App.jsx            # Main application component
├── index.js           # Entry point of the React app
├── styles/            # Global CSS files
```

### Usage

- Authors can sign up or log in to the platform.
- Once logged in, authors can upload articles with relevant information.
- Visitors to the platform can view and read uploaded articles.


### Future Enhancements

Implement advanced search functionality based on keywords and authors.
Add support for multiple file formats.
Improve UI/UX with a better article preview feature.

```bash
This README covers all the essential parts of our project, including setup, usage, and deployment steps.
```




