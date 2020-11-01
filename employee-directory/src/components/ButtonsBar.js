import React from "react";

function ButtonsBar(props) {
    return (
        <nav>
            <button onClick={props.byName} data-value="name">Sort By Name</button>
            <button onClick={props.byPosition} data-value="position">Sort By Position</button>
            <button>WIP</button>
            <button>WIP</button>
        </nav>
    )
}

export default ButtonsBar;
