

export const SET_COUNTRY = "SET_COUNTRY";
export const SET_NUMBER = "SET_NUMBER";
export const GET_DATA_IN_PROGRESS = "GET_DATA_IN_PROGRESS";
export const DATA_RECIEVED = "DATA_RECIEVED";
export const DISPLAY_UNI_NAME = "DISPLAY_UNI_NAME";
export const DISPLAY_UNI_WEB = "DISPLAY_UNI_WEB";



export const setCountry = (country) => {
return({type:SET_COUNTRY , payload:country})
}

export const setNumber = (data) => {
    return({type: SET_NUMBER, payload: data})
}


export const displayName = (school) => {
  return({type: DISPLAY_UNI_NAME, payload: school})
}

export const displayWeb = (website) => {
  return ({type: DISPLAY_UNI_WEB, payload: website})
}

