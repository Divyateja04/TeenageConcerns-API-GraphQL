export const PORT = (process.env.PORT && parseInt(process.env.PORT)) || 5000;
export const COOKIE_KEY = "cookey";
export const __prod__ = process.env.NODE_ENV === 'production';
export const __test__ = process.env.NODE_ENV === 'test';
export const __local__ = true;
export const GAUTH_CLIENT_ID = "968274477291-ehl0pptitneekj42raqg2ims26k5uugi.apps.googleusercontent.com";
export const GAUTH_REDIRECT_URL = "http://localhost:5000";
export const GAUTH_CLIENT_SECRET = "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";
export const TWITTER_SECRET = "dWWnWW1M4LBOH23X2GYTC6DbEnGx6ggVJvpKOdFpHgRpcL9CYN";
export const TWITTER_TOKEN = "AAAAAAAAAAAAAAAAAAAAABXThAEAAAAA8H984nY%2Ft5nMSvbCpqXe7xp3FxM%3DZuCL19n3mROxDLhUjBGL1bR3JcjPIloXL6GOzPBJT18Mtw2pf4";
export const TWITTER_API_KEY = "ApWLJ9qRgmUx9c7cCB2tE6vTE";