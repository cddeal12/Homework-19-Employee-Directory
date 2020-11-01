import React, { Component } from "react";
import ButtonsBar from "../components/ButtonsBar";

class TableDisplay extends Component {
    // employees is an array of objects coresponding to each employee
    // rendered employees is an identical array that will be changed based on sorts and filters
    // sort is a string that communicates what sorting mode is being used
    state = {
        employees: [
            {name: "Ahhhh", position: "Salesperson", image: "https://via.placeholder.com/150"},
            {name: "Buhhh", position: "Manager", image: "https://via.placeholder.com/150"},
            {name: "Cahhh", position: "Salesperson", image: "https://via.placeholder.com/150"},
            {name: "Duhhh", position: "Advertisement", image: "https://via.placeholder.com/150"},
            {name: "Ehhhh", position: "Marketing", image: "https://via.placeholder.com/150"},
            {name: "Fuhhh", position: "Human resources", image: "https://via.placeholder.com/150"}
        ],
        renderedEmployees: [
            {name: "Ahhhh", position: "Salesperson", image: "https://via.placeholder.com/150"},
            {name: "Buhhh", position: "Manager", image: "https://via.placeholder.com/150"},
            {name: "Cahhh", position: "Salesperson", image: "https://via.placeholder.com/150"},
            {name: "Duhhh", position: "Advertisement", image: "https://via.placeholder.com/150"},
            {name: "Ehhhh", position: "Marketing", image: "https://via.placeholder.com/150"},
            {name: "Fuhhh", position: "Human resources", image: "https://via.placeholder.com/150"}
        ],
        sort: "name"
    };

    // Sorts either by name or by position, determined by the sort property of state
    sortEmployees() {
        if (this.state.sort === "name") {
            // Used to store the employees as we sort them, then update the state
            let sortedEmployees = this.state;
            //Sorting by name
            sortedEmployees.renderedEmployees.sort((a, b) => {
                return (a.name > b.name);
            });
            this.setState(sortedEmployees);

        } else if (this.state.sort === "position") {
            let sortedEmployees = this.state;
            // Sorting by position
            sortedEmployees.renderedEmployees.sort((a, b) => {
                return (a.position > a.position);
            });
            this.setState(sortedEmployees);

        };
    };

    changeSort(type) {
        this.setState(type);
        this.sortEmployees();
    };

    render() {
        return (
            <div>
                <h1>Employee Directory</h1>
                <ButtonsBar />
            </div>
        );
    };
};

export default TableDisplay;
