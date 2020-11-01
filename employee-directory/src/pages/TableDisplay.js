import React, { Component } from "react";
import ButtonsBar from "../components/ButtonsBar";
import EmployeeTable from "../components/EmployeeTable";

class TableDisplay extends Component {
    // employees is an array of objects coresponding to each employee
    // rendered employees is an identical array that will be changed based on sorts and filters
    // sort is a string that communicates what sorting mode is being used
    state = {
        employees: [
            {name: "Alice", position: "Salesperson", image: "https://loremflickr.com/150/150"},
            {name: "Bert", position: "Manager", image: "https://loremflickr.com/150/150"},
            {name: "Callie", position: "Salesperson", image: "https://loremflickr.com/150/150"},
            {name: "Denise", position: "Advertisement", image: "https://loremflickr.com/150/150"},
            {name: "Ernie", position: "Marketing", image: "https://loremflickr.com/150/150"},
            {name: "Frank", position: "Human resources", image: "https://loremflickr.com/150/150"}
        ],
        renderedEmployees: [
            {name: "Alice", position: "Salesperson", image: "https://loremflickr.com/150/150"},
            {name: "Bert", position: "Manager", image: "https://loremflickr.com/150/150"},
            {name: "Callie", position: "Salesperson", image: "https://loremflickr.com/150/150"},
            {name: "Denise", position: "Advertisement", image: "https://loremflickr.com/150/150"},
            {name: "Ernie", position: "Marketing", image: "https://loremflickr.com/150/150"},
            {name: "Frank", position: "Human resources", image: "https://loremflickr.com/150/150"}
        ],
        sort: "name"
    };

    // Sorts either by name or by position, determined by the sort property of state
    changeSortName = () => {
        let newState = this.state;
        newState.sort = "name";
        console.log("Changed to sort by " + newState.sort);

        newState.renderedEmployees = [
            {name: "Alice", position: "Salesperson", image: "https://loremflickr.com/150/150"},
            {name: "Bert", position: "Manager", image: "https://loremflickr.com/150/150"},
            {name: "Callie", position: "Salesperson", image: "https://loremflickr.com/150/150"},
            {name: "Denise", position: "Advertisement", image: "https://loremflickr.com/150/150"},
            {name: "Ernie", position: "Marketing", image: "https://loremflickr.com/150/150"},
            {name: "Frank", position: "Human resources", image: "https://loremflickr.com/150/150"}
        ];

        this.setState(newState);
    };

    changeSortPosition = () => {
        let newState = this.state;
        newState.sort = "position";
        console.log("Changed to sort by " + newState.sort);

        newState.renderedEmployees = [
            {name: "Denise", position: "Advertisement", image: "https://loremflickr.com/150/150"},
            {name: "Frank", position: "Human resources", image: "https://loremflickr.com/150/150"},
            {name: "Bert", position: "Manager", image: "https://loremflickr.com/150/150"},
            {name: "Ernie", position: "Marketing", image: "https://loremflickr.com/150/150"},
            {name: "Alice", position: "Salesperson", image: "https://loremflickr.com/150/150"},
            {name: "Callie", position: "Salesperson", image: "https://loremflickr.com/150/150"},
        ];

        this.setState(newState);
    };

    filterSales = () => {
        let newState = this.state;
        newState.renderedEmployees = [
            {name: "Alice", position: "Salesperson", image: "https://loremflickr.com/150/150"},
            {name: "Callie", position: "Salesperson", image: "https://loremflickr.com/150/150"},
        ];

        this.setState(newState);
    };

    filterManagers = () => {
        let newState = this.state;
        newState.renderedEmployees = [
            {name: "Bert", position: "Manager", image: "https://loremflickr.com/150/150"}
        ];

        this.setState(newState);
    };

    render() {
        return (
            <div className="container">
                <h1>Employee Directory</h1>
                <ButtonsBar 
                    byName={this.changeSortName}
                    byPosition={this.changeSortPosition}
                    filterSales={this.filterSales}
                    filterManagers={this.filterManagers}
                    className="mx-auto"
                />
                <EmployeeTable 
                    employees={this.state.renderedEmployees} 
                    className="mx-auto my-4 border"
                />
            </div>
        );
    };
};

export default TableDisplay;
