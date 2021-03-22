import axios from "axios";



export const baseURL = 'http://localhost:1337'

const instance = axios.create ({
    baseURL: baseURL,
})

export const API = {
    getMovies() {
        return instance.get('/movies')
    },
    getNavigation() {
        return instance.get('/navigations')
    }
}

