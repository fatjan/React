import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';
import ListNews from './ListNews';

const apiKey = "b52d5a69e15d4703b23b7f2b94f2beb7";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadLine = baseUrl + "sources?" + "apiKey=" + apiKey;

// https://newsapi.org/v2/sources?apiKey=b52d5a69e15d4703b23b7f2b94f2beb7

class SearchCategory extends Component {
    constructor(props){
        super(props);
        this.state = {
            listNews : [],
            username : "",
            isLogin : false
        };
    }
    componentDidMount = () => {
        const self= this;
        axios
        .get(urlHeadLine)
        .then(function(response) {
            self.setState({listNews: response.data.sources});
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
        
    };

    handleInputChange = e => {
        console.log("event", e.target.value);
        let value = e.target.value;
        this.setState(
            {
                search:value
            },
            () => {
                this.searchNews(value);
            }
        );
    };

    business = e => {
        this.searchNews("business")
    }

    movies = e => {
        this.searchNews("MOVIES")
    }

    politics = e => {
        this.searchNews("POLITICS")
    }

    searchNews = async keyword => {
        console.log("searchNews", keyword);
        const self = this;
        if (keyword.length > 2) {
            try {
                const response = await axios.get(
                    baseUrl + "sources?" + keyword + "&apiKey=" + apiKey
                );
                console.log(response);
                self.setState({listNews: response.data.sources})
                } 
            catch(error){
                    console.log(error);
                }
            };
        };

    render() {
        const {listNews, username, isLogin} = this.state;
        // const is_login = JSON.parse(localStorage.getItem("is_login"));
        // const email = localStorage.getItem("email");
        // const full_name = localStorage.getItem("full_name");
        // console.log("is_login", is_login);

        // if (is_login === null) {
        //     return <Redirect to={{pathname: "/signin"}} />;
        // } else {
            return (
                <div>
                    <Search title="Cari" placeholder="Type here.. " doSearch={this.handleInputChange}
                    keyword={this.state.search}    />
                    <div className="dropdown">
                        <button className="dropbtn">News Choice</button>
                        <a className="dropdown-content"></a>
                            <a href="#" onClick={() => this.business()}>Business</a>
                            <a href="#" onClick={() => this.movies()}>Movies</a>
                            <a href="#" onClick={() => this.politics()}>Politics</a>
                    
                    </div>
                  
                        {listNews.map((item, key) => {
                        // const src_img = item.urlToImage === null ? foto : item.urlToImage;
                        const description = item.urlToImage !== null ? item.description : "";
                        return <ListNews key={key} title={item.name} content={description} />;
                    })}

                </div>
            );
        }
    // }
    
}

export default SearchCategory;