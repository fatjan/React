import React, { Component } from 'react';

class Search extends Component {
    render() {
      return (
        <div class="search-container">
            <form>
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit" class="tombol_search">Telusuri</button>
            </form>
        </div>
        );
    }
}

export default Search;