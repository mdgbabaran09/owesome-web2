import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
});

// Extract the L2 UserPool construct from the Amplify Auth block
const userPool = backend.auth.resources.userPool;

// Add a unique Cognito domain prefix
userPool.addDomain('CognitoDomain', {
  cognitoDomain: {
    domainPrefix: 'rjhbfwekjnfkwrbgwn', // Replace with a unique string
  },
});