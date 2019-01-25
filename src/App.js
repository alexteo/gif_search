import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
  } 

  state = {
    gifs : [] //array gol
  }

  handleSearch = (query) =>{ //handler cu valoare de functie
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=14&api_key=dc6zaTOxFJmzC`) //tragi datele cu fetch() api
    .then(response => response.json())
    .then(data => {
      this.setState(
        ({  
            gifs : data.data 
        })
      )
    });
  }

  componentDidMount(){

    fetch('https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=14')
    .then(response =>  response.json())
    .then( data => {
      
        this.setState(
         /* (prevState) =>*/ ({ //primele paranteze pentru a intoarce un obiect

            gifs :  data.data// [...prevState.gifs, data] ->folosim prev state cand ne legam de valoarea anterioara existenta pe state
            
          })
        )
        console.log(this.state.gifs);
      });
  }

  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>

            <SearchForm 
              handleSearch = {this.handleSearch}
            />    

          </div>   
        </div>  

        <div className="main-content">

          <GifList
          gifs = {this.state.gifs}
          />

        </div>

      </div>
    );
  }
}
