import axios from 'axios'

export const LogInUser = async (data) => {
  try {
    const res = await axios.post('/api/auth/login', data)
    localStorage.setItem('token', res.data.token)
    // Set the current signed in users token to localstorage
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await axios.post('/api/auth/register', data)
    console.log(data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await axios.get('/api/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}
