import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://raw.githubusercontent.com/KreiNafig/musyoku-api/refs/heads/main/data.json'
})

export default instance