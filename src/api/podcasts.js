import axios from 'axios'

export const getPodcasts = (page = 1) => {
  return axios.get(`${process.env.API_URL}/podcasts?page=${page}`)
}
