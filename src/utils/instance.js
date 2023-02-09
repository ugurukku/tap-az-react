import axios from "axios";
export const API = axios.create({
    baseURL:"http://localhost:8080"
    
});

export const cityURI = "/cities";
export const productURI = "/products";
export const categoryURI = "/categories";
export const imageURI = "/images";

