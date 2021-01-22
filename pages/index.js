import fetch from 'isomorphic-unfetch'

export default function Home({ movies }) {
    console.log(movies)
    return (
        <div className='container'>
            <h1>Front page</h1>
        </div>
    )
}

export async function getServerSideProps() {
    const { API_URL } = process.env

    const res = await fetch(`${API_URL}/movies`)
    const data = await res.json()

    return {
        props: {
            movies: data
        }
    }
}
