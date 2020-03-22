/* jshint esversion: 6 */
import axios from "axios"
import qs from "qs"
const postRregister = form =>
    axios.post(`/apis/api/v1/user/register`, form).then(res => res.data)

const postLogin = form =>
    axios.post(`/apis/api/v1/user/login`, form).then(res => res.data)

const simpleInfoMe = form =>
    axios.get(`/apis/api/v1/user/me`, form).then(res => res.data)

const exit = () =>
    axios.delete(`/apis/api/v1/user/logout`).then(res => res.data)

const delComment = form =>
    axios
    .delete(`/apis/api/v1/video/delComment`, qs.stringify(form))
    .then(res => res.data)

export { postRregister, postLogin, simpleInfoMe, exit }