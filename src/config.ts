export const axiosConfig = {
    baseURL: process.env.NODE_ENV === "production" ? window.location.origin + "/api/" : "http://localhost:3030/api/",
}
