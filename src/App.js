import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { displayName, displayWeb, setCountry, setNumber } from './actions/action';


const URL = "http://universities.hipolabs.com/search?country="



function App(props) {
  // const [country, setCountry] = useState("")
  // const [number, setNumber] = useState("")
  // const [displayname, setDisplayName] = useState("")
  // const [displayweb, setDisplayWeb] = useState("")
  const {displayName, displayWeb, universityweb, universityname, country, number, setCountry, setNumber} = props


  const handleChange = (e) => {
    e.preventDefault();
    setCountry(e.target.value)
  }

  const handleNumberChange = (e) => {
    e.preventDefault();
   setNumber(e.target.value)
  }

  const getData = (e, URL, country, number) => {
    e.preventDefault()
  axios.get(URL+country).then(res => {
   const school = res.data[number].name
   const website = res.data[number].domains
  displayName(school);
  displayWeb(website);
   }).catch(err=> console.log(err.message))

  }
  return (
    <div className="App">
      Async Redux Project
      <p className="title">Get a list of universities in a specified country.</p>
      <form onSubmit={(e)=>getData(e, URL, country, number )}>
        <label htmlFor="search-term">Search:</label>
        <input onChange={handleChange} type="text" value={country} id="search-term" /> &nbsp;
        <label htmlFor="search-term-number">Number:</label>
        <input onChange={handleNumberChange} type="text" value={number} id="search-term" />
        <button type="submit">Search</button>
      </form>

      <p>{universityname} </p>
      <p>{universityweb}</p>








    </div>
  );



}

const mapStateToProps = (state) => {
  return {
    country: state.country,
    number: state.number,
    displayname: state.displayname,
    displayweb: state.displayweb,
    universityname: state.universityname,
    universityweb: state.universityweb
  }

}


export default connect (mapStateToProps, {displayName , displayWeb, setCountry, setNumber })(App);

