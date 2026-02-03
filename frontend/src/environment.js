let IS_PROD = process.env.NODE_ENV;
const server = IS_PROD==="production" ?
    "https://videoconfbackend.onrender.com" :

    "http://localhost:8000"


export default server;