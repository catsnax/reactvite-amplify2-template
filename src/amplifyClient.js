import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
      userPoolClientId: import.meta.env.VITE_COGNITO_USER_POOL_CLIENT_ID,
      region: import.meta.env.COGNITO_REGION,
    },
  },
  API: {
    REST: {
      todoApi: {
        endpoint: import.meta.env.REST_API_ENDPOINT,
        region: import.meta.env.REST_API_REGION,
      },
    },
  },
});
