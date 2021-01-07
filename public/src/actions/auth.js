import { signUpURL } from '../utils/fetchURL'
import { apiPost } from '../utils/fetcher';

export const signup = async (email, password) => {

  try {
    console.log(signUpURL);
    apiPost(signUpURL, { email, password })

      .then(data => console.log((data)))
      // .then(data => disptatch(getReceptionPoints(data)))
      .catch(e => console.error(e.message)); // for not found
  } catch (e) {

  }
  // try {
  //   const response = await fetch(signUpURL, {
  //     method: 'POST', // или 'PUT'
  //     headers: {
  //       // cors: 'no-cors',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ email, password }), // данные могут быть 'строкой' или {объектом}!
  //   });
  //   const json = await response.json();
  //   console.log('Успех:', JSON.stringify(json));
  // } catch (error) {
  //   console.log('Ошибка:', error);
  // }


}
