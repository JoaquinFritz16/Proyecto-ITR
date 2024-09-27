import { useEffect, useState } from "react";
import axios from "axios";
function Portada() {

	const [movies, setMovies] = useState([]);
    
	useEffect(() => {
		const fetchData = async () => {
			const options = {
				method: "GET",
				url: "https://online-movie-database.p.rapidapi.com/auto-complete",
				params: { q: "john wick" },
				headers: {
					"x-rapidapi-key":
						"cb71281a97msh036212d3e3bc848p18e3e2jsn541ec39839d0",
					"x-rapidapi-host": "online-movie-database.p.rapidapi.com",
				},
			};
			try {
				const response = await axios.request(options);
				console.log(response.data);
				setMovies(response.data.d);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);
	return (
		<>
			<h1>Pelicula:</h1>
			<main>
				{movies.map((movie) => (
					<div key={movie.id}>
						<h2>{movie.l}</h2>
						{movie.i && movie.i.imageUrl ? (
							<img
								src={movie.i.imageUrl}
								alt={movie.l}
								width="200px"
							/>
						) : (
							<p>no papi no hay foto</p>
						)}
					</div>
				))}
			</main>
		</>
	);
}
export default Portada;
