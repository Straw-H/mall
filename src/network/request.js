import axios from 'axios'

const request = axios.create({
  baseURL: "http://152.136.185.210:8000/api/h8",
  timeout: 5000
})

<<<<<<< HEAD
=======
request.interceptors.response.use(response => {
  return response.data;
})

>>>>>>> 2fa94f5705d0299da9d144bacb0e40f29efae2de
export {
  request
}
