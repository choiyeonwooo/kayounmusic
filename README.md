# Ka Youn Yoo Website

[https://kayoun.com](https://kayoun.com)

## Tech Stack

- React (CRA) / Javascript
- HTML / CSS
- Go
- MongoDB
- AWS Lambda
- Netlify

## Directory structure

- `config` - **contains read-only configuration and environment variables**
- `assets` - **contains style and image files**
- `pages` - **contains page views composed of various components**
- `components` - **contains page components and shared reusable components**
- `api` - **contains a custom hook for fetching data from the API with front-end caching**
- `data` - **contains static json files which are loaded as fallback when API call to DB fails.**
- `routes` - **contains front-end routing with react-router-dom**
- `functions` - **contains AWS Lambda functions for retrieving data (film music, work, score)**
- `db` - **contains models and MongoDB wrapper for managing data (film music, work, score)**
