import React, { useEffect, useState } from 'react';
import MovieDetail from '../moviedetail/MovieDetail';

const FEATURED_API ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

export function Movie() {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	const getMovies = (API) => {
		fetch(API)
		.then((res) => res.json())
		.then((data) => {
			// console.log(data);
			setMovies(data.results);
		});
	}

	useEffect(() =>{ 
		getMovies(FEATURED_API);
	},[])


	const handleOnSubmit = (e) => {
		e.preventDefault();
		if(searchTerm){

			getMovies(SEARCH_API+searchTerm);
			setSearchTerm("");
		}
	}
	
	const handleOnChange = (e )=> {
		setSearchTerm(e.target.value);
		if(searchTerm){
			// getMovies(SEARCH_API+searchTerm);
				fetch(SEARCH_API+searchTerm)
				.then((res) => res.json())
				.then((data) => {
					// console.log(data);
					setMovies(data.results);
				});
			}
	}

	return (
		<>
			<header>
				<form onSubmit={handleOnSubmit}>

					<input className="search" type="text" placeholder="Search..." 
					value={searchTerm} onChange={handleOnChange}/>
				</form>
			</header>
			<div className="movie-container" >
				{movies.length > 0 && movies.map(movie =>(
					<MovieDetail key={movie.id} {...movie} />
				))}
			
			</div>
		</>
	);
}

