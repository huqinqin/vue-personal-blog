import axios from 'axios'
export const ERR_OK = 0;
export function getWebDate(url){
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data);
  })
}
