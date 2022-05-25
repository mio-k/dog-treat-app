import React from "react";

function Filter({filter, onChangeCategory}){
    function handleChangeCategory(e){
        onChangeCategory(e.target.value)
    }
    return(
        <div>
            <label>
                <strong>Filter:</strong>
                    <select onChange={handleChangeCategory} value={filter}>
                        <option value="all">All</option>
                        <option value="beef">Beef</option>
                        <option value="chicken">Chicken</option>
                        <option value="pork">Pork</option>
                        <option value="fish">Fish</option>
                        <option value="other">Other</option>
                    </select>
            </label>
        </div>
    )
}
export default Filter;