import React from "react";

function Search({search, onHandleSearch}){

    function handleSearch(e){
        onHandleSearch(e.target.value)
    }

    return(
        <div className=".serachbar">
            <strong>Search treat by name</strong>
            <input className=".searchbar input"type="text" placeholder="Enter name to search" name="name" value={search} onChange={handleSearch}/>
        </div>
    )
}
export default Search;