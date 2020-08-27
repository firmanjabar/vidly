import React, { Component } from 'react';
import Likes from './common/likes';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/Pagination';

export default class movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
  };

  handleDelete = (id) => {
    const movies = this.state.movies.filter((m) => m._id !== id);
    this.setState({ movies });
  };

  handleLikes = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].like = !movies[index].like;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage } = this.state;
    if (count === 0) return <p>There is no movie in database</p>;
    return (
      <>
        <p>Showing {count} movies in the database</p>
        <div className='table-responsive'>
          <table className='table table-dark'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>{this.renderList()}</tbody>
          </table>
        </div>
        <Pagination
          totalMovies={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </>
    );
  }

  renderList() {
    return this.state.movies.map((movie) => (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <Likes onClick={() => this.handleLikes(movie)} like={movie.like} />
        </td>
        <td>
          <button onClick={() => this.handleDelete(movie._id)} className='btn btn-danger btn-sm'>
            Delete
          </button>
        </td>
      </tr>
    ));
  }
}
