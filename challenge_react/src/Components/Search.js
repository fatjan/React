import React, { Component } from 'react';
import PropTypes from "prop-types";



class Search extends Component {
    render() {
      return (
        <div class="search-container ke_kiri">
            <form>
                <input type="text" placeholder="Search.." name="search" 
                 value={this.props.keyboard}
                 placeholder={this.props.placeholder}
                 onChange={this.props.doSearch}/>
                <button type="submit" class="tombol_search">Telusuri</button>
            </form>
        </div>
        );
    }
}

Search.propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  };

export default Search;




