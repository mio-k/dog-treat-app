import React, { useState } from "react";

function RequestForm({handleAddToy}){
    const [formData, setFormData] = useState({
        name: "",
        brand: "",
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
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
        })
    }
    return(
        <>
        <h3>Add a New Product</h3>
        <p>Don't see the product you want to order? You can add it!</p>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange} placeholder="Enter the name of the product"/>
            <input type="text" name="brand" onChange={handleChange}  placeholder="Enter the name of the brand"/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default RequestForm;