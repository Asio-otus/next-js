// Index.tsx is the default home page in Next.js

import {API} from "../api/api";
import {Card} from "../components/Card";

const Home = ({movies}) => {
    console.log(movies)

    return (
        <div>
            {movies.map(movie => (
                <Card key={movie.id} movie={movie}/>
            ))}
        </div>
    )
}

export async function getServerSideProps() {

    const res = await API.getMovies()
    const data = await res.data

    return {
        props: {
            movies: data
        }
    }
}

export default Home
