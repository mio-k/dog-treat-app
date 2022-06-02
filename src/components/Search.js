import React from "react";

function Search({search, onHandleSearch}){

    function handleSearch(e){
        onHandleSearch(e.target.value)
    }

    return(
        <div>
            <label>Search treat by name</label>
            <input type="text" placeholder="Search treat by name" name="name" value={search} onChange={handleSearch}/>
        </div>
    )
}
export default Search;