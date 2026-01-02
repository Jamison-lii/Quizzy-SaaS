# 3. Technology Stack

QuizzyAI is built on a modern, scalable, and robust technology stack, chosen to provide a seamless experience across web and mobile platforms.

## Frontend

Our frontend is built using **React** and **React Native**, allowing us to share a significant portion of our logic and components across the web and mobile applications.

*   **Web Application:**
    *   **Framework:** [React](https://reactjs.org/) with [Vite](https://vitejs.dev/) for a fast development experience.
    *   **Language:** [TypeScript](https://www.typescriptlang.org/) for type safety and improved developer productivity.
    *   **Styling:** (Assumed) A modern CSS-in-JS library or a utility-first framework like Tailwind CSS.

*   **Mobile Application:**
    *   **Framework:** [React Native](https://reactnative.dev/) (likely with [Expo](https://expo.dev/)) to build native apps for iOS and Android from a single codebase.
    *   **Language:** [TypeScript](https://www.typescriptlang.org/).
    *   **Offline Storage:** We use `AsyncStorage` and `Expo FileSystem` to store course data and downloaded videos for offline access.

## Backend & API

Our backend is designed as a set of services that handle business logic, data processing, and communication with our database and AI models.

*   **Runtime:** [Node.js](https://nodejs.org/) with [TypeScript](https://www.typescriptlang.org/).
*   **API:** A combination of RESTful APIs and serverless functions (e.g., using Firebase Functions) to handle requests from the client applications.
*   **Authentication:** We use [Firebase Authentication](https://firebase.google.com/docs/auth) for secure and reliable user authentication across devices.
*   **Payments:** Integration with [Fapshi](https://fapshi.com/) for processing payments.

## Database

*   **Primary Database:** [Cloud Firestore](https://firebase.google.com/docs/firestore) is our primary database. It's a flexible, scalable NoSQL database that provides real-time data synchronization, which is perfect for features like live chat and progress tracking.

## AI & Machine Learning

Artificial Intelligence is at the heart of QuizzyAI. We leverage powerful AI models to provide our unique learning features.

*   **AI Model:** We use Google's [Gemini](https://deepmind.google/technologies/gemini/) family of models for tasks such as:
    *   Generating quizzes from text and documents.
    *   Providing explanations and assistance in the Book Reader.
    *   Personalizing learning paths for students.
*   **AI Service:** A dedicated service (`geminiService.ts`) manages communication with the Gemini API.
