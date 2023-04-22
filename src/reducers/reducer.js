import { 
    DATA_RECIEVED, 
    GET_DATA_IN_PROGRESS, 
    SET_COUNTRY, 
    SET_NUMBER,
    DISPLAY_UNI_WEB, 
    DISPLAY_UNI_NAME } from "../actions/action";

export const initialstate = {
    country: "",
    number: "",
    gettingdata: false,
    universityname: "",
    universityweb: ""
}


export const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case SET_COUNTRY:
            return ({...state, country: action.payload })
        case SET_NUMBER:
            return ({ ...state, number: action.payload })
        case GET_DATA_IN_PROGRESS:
            return({...state, gettingdata: true})
        case DATA_RECIEVED:
            return({...state, gettingdata: false})
        case DISPLAY_UNI_NAME:
            return({...state, universityname: action.payload})
        case DISPLAY_UNI_WEB:
            return({...state, universityweb: action.payload})
        default:
            return state

            
    }




}