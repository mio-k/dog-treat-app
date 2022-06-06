import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Filter from "./Filter";
import Search from "./Search";
import TreatList from "./TreatList";
import RequestForm from "./RequestForm";
import Header from "./Header";

function App() {
  const [treats, setTreats] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);

    useEffect(()=> {
      fetch('http://localhost:3000/treats')
      .then((r) => r.json())
      .then(treats => setTreats(treats))
    }, [])

    useEffect(() => {
      fetch('http://localhost:3000/orders')
      .then((r) => r.json())
      .then(orders => currentTotal(orders))
    }, [])

    function currentTotal(orders){
      const currentAmount = orders.map(order => order.price).reduce((prev, curr) => prev + curr, 0)
      setTotal(currentAmount.toFixed(2))
    }

    function onChangeCategory(category){
      setFilter(category)
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
    
  function onHandleOrderClick(price){
    const newOrderNumber = parseFloat(price);
    const updatedTotal = parseFloat(total)
    const finalTotal = updatedTotal + newOrderNumber
    setTotal(finalTotal)
  }

  return (
    <div className=".app"> 
        <Search search={search} onHandleSearch={setSearch}/>
        <Filter filter={filter} onChangeCategory={onChangeCategory}/>
        <RequestForm handleAddToy={handleAddToy} />
        <TreatList treats={filteredList} onHandleOrderClick={onHandleOrderClick} total={total}/>
    </div>
          )
  }

export default App;
