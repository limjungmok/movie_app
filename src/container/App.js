import React, { Component } from 'react';
import '../css/App.css';

import Movie from '../components/Movie';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: ''
    }
  }

  componentWillMount () {
    // APIs
    console.log('will mount');
  }

  componentDidMount() {
    console.log('did mount');

    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callAPIs();
    // Not processed until callAPi Function Complete
    this.setState({
      movies
    })
  }

  _callAPIs = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie
        title = {movie.title}
        poster = {movie.medium_cover_image}
        genres = {movie.genres}
        synopsis = {movie.synopsis}
        key={movie.id}/>
    });

    return movies;
  }

  _renderDefault = () => {
    console.log('render default');

    return (<h1>Now loading ...</h1>);
  }

  render() {
    console.log(this.state.movies);
    const { movies } = this.state;
    return (
      <div className={movies? "App" : "App--loading"}>
        {movies ? this._renderMovies() : this._renderDefault() }
      </div>
    );
  }
}

export default App;
