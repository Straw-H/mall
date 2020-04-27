import axios from 'axios'

const request = axios.create({
  baseURL: "http://152.136.185.210:8000/api/h8",
  timeout: 5000
})

export {
  request
}
