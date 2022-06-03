import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import './App.css'
import Filter from "./components/Filter";
import Search from "./components/Search";
import TreatList from "./components/TreatList";
import RequestForm from "./components/RequestForm";
import Header from "./components/Header";

function App() {
  const [treats, setTreats] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);

    useEffect(()=> {
      fetch('http://localhost:3000/treats')
      .then((r) => r.json())
      .then(data => setTreats(data))
    }, [])

    useEffect(() => {
      fetch('http://localhost:3000/orders')
      .then((r) => r.json())
      .then(orders => currentTotal(orders))
    }, [])

    function currentTotal(orders){
      console.log(orders)
      const currentAmount = orders.map(order => order.price).reduce((prev, curr) => prev + curr, 0)
      setTotal(currentAmount.toFixed(2))
    }

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
    const filteredList = treats
      .filter(treat => {
        if (filter === "All"){
          return treat
        } else {
          return treat.category === filter
    }})
      .filter(treat =>{
        return treat.name.toLowerCase().includes(search.toLowerCase())
      })
    
    function onHandleOrderClick(){
      fetch('http://localhost:3000/orders')
      .then((r) => r.json())
      .then(orders =>{
        const newTotal = orders.reduce((accumulator, order) => {
          return accumulator + order.price;
        }, 0)
        console.log(newTotal)
        setTotal(newTotal)
      })
    }


  return (
    <div className=".app">
        {/* <Route path="/header"> */}
        <p>{total}</p>
            <Header />      
        {/* </Route> */}
        {/* <Route path="./search"> */}
            <Search search={search} onHandleSearch={setSearch}/>
        {/* </Route> */}
        {/* <Route path="./filter"> */}
           <Filter filter={filter} onChangeCategory={setFilter}/>
        {/* </Route> */}
        {/* <Route path="./addtreat"> */}
           <RequestForm handleAddToy={handleAddToy} />
        {/* </Route> */}
        {/* <Route path="./treatlist"> */}
           <TreatList treats={filteredList} onHandleOrderClick={onHandleOrderClick} total={total} orders={orders}/>
        {/* </Route> */}
    </div>
  );
  }

export default App;
