export const PORT = (process.env.PORT && parseInt(process.env.PORT)) || 5000;
export const COOKIE_KEY = "cookey";
export const __prod__ = process.env.NODE_ENV === 'production';
export const __test__ = process.env.NODE_ENV === 'test';
export const __local__ = false;
export const GAUTH_CLIENT_ID = process.env.GAUTH_CLIENT_ID || "TESTING_CLIENT_ID";
export const GAUTH_REDIRECT_URL = process.env.GAUTH_REDIRECT_URL
export const GAUTH_CLIENT_SECRET = process.env.GAUTH_CLIENT_SECRET;
export const TWITTER_SECRET = process.env.TWITTER_SECRET;
export const TWITTER_TOKEN = process.env.TWITTER_TOKEN;
export const TWITTER_API_KEY = process.env.TWITTER_API_KEY;
export const TWITTER_REDIRECT_URL = process.env.TWITTER_REDIRECT_URL;
export const TWITTER_CLIENT_ID = process.env.TWITTER_CLIENT_ID;
export const TWITTER_CLIENT_SECRET = process.env.TWITTER_CLIENT_SECRET;
export const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
export const GITHUB_REDIRECT_URL = process.env.GITHUB_REDIRECT_URL;
export const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;