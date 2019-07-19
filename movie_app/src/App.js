import React from 'react';
import './App.css';
import Movie from './Movie';




class App extends React.Component {
  //Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componenetWillUpdate() -> render -> componentDidUpdate()

  state = {
    greeting: 'Hello!',

  }

  state = {}

  componentDidMount() {
    this._getMovies();

  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie title=
        {
          movie.title_english}
          poster={movie.medium_cover_image}
          genres={movie.genres}
          synopsis = {movie.synopsis}
          key={movie.id} 
          />
    })
    return movies

  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })

  }

  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort by=rating')
      .then(potato => potato.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))

  }
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}

      </div>
    );
  }
}


export default App;
