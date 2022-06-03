import React from "react";

function Search({search, onHandleSearch}){

    function handleSearch(e){
        onHandleSearch(e.target.value)
    }

    return(
        <div className="search">
            <strong>Search treat by name</strong>
            <input className="input" type="text" placeholder="Search product by name" name="name" value={search} onChange={handleSearch}/>
        </div>
    )
}
export default Search;