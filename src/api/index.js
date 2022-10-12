import axios from "axios";

const url = "http://localhost:8080";

export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const getInputs = () => axios.get(`${url}/getInput`);
export const getType = () => axios.get(`${url}/gettype`);
export const getBrand = () => axios.get(`${url}/getbrand`);
export const getPattern = () => axios.get(`${url}/getpattern`);
export const getFabricType = () => axios.get(`${url}/getfabrictype`);
export const getSize = () => axios.get(`${url}/getsize`);
export const getSizeDe = () => axios.get(`${url}/getsizede`);
export const getProduct = (page) => axios.get(`${url}/getproduct?page=${page}`);
export const getProductBysearch = (searchQuery) => axios.get(`${url}/getproduct/search?searchQuery=${searchQuery.searchBar}`);
export const getWarehouse = () => axios.get(`${url}/getwarehouse`);
export const getSingleProduct = (id) => axios.get(`${url}/getproducts/${id}`);
export const addPetern = (newPattern) => axios.post(`${url}/addpettern`, newPattern);
export const addType = (newType) => axios.post(`${url}/addtype`, newType);
export const addFabric = (newFabric) => axios.post(`${url}/addFabric`, newFabric);
export const addproduct = (newProduct) => axios.post(`${url}/addproduct`, newProduct);
export const addDesign = (newDesign) => axios.post(`${url}/adddesign`, newDesign);
export const getDesignCode = () => axios.get(`${url}/getdesigncode`);
