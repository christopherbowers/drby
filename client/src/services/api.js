import Axios from 'axios'
import { BASE_URL } from '../globals'

const Client = Axios.create({ baseURL: BASE_URL })

// Intercepts every request axios makes
Client.interceptors.request.use(
  (config) => {
    // Reads the token in localstorage
    const token = localStorage.getItem('token')
    // if the token exists, we set the authorization header
    console.log('intrerseptor ' + token)
    if (token) {
        config.headers['authorization'] = `Bearer ${token}`
    }
    console.log('config ' + config)
    return config // We return the new config if the token exists or the default config if no token exists.
    // Provides the token to each request that passes through axios
  },
  (error) => Promise.reject(error)
)

export default Client
