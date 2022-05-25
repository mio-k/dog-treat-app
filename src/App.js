import React, { useState, useEffect } from "react";
import './App.css'
import Filter from "./components/Filter";
import Search from "./components/Search";
import TreatList from "./components/TreatList";
import RequestForm from "./components/RequestForm";

function App() {
  const [treats, setTreats] = useState([]);
  const [filter, setFilter] = useState("All")

    useEffect(()=> {
      fetch('http://localhost:3000/treats')
      .then((r) => r.json())
      .then(data => setTreats(data))
    }, [])

    function onChangeCategory(category){
      setFilter(category)
      let url="http://localhost:3000/treats"
      if(filter !=="All"){
        url += `?category=${category}`
      }
    }
    function handleAddToy(newProduct){
      setTreats([...treats, newProduct])
    }

  return (
    <div className="App">
        <p>This is Dog Treat App</p>
      <Search treats={treats}/>
      <Filter filter={filter} onChangeCategory={onChangeCategory}/>
      <RequestForm handleAddToy={handleAddToy} />
      <TreatList treats={treats} />
    </div>
  );
}

export default App;
