import React, { useState } from "react";

function RequestForm({handleAddToy}){
    const [formData, setFormData] = useState({
        name: "",
        brand: "",
        price: "",
        category: "All"
    })

    function handleChange(e){
            setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            })
    };

    function handleSubmit(e){
        e.preventDefault();
        const newTreat = {
            ...formData,
            order: 0,
        }
        fetch("http://localhost:3000/treats",{
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newTreat),
        })
        .then(resp => resp.json())
        .then(newProduct => handleAddToy(newProduct))
        setFormData({
                name: "",
                brand: "",
                price: "",
                category: "All"
        })
    }
    return(
        <div className="request-form">
        <h3>Add a New Product</h3>
        <p>Don't see the product you want to order? You can add it!</p>
        <form onSubmit={handleSubmit} >
            Product Name: <input value={formData.name} className=".input-text" type="text" name="name" onChange={handleChange} placeholder="Enter the name of the product"/><br/>
            Brand: <input value={formData.brand} className=".input-text" type="text" name="brand" onChange={handleChange}  placeholder="Enter the brand"/><br/>
            Price: <input value={formData.price} className=".input-text" type="text" name="price" onChange={handleChange}  placeholder="Enter the price"/><br/>
            <p>What is the main ingredient? 
            <select name="category" onChange={handleChange} value={formData.category}>
                <option value="beef">Beef</option>
                <option value="chicken">Chicken</option>
                <option value="pork">Pork</option>
                <option value="fish">Fish</option>
                <option value="other">Other</option>
            </select></p>
            <button type="submit" className="button">Add New Product</button>
        </form>
        </div>
    )
}
export default RequestForm;