import axios from 'axios';

const Instance = axios.create({
    baseURL: 'https://react-my-burger-5f68c-default-rtdb.firebaseio.com/'
});
export default Instance;
