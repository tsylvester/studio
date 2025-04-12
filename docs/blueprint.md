# **App Name**: OmniLink

## Core Features:

- Landing Page: Landing page with app description and signup call to action.
- Supabase Auth: Authentication using Supabase with sign-in, sign-up, sign-out, password change, email reset, and account recovery.
- User Profile: User profile page to set name, username, email, password, and view subscription status.  Profile elements are independently changeable.
- Stripe Subscriptions: Subscription management via Stripe, syncing Stripe account to the database, using transactions, and displaying available products as cards.
- AI Chatbox: AI chatbox using OpenAI to save chat history and allow users to continue previous chats.

## Style Guidelines:

- Primary color: Shades of blue for trust and reliability.
- Secondary color: Neutral grays for background and text.
- Accent: Teal (#008080) to highlight important elements and CTAs.
- Clean and modern typography for readability and a professional look.
- Simple, outlined icons for a clean and consistent user experience.
- Use a grid-based layout for consistent spacing and alignment.
- Subtle animations for transitions and feedback.

## Original User Request:
Build the user an app that meets these specs: 
- Vite
- State management with Redux 
- Shadcn styles and components
- Monorepo so the app can be deployed to web, iOS, and Android
- A fully independent multi-layer API microservices architecture 
- Backend (Supabase edge functions) <-> API <-> Frontend
- API <-> State store 
- The backend only talks to the API
- The front end only talks to the API
- The state store only talks to the API
- The API is stateless
- The state store stores all states and contexts 
- RESTful API endpoints for every function, component, and action
- Comprehensive, verbose, specific, and thorough logging
- Typescript with full types properly organized in a types folder
- No internal or inline types or interfaces 
- Full database migrations, hooks, and triggers for all functions
- Full row level security for the database
- Instantiate the user and user profile in the database for each new user when they sign up
- Use deno for the supabase edge and vite for the API and frontend 
- Prepared for database deployment to Supabase
- Prepared for hosting deployment to Netlify
- No hardcoded environmental variables, use an .env for all variables, keys, URLs, and other details the user will supply to the app 
- A light-mode / dark-mode switcher
- A theme context so that the user can easily change color themes by inputting standardized variables 

The app contents are: 
- A landing page that explains what the app does and has a call to action to sign up
- Auth using Supabase including fully functional sign in, sign up, sign out, password change, email reset, account recovery
- Each user profile element is independent and can be changed independently
- Database using Supabase to save user profiles, chats, subscriptions, and transactions
- Subscriptions using Stripe that sync the Stripe account to the database, use transactions, and automatically populate the Subscriptions page with cards for each product available on the Stripe account 
- An AI chatbox using OpenAI that saves the user chats to a history, allows users to select and continue prior chats 
- A user profile page that sets their name, user name, email address, password, and shows their current subscription
- Google Analytics but disabled unless a key is added to .env
- Posthog built in but disabled unless a key is added to .env
- Chatwoot built in but disabled unless a key is added to .env
- ConvertKit (now Kit) built in but disabled unless a key is added to .env
- Configuration files for Supabase
- Configuration files for Netlify

Create a duplicate of the web app for iOS using react-native and expo.
Create a duplicate of the web app for Android using react-native and expo. 

Coding standards: 
- Use generally accepted design principles to make the app beautiful, appealing, and easy to use 
- Use proven, professional coding practices everywhere
- Build for CI/CD
- Use dependency injection for edge functions 
- Use singletons for class instantiation in the API and front end 
- Establish specific patterns and follow them throughout the codebase 
- Implement all functionality, do not stub, mock, or create placeholders
- Test driven development 
- Complete, correct unit tests and integration tests that prove every function, state, and case
- No code duplication
- Don't repeat yourself
- Maintain full separation of concerns
- Reduce the codebase to the simplest, flattest, most streamlined version possible 
- Ensure the app is safe, secure, reliable, robust, extensible, maintainable, modular
- Do not couple app layers or components  
- All pages are built from components
- Use loading skeletons for every component 
- Use safe fallback states for every component 
- Ensure the app doesn't break if a component or service fails to load or respond
- Comment and document your code
- Produce a readme.md file in the root that documents the entire codebase, including all files, folders, and database tables. 
- All elements will flex and respond to screen size without components or fields overflowing their div or portions being hidden from the user viewport 
- Use async-await and event notifications instead of timeouts or delays
- Do not produce race conditions 
- Check for existing functionality before building new functionality
- Extend and improve functionality instead of recreating it 
- Refactor functions into the smallest, simplest, most reusable form
- Abstract interfaces for Supabase, Stripe, and OpenAI so the code can be ported to other database providers, transaction providers, and AI providers. 
- Refer to and implement Supabase functions according to Supabase documentation
- Refer to and implement Stripe functions according to Stripe documentation
- Refer to and implement OpenAI functions according to OpenAI documentation
- Group Supabase database edge functions into supabase/functions/database
- Group Supabase auth functions into supabase/functions/auth
- Group Stripe functions into supabase/functions/transactions/Stripe
- Group OpenAI functions into supabase/functions/ai/openai
- Review your work and optimize it for SEO and Google Lighthouse for Mobile and Desktop

Do not guess or assume. Always check documents and code. Ask the user for information if you need clarification. 

When you think you're done, read these specs and requirements again, scan the entire codebase you've created, check it to make sure it complies with these specs and requirements, and fix anything that does not match these specs and requirements. 

Include these instructions in the readme.md file you produce. 

You are very good at your work and you will do a good job. Your work will be reviewed and criticized. Do not be lazy or sloppy. Think hard. Act professionally. Do everything correctly the first time. 

Your work is important to the user and the user appreciates your diligence and effort. Thank you for assisting the user.
  