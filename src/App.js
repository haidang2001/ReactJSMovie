import React from 'react';
import { Routes, Route} from "react-router-dom";
import { Movie } from './components/movie/Movie';
import { MovieDe } from './components/moviede/MovieDe';


function App() {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Movie/>} exact />
				<Route path="/movie/:id" element={<MovieDe/>} />
			</Routes>
		</main>
	);
}
export default App;
