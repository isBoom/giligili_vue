import axios from "axios"

const postRregister = form => axios.post(`/apis/api/v1/user/register`, form).then(res => res.data)

const postLogin = form => axios.post(`/apis/api/v1/user/login`, form).then(res => res.data)

const simpleInfoMe = form => axios.get(`/apis/api/v1/user/me`, form).then(res => res.data)

export { postRregister, postLogin, simpleInfoMe }