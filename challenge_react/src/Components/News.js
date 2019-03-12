import React, { Component } from 'react';
import axios from 'axios';
import ListNews from './ListNews';
// import '../asset/css/about.css';
// import Header from './Header';
import Search from './Search';

// dummy data
import foto from '../asset/img/jake-allison-1322894-unsplash.jpg';
const n_title = "This is the title of the news";
const n_content = "This is the example of a single content."

//News API
const apiKey = "b52d5a69e15d4703b23b7f2b94f2beb7";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadLine = baseUrl + "top-headLines?country=id&" + "pageSize=5&" + "apiKey=" + apiKey;

// https://newsapi.org/v2/top-headlines?country=us&apiKey=b52d5a69e15d4703b23b7f2b94f2beb7

class News extends Component {
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
            self.setState({listNews: response.data.articles});
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
        
    };
    render() {
        console.log("here")
        const {listNews, username, isLogin} = this.state;
        return (
            <div>
                    {listNews.map((item, key) => {
                    const src_img = item.urlToImage === null ? foto : item.urlToImage;
                    const content = item.urlToImage !== null ? item.content : "";
                    return <ListNews key={key} title={item.title} img={src_img} content={content} />;
                })}

            </div>
        );
    }
}

export default News;