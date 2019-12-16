import axios from "axios"

//var url="http://xxxholic.top:8000"
var url = "http://127.0.0.1:8000"

const postRregister = form =>
    axios.post(`${url}/api/v1/user/register`, form).then(res => res.data)

export { postRregister }