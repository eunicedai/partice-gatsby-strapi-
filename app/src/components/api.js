import axios from 'axios'

const userRequest = axios.create({
    baseURL: 'http://localhost:1337/testusers'
})

//User api
export const apiUserSignup = data => userRequest.post('/')