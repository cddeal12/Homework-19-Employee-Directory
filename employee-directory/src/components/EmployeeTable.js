import React from "react";

function EmployeeTable(props) {
    return (
        <div>
            {props.employees.map(employee => (
                <div className="row border my-4">
                    <img className="col-4 border rounded" alt={employee.name} src={employee.image}/>
                    <h3 className="col-4">{employee.name}</h3>
                    <h4 className="col-4">{employee.position}</h4>
                </div>
            ))}
        </div>
    )
}

export default EmployeeTable;