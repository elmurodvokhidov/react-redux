import axios from "./API"

const authService = {
    async userRegister(user) {
        const { data } = await axios.post('/users', { user });
        return data;
    },
    async userLogin(user) {
        const { data } = await axios.post('/users/login', { user });
        return data;
    },
    async userUser() {
        // const response = await axios.get('/user');
    },
};

export default authService;