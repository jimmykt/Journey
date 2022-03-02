import axios from "axios";

const url = "http://localhost:50500/posts";

export const fetchPosts = () => axios.get(url);
