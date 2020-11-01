import React from "react";

function EmployeeTable(props) {
    return (
        <div>
            {props.employees.map(employee => (
                <div>
                    <h3>{employee.name}</h3>
                    <img alt={employee.name} src={employee.image} />
                    <h4>{employee.position}</h4>
                </div>
            ))}
        </div>
    )
}

export default EmployeeTable;