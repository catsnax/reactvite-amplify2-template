# Amplify Gen 2 with Vite Connecting to Custom Backend

This template serves as the base instructions on using Amplify Gen 2 to use Cognito with custom Backend Lambda

## Step 1: Install needed packages (npm install)

- npm create vite@latest
- npm create amplify@latest
- npm install @tanstack/react-query (optional)
- npm install @aws-amplify/ui-react

## Step 2: Configure Amplify

1. Check the amplifyClient.js for the template.
2. Outputs can be imported and configure can also be done in App.jsx

## Step 3: Integrate Amplify Gen 2 as Authenticator

1. View App.jsx for more details, use tanstack query and

## Todo

- customize the css of amplify gen 2 sign in/sign up button ✔️
  - edit in App.css the classes of html components in login page
  - ooga booga tip: use f12 view to see component names of html
- make google provider work, oauth param not configured error ✔️
  - to enable google, add identity provider, sign in to google cloud to get client id and client secret (instructions in social and external providers)
  - edit the sign out/callback urls in login pages of App Client
  - add google as identity provider and profile in OIDC scopes in App Client
  - configure oAuth in amplify configure
