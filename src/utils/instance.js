import axios from "axios";
export const API = axios.create({
    baseURL:"http://192.168.11.232:8080"
    
});

export const cityURI = "/cities";
export const productURI = "/products";
export const categoryURI = "/categories";
export const imageURI = "/images";

export const host = "192.168.11.232";
