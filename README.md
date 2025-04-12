# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

# Project Structure and Codebase Documentation

This document provides a comprehensive overview of the project codebase, its structure, key components, and coding standards. It also includes instructions on how to set up the development environment, build, test, and deploy the application.

## Table of Contents

1.  **Project Overview**
2.  **Directory Structure**
3.  **Key Components**
4.  **Coding Standards**
5.  **Setup and Installation**
6.  **Building the Application**
7.  **Testing**
8.  **Deployment**
9.  **Supabase Functions**
10. **Stripe Functions**
11. **OpenAI Functions**
12. **Environmental Variables**
13. **Database Migrations, Hooks, and Triggers**
14. **Row Level Security**
15. **Theme Context**
16. **Analytics and Integrations**
17. **Instructions and Review**

## 1. Project Overview

The project is an OmniLink application built using Next.js, designed to be deployed on web, iOS, and Android. It features a microservices architecture with a clear separation of concerns between the frontend, API, and backend. The application uses Supabase for the backend, Stripe for subscription management, and OpenAI for AI chat functionalities.

### Core Features:

*   Landing Page: Public-facing marketing page.
*   Supabase Authentication: Secure user authentication.
*   User Profile: Customizable user settings.
*   Stripe Subscriptions: Integrated subscription management.
*   AI Chatbox: Interactive chat interface using OpenAI.

## 2. Directory Structure

The project structure is organized as follows:

### Root Directory:

*   `.env`: Environmental variables configuration file.
*   `README.md`: Project documentation (this file).
*   `next.config.js`: Next.js configuration file.
*   `package.json`: Node.js dependencies and scripts.
*   `tailwind.config.js`: Tailwind CSS configuration file.
*   `tsconfig.json`: TypeScript configuration file.

### `src/` Directory:

*   `app/`: Next.js application directory containing:
    *   `page.tsx`: Landing page.
    *   `auth/`: Authentication pages (sign-in, sign-up, sign-out, etc.).
    *   `profile/`: User profile page.
    *   `layout.tsx`: Main layout for the application.
    *   `globals.css`: Global CSS styles.
*   `components/`: Reusable UI components.
    *   `ui/`: Shadcn UI components.
    *   `icons.ts`: Icon definitions.
*   `lib/`: Utility functions and helper libraries.
    *   `utils.ts`: Class name utilities.
*   `hooks/`: Custom React hooks.
    *   `use-toast.ts`: Toast hook
    *   `use-mobile.ts`: Mobile detection hook
*   `services/`: External services integrations (Supabase, Stripe, OpenAI, etc.).
    *   `stripe.ts`: Stripe service integration.
    *    `google-analytics.ts`: Google Analytics integration.
    *    `posthog.ts`: Posthog integration.
    *    `chatwoot.ts`: Chatwoot integration.
    *    `convertkit.ts`: ConvertKit integration.
*   `ai/`: AI-related functionalities.
    *   `ai-instance.ts`: Manages OpenAI API interactions.
    *   `flows/`: AI flows.
        *   `suggest-chat-topics.ts`: Suggests chat topics.
        *   `summarize-chat-history.ts`: Summarizes chat history.
*   `types/`: TypeScript type definitions.

### `supabase/` Directory:

*   `functions/`: Supabase edge functions.
    *   `database/`: Database-related functions.
    *   `auth/`: Authentication-related functions.
    *   `transactions/`: Transaction-related functions.
        *   `stripe/`: Stripe-specific functions.
    *   `ai/`: AI-related functions.
        *   `openai/`: OpenAI-specific functions.

## 3. Key Components

### Frontend (Next.js):

*   **Pages**: Implemented as functional components.
*   **UI Components**: Built with Shadcn UI for consistency.
*   **State Management**: Utilizes React Context for managing application state.

### API (Deno or Node.js):

*   **Stateless**: Each API request is treated independently.
*   **RESTful Endpoints**: Well-defined API endpoints for all functions.

### Backend (Supabase):

*   **Edge Functions**: Deno functions for secure, server-side logic.
*   **Database**: PostgreSQL database for storing user data, chats, subscriptions, and transactions.

## 4. Coding Standards

*   **TypeScript**: Use TypeScript with full types.
*   **No Inline Types**: Define all types and interfaces in the `types/` directory.
*   **DRY Principle**: Minimize code duplication.
*   **Separation of Concerns**: Maintain clear separation between layers and components.
*   **Asynchronous Operations**: Use `async/await` for asynchronous operations.
*   **Logging**: Implement comprehensive and verbose logging.
*   **Component-Based**: Build all pages from reusable components.
*   **Error Handling**: Implement loading skeletons and fallback states.
*   **Comments**: Document code thoroughly.

## 5. Setup and Installation

### Prerequisites:

*   Node.js and npm installed.
*   Supabase CLI installed.
*   Deno installed (if using Deno edge functions).
*   Stripe account.
*   OpenAI API key.

### Installation Steps:

1.  Clone the repository.
2.  Install dependencies:

    ```bash
    npm install
    ```
3.  Set up environmental variables in `.env` file.
4.  Install Shadcn UI components

    ```bash
    npx shadcn-ui@latest init
    ```

## 6. Building the Application

To build the application for production, run:

```bash
npm run build
```

## 7. Testing

Implement test-driven development with unit tests and integration tests to ensure code quality and reliability.

## 8. Deployment

### Supabase Deployment:

1.  Set up a Supabase project.
2.  Use Supabase CLI to deploy database changes and edge functions.

### Netlify Deployment:

1.  Connect the repository to Netlify.
2.  Configure build settings and environmental variables.

## 9. Supabase Functions

*   Group Supabase database edge functions into `supabase/functions/database`
*   Group Supabase auth functions into `supabase/functions/auth`

## 10. Stripe Functions

*   Group Stripe functions into `supabase/functions/transactions/Stripe`
    Refer to and implement Stripe functions according to Stripe documentation.

## 11. OpenAI Functions

*   Group OpenAI functions into `supabase/functions/ai/openai`
    Refer to and implement OpenAI functions according to OpenAI documentation.

## 12. Environmental Variables

The application relies on environmental variables for configuration. Create a `.env` file in the root directory and define the following variables:

*   `SUPABASE_URL`: The URL of the Supabase project.
*   `SUPABASE_ANON_KEY`: The anonymous key for the Supabase project.
*   `STRIPE_SECRET_KEY`: The secret key for the Stripe account.
*   `OPENAI_API_KEY`: The API key for OpenAI.
*    `GOOGLE_ANALYTICS_KEY`: The key for Google Analytics.
*    `POSTHOG_KEY`: The key for Posthog.
*    `CHATWOOT_KEY`: The key for Chatwoot.
*    `CONVERTKIT_KEY`: The key for ConvertKit.

## 13. Database Migrations, Hooks, and Triggers

Implement full database migrations, hooks, and triggers for all functions, ensuring database integrity and automation.

## 14. Row Level Security

Implement full row-level security (RLS) for the database to protect user data and enforce data access policies.

## 15. Theme Context

Implement a theme context so that the user can easily change color themes by inputting standardized variables.

## 16. Analytics and Integrations

Google Analytics, Posthog, Chatwoot, and ConvertKit are built in but disabled unless a key is added to `.env`.

## 17. Instructions and Review

*   Review these specs and requirements again.
*   Scan the entire codebase and check it to make sure it complies with these specs and requirements.
*   Fix anything that does not match these specs and requirements.

This documentation aims to provide a clear understanding of the codebase and its architecture. Follow these guidelines to ensure the application is safe, secure, reliable, robust, extensible, maintainable, and modular. Thank you for your diligence and effort in building this application.
