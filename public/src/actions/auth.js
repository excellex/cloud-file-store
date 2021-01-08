import { signUpURL, signInURL } from '../utils/fetchURL'
import { apiPost } from '../utils/fetcher';
import { setUserAC } from '../redux/actionCreators';

export const signup = async (email, password) => {

  try {
    apiPost(signUpURL, { email, password })

      .then(data => console.log((data)))
      // .then(data => disptatch(getReceptionPoints(data)))
      .catch(e => console.error(e.message)); // for not found
  } catch (e) {

  }
}

export const signin = async (email, password) => {

try {
  await apiPost(signInURL, { email, password })

    // .then(data => console.log((data)))
    // .then(user => disptatch(SetUserAC(user)))
    .catch(e => console.error(e.message)); // for not found
} catch (e) {

}
}
