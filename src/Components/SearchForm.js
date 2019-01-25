import React, { Component } from 'react';

export default class SearchForm extends Component {
  
  state = {
    searchText: '',
    data : Date.now()
  }

  onSearchChange = e => {
    //this.setState({ searchText: e.target.value });
    if(e.target.value.length > 2 && Date.now() - this.state.data > 2000){ //interval de timp setat intre cautari
      this.setState({data : Date.now()})
      this.props.handleSearch(e.target.value)
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    e.currentTarget.reset();
  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search" 
               onKeyUp={this.onSearchChange} //onKeyUp
               name="search" 
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>      
    );
  }
}