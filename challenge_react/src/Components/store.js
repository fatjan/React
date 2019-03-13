import createStore from "unistore";
import axios from "axios";
import SearchCategory from "./SearchEverythingByCategory";

const initialState = {
    api_key: "",
    email: "",
    password: "",
    full_name: "",
    username: "",
    is_login: false,
    listNews: [], 
    listNewsKiri: []
}



const apiKey = "b52d5a69e15d4703b23b7f2b94f2beb7";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadLine = baseUrl + "top-headLines?country=id&" + "pageSize=7&" + "apiKey=" + apiKey;
const urlNewsKiri = baseUrl + "everything?q=bitcoin&" + "pageSize=7&" + "language=en&" + "apiKey=" + apiKey;


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
        // https://inibaru.free.beeceptor.com
        // https://fatjan.free.beeceptor.com/login
            .post ("https://inibaru.free.beeceptor.com/ini", data)
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
        },

    getUrlHeadline: async state => {
        const data = {
            listNews: state.listNews,
            listNewsKiri: state.listNewsKiri
        }
        await axios
            .all([
                axios.get(urlHeadLine),
                axios.get(urlNewsKiri)
            ])
            .then ( 
                axios.spread(function(responseHeadLine, responseNewsKiri )
                {
                store.setState({
                    listNews: responseHeadLine.data.articles,
                    listNewsKiri: responseNewsKiri.data.articles
                });
            })
            )
            .catch(error => {
                console.log("error");
            })
        },

    
    searchNews: async (value, keyword) => {
            console.log("searchNews", keyword);
            // const self = this;
            if (keyword.length > 2) {
                try {
                    const response = await axios.get(
                        baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey
                    );
                    console.log(response);
                    store.setState({listNews: response.data.articles})
                    } 
                    catch(error){
                        console.log(error);
                    }
                };
            },

    searchCategory: async (value, keyword) => {
        try {
            const response = await axios.get(
                baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey
            )
            console.log(response);
            store.setState({listNews: response.data.articles})   
            }
            catch(error){
                console.log(error);
            }
    }

});