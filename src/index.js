import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyC9Im6bfTGWk5GTvowqjYdY5IzpCmael04';

const App = () => (
  <div>
    <SearchBar />
  </div>
);

ReactDOM.render(<App />, document.getElementById('container'));
