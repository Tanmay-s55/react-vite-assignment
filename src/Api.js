import axios from "axios";

const apiData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response;
};

export default apiData;