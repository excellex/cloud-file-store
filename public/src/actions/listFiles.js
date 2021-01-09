import { apiPost, apiGet } from '../utils/fetcher';
import { fileURL } from '../utils/fetchURL';

export const listFiles = async (dirId) => {

  try {
    const response = await apiGet(`${fileURL}${dirId ? `?parent=`+dirId : ''}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })

    return await response

  } catch (e) {
    // localStorage.removeItem('token')
    console.log(e);
  }
}
