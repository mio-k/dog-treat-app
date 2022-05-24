import React, { useState, useEffect } from "react";
import './App.css'
import Filter from "./components/Filter";
import Search from "./components/Search";
import TreatList from "./components/TreatList";

function App() {
  const [treats, setTreats]=useState([]);

    useEffect(()=> {
      fetch('http://localhost:3000/treats')
      .then((r) => r.json())
      .then(data => setTreats(data))
    }, [])
  return (
    <div className="App">
        <p>This is Dog Treat App</p>
        <img src="https://github.com/mio-k/dog-treat-app/blob/main/public/images/treat_id_01.jpg"/>
      <Search treats={treats}/>
      <Filter treats={treats}/>
      <TreatList treats={treats} />
    </div>
  );
}

export default App;
