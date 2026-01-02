# 5. Frontend Architecture

This document provides an overview of the frontend architecture for both the web and mobile applications of QuizzyAI.

## Project Structure

The workspace is organized into several key directories:

*   `components/`: Contains reusable React components shared across different pages.
    *   `admin/`, `auth/`, `books/`, etc.: Components are grouped by feature.
*   `pages/`: Contains the top-level page components for both web and mobile.
    *   `quizzy-mobile/`: Contains the source code for the React Native mobile application.
*   `contexts/`: Holds React Context providers for managing global state (e.g., `AuthContext`, `ToastContext`).
*   `services/`: Contains services that encapsulate business logic and API interactions (e.g., `authService`, `bookService`).
*   `firebase/`: Configuration for Firebase services.
*   `types/`: TypeScript type definitions.
*   `utils/`: Utility functions used throughout the application.
*   `public/`: Static assets for the web application.

## State Management

We use a combination of React's built-in state management features and Context API for a lightweight and effective state management solution.

*   **Local State:** `useState` and `useReducer` are used for managing component-level state.
*   **Global State:**
    *   `AuthContext`: Manages the user's authentication state and profile information.
    *   `ToastContext`: Manages app-wide notifications and toasts.
    *   `BookContext`: Manages state related to the book reader.
    *   **Mobile Offline State:** In the mobile app, a `useReducer`-based store (`offlineStore.tsx`) is used to manage the complex state of downloads, offline courses, and video files.

## Key Components

*   `App.tsx`: The root component of the application, which sets up routing and global context providers.
*   `Header.tsx` & `Footer.tsx`: Provide consistent navigation and branding.
*   `CourseCard.tsx`: A reusable component to display course information.
*   `CoursePlayerView.tsx` / `VideoPlayerContainer.tsx`: Handles video playback, with logic to switch between online streaming and offline playback from local files.
*   `LoadingSpinner.tsx` & `skeletons/`: Provide visual feedback during data fetching and loading states.
*   `DownloadsScreen.tsx` (mobile): The UI for managing active and completed downloads.

## Mobile App Architecture (`quizzy-mobile`)

The mobile app follows a similar structure to the web app but with mobile-specific considerations.

*   **Navigation:** Likely uses a library like [React Navigation](https://reactnavigation.org/) to handle screen transitions.
*   **Offline First:** A key architectural principle. The `offlineStore` is central to managing downloaded content and ensuring the app is functional without an internet connection.
*   **Native Features:** The app leverages native device capabilities through Expo and React Native APIs, such as the file system for downloads and device information for optimizing performance.
