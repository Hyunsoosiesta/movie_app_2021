import React from "react";
import axios from "axios";
import Movie from "./Movie"
import "./App.css";

// 컴포넌트 return 안의 html tag사이에 그냥 쓰면 text, {}안에 적으면 자바스크립트
// key값은 리액트 내부에서 요소를 나누기 위해 사용됨

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };

    getMovie = async () => {
        const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({ movies: movies, isLoading: false })
        console.log(movies)
    }
    componentDidMount() {
        this.getMovie();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                        <div className="movie">
                            {movies.map(movie => (
                                < Movie
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                />
                            ))}
                        </div>
                    )
                }
            </section>
        )
    }
}



export default App;

