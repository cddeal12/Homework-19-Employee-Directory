import React from "react";

function EmployeeTable(props) {
    return (
        <div className="row">
            {props.employees.map(employee => (
                <div className="col-10 border my-4">
                    <h3>{employee.name}</h3>
                    <img alt={employee.name} src={employee.image} className="border rounded"/>
                    <h4>{employee.position}</h4>
                </div>
            ))}
        </div>
    )
}

export default EmployeeTable;