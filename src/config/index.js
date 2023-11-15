const ENV = process.env.NODE_ENV === "development" ? "dev" : "prod";

const config = {
  ENV: ENV,
  WEB_DOMAIN: ENV === "dev" ? "http://localhost:3000" : "https://kayoun.com",
  API_ENDPOINT: "https://kayoun.com/api",
  FACEBOOK_URL: "https://www.facebook.com/Ka-Youn-Yoo-Composer-103491528169024",
  INSTAGRAM_URL: "https://www.instagram.com/kayoun_yoo",
  YOUTUBE_URL: "https://www.youtube.com/@kayoun_yoo",
  SOUNDCLOUD_URL: "https://soundcloud.com/ka-youn-yoo",
  CONTACT_FORM_URL: "https://formspree.io/f/xayazdjd",
  EMAIL: "kayoun.yoo@gmail.com",
  CACHE_EXPIRY_HOURS: 6,
  CACHE_TOGGLE: ENV === "dev" ? false : true,
  PRE_RENDERING: navigator.userAgent === "ReactSnap",
};

export default config;
