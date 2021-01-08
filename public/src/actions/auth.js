import { signUpURL, signInURL, authURL } from '../utils/fetchURL'
import { apiPost, apiGet } from '../utils/fetcher';

export const signup = async (email, password) => {

  try {
    apiPost(signUpURL, { email, password })
      .then(data => console.log((data)))
      .catch(e => console.error(e.message)); // for not found
  } catch (e) { }
}


export const signin = async (param) => {

  try {
    const response = await apiPost(signInURL, param)
    localStorage.setItem('token', response.token)
    return await response
  } catch (e) { }
}


export const auth = async () => {

  try {
    const response = await apiGet(authURL, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    if (response.success) {
      localStorage.setItem('token', response.token)
    } else {
      localStorage.removeItem('token')

    }
    return await response

  } catch (e) {
    localStorage.removeItem('token')
  }
}
