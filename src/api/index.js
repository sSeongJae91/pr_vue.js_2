import axios from 'axios'

export default axios.create({
    baseURL: '//localhost:8000/api'
})

// const api = axios.create({
//     baseURL: '//localhost:8000/api'
// })

// api.interceptors.response.use(function(response){
//     return response
// }, function(error){
//     sendErrorReport(error)
//     return Promise.reject(error)
// })

// export default api