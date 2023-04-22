import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { setCountry, setNumber, setDisplayName, setDisplayWeb, getData } from './actions/action';






const URL = "http://universities.hipolabs.com/search?country="



function App(props) {
  // const [country, setCountry] = useState("")
  // const [number, setNumber] = useState("")
  // const [displayname, setDisplayName] = useState("")
  // const [displayweb, setDisplayWeb] = useState("")
  const { universityweb, universityname, country, number, getData, setCountry, setNumber} = props


  const handleChange = (e) => {
    e.preventDefault();
    setCountry(e.target.value)
  }

  const handleNumberChange = (e) => {
    e.preventDefault();
    setNumber(e.target.value)
  }






console.log("country: ", country, "number: " ,number , `${URL} ${country}`)
  return (
    <div className="App">
      Async Redux Project
      <p className="title">Get a list of universities in a specified country.</p>
      <form onSubmit={(e, country, number, URL)=> getData(country, number, URL, e)}>
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
export default connect(mapStateToProps, { getData, setCountry, setNumber })(App);
// export default App;