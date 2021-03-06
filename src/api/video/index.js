/* jshint esversion: 6 */
import axios from "axios"
import qs from "qs"
const postVideo = form =>
    axios.post(`/apis/api/v1/videos`, form).then(res => res.data)
const getVideo = id =>
    axios.get(`/apis/api/v1/video/${id}`).then(res => res.data)
const getVideos = () => axios.get(`/apis/api/v1/videos`).then(res => res.data)
const getDailyRank = () =>
    axios.get(`/apis/api/v1/rank/daily`).then(res => res.data)
const postUploadTokenAvatar = fName =>
    axios
    .post(`/apis/api/v1/upload/tokenAvatar`, { fileName: fName })
    .then(res => res.data)
const postUploadTokenVideo = fName =>
    axios
    .post(`/apis/api/v1/upload/tokenVideo`, { fileName: fName })
    .then(res => res.data)
const comment = data =>
    axios
    .post("/apis/api/v1/video/comment", qs.stringify(data))
    .then(res => res.data)
const getComments = id =>
    axios.get(`/apis/api/v1/video/${id}/comments`).then(res => res.data)
const delComments = form =>
    axios
    .delete(`/apis/api/v1/video/delComment`, qs.stringify(form))
    .then(res => res.data)
export {
    postVideo,
    getVideo,
    getVideos,
    getDailyRank,
    postUploadTokenAvatar,
    postUploadTokenVideo,
    comment,
    getComments,
    delComments
}