//URL paths
export const URL_LOGIN: string = '/login';
export const URL_SIGNUP: string = '/signup';

// Cognito Auth Config for DEV
export const COGNITO_AUTH_CONFIG = {
  authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_pSRcPee22",
  client_id: "gcea5v2j63af1f7glvmfs8inp",
  redirect_uri: window.location.origin + "/home",
  response_type: "code",
  scope: "phone openid email"
}