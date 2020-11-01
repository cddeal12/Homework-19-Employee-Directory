import React from "react";

function ButtonsBar(props) {
    return (
        <nav>
            <button className="button px-auto" onClick={props.byName}>Sort By Name</button>
            <button className="button mx-auto" onClick={props.byPosition}>Sort By Position</button>
            <button className="button mx-auto" onClick={props.filterSales}>Filter By Salespeople</button>
            <button className="button mx-auto" onClick={props.filterManagers}>Filter By Managers</button>
        </nav>
    )
}

export default ButtonsBar;
