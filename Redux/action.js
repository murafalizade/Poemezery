import axios from "axios";

function getCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [k,v] = el.split('=');
      cookie[k.trim()] = v;
    })
    return cookie[name];
  }

export const getUser = () =>dispatch=>{
    const token = getCookie('next-auth');
    if(!token) return  dispatch({
        type: "GET_USER",
        payload: null
    });
    axios.get(`http://localhost:8080/api/v1/my-profile`,{headers:{'Header-Token':token}}).then(
    (res)=>dispatch({type:'GET_USER',payload:res.data})
    ).catch(error => dispatch({ type: "GET_USER", payload: error }));

}