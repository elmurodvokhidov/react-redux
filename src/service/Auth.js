import axios from "./API"

const authService = {
    async userRegister(user) {
        const response = await axios.post('/users', { user });
        return response.data;
    },
    async userLogin() {
        // const response = await axios.post('/users/login');
    },
    async userUser() {
        // const response = await axios.get('/user');
    },
};

export default authService;