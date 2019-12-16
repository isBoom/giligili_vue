import axios from "axios";

//var url="http://xxxholic.top:8000"
var url="http://127.0.0.1:8000"

const postVideo = form => axios.post(`${url}/api/v1/videos`,form).then(res => res.data);

const getVideo = id => axios.get(`${url}/api/v1/videos?${id}`).then(res => res.data);

const getVideos = () => axios.get(`${url}/api/v1/videos`).then(res => res.data);

const postUploadTokenAvatar = fName =>axios.post(`${url}/api/v1/upload/tokenAvatar`,{fileName:fName}).then(res=>res.data)

const postUploadTokenVideo = fName =>axios.post(`${url}/api/v1/upload/tokenVideo`,{fileName:fName}).then(res=>res.data)

export {
  postVideo,
  getVideo,
  getVideos,
  postUploadTokenAvatar,
  postUploadTokenVideo,
};
