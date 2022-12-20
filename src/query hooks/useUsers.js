import axios from "axios";

const fetchUsers = () => axios.get("https://jsonplaceholder.typicode.com/users").then(response => response.data)