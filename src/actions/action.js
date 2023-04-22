import axios from "axios";
import { connect } from "react-redux";
import { initialstate } from "../reducers/reducer";

export const SET_COUNTRY = "SET_COUNTRY";
export const SET_NUMBER = "SET_NUMBER";
export const SET_DISPLAY_NAME = "SET_DISPLAY_NAME";
export const SET_DISPLAY_WEB = "SET_DISPLAY_WEB";
export const GET_DATA_IN_PROGRESS = "GET_DATA_IN_PROGRESS";
export const DATA_RECIEVED = "DATA_RECIEVED";
export const DISPLAY_UNI_NAME = "DISPLAY_UNI_NAME";
export const DISPLAY_UNI_WEB = "DISPLAY_UNI_WEB";


const URL = "http://universities.hipolabs.com/search?country="



export const setCountry = (country) => {
return({type:SET_COUNTRY , payload:country})
}

export const setNumber = (number) => {
    return({type: SET_NUMBER, payload:number})
}

// export const setDisplayName = (name) => {
//     return({type: SET_DISPLAY_NAME, payload: name})
// }

// export const setDisplayWeb = (web) => {
//     return({type:SET_DISPLAY_WEB, payload: web })
// }







export const getData = (country, number, URL, e) => dispatch => {
  console.log(country)
 e.preventDefault()
dispatch({type:GET_DATA_IN_PROGRESS})
axios.get(`${URL}${country}`)
.then(res => {
console.log(res.data[number].name);
console.log(res.data[number].web_page[0])}
)
.catch(err=> console.log(err))}




