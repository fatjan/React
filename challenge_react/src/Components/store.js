import createStore from "unistore";
import axios from "axios";

const initialState = {
    api_key: "",
    email: "",
    password: "",
    full_name: "",
    username: "",
    is_login: false 
}

export const store = createStore(initialState)

export const actions = store => ({
    setField: (state, event) => {
        return {[event.target.name]: event.target.value};
    },
    postLogout: state => {
        return {is_login: false};
    },
    postLogin: async state => {
        const data = {username: state.username, password: state.password};
        await axios 
            .post ("https://fatjan.free.beeceptor.com/login", data)
            .then (response => {
                console.log("postlogin response", response.data);
                if (response.data.hasOwnProperty("api_key")) {
                    store.setState({
                        is_login: true,
                        api_key: response.data.api_key,
                        full_name: response.data.full_name,
                        email: response.data.email
                    });
                }
            })
            .catch(error => {
                console.log("error");
            })
        }
});