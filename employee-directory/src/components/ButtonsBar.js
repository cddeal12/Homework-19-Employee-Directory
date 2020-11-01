import React from "react";

function ButtonsBar(props) {
    return (
        <div>
            <button type="button" className="btn btn-secondary mx-3" onClick={props.byName}>Sort By Name</button>
            <button type="button" className="btn btn-secondary mx-3" onClick={props.byPosition}>Sort By Position</button>
            <button type="button" className="btn btn-secondary mx-3" onClick={props.filterSales}>Filter By Salespeople</button>
            <button type="button" className="btn btn-secondary mx-3" onClick={props.filterManagers}>Filter By Managers</button>
        </div>
    )
}

export default ButtonsBar;
