import axios from 'axios'

const request = axios.create({
  baseURL: "https://github.com/coderwhy",
  timeout: 10000
})

request.interceptors.response.use(response => {
  return response.data;
})

export {
  request
}
