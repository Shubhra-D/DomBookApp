import axios from "axios";
import React, { useState } from "react";
import "../styles/AddEmployee.css";

const AddEmployees = ({ onAdd }) => {
  const [addEmployee, setAddEmployee] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    department: "",
  });
  //handle the form coming and disappearing
  const handleClick = () => {
    setAddEmployee(!addEmployee);
  };

  //handle inputs of name,designation and department
  const handleChange = (e) => {
    console.log("Handle the data")
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted")
    setIsLoading(true);
    //send a post request to sever
    axios({
      url: `http://localhost:3000/employees`,
      method: "POST",
      data: formData, //tell the backend about the form
    })
      .then((res) => {
        console.log(res.data)
        alert("New Employee Got Added");
        onAdd();
        setFormData({
          name: "",
          designation: "",
          department: "",
        });
      })
      .catch((err) => {
        const errorMessage = err.response ? err.response.data : err.response;
        setError(errorMessage);
      })
      .finally(setIsLoading(false));
  };

  return (
    <div>
      <button onClick={handleClick}>
        {addEmployee ? "Close Add Employee" : "Add Employee"}
      </button>
      {addEmployee && (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              onChange={handleChange}
              name="name"
              value={formData.name}
            />
            <input
              type="text"
              placeholder="Designation"
              onChange={handleChange}
              name="designation"
              value={formData.designation}
            />
            <select
              className="drop-down"
              onChange={handleChange}
              name="department"
              value={formData.department}
            >
              <option value="">Select Department</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
              <option value="IT">IT</option>
            </select>
            <input type="submit" value ={isLoading ? "Submitting" : "Submit"} />
          </form>
          {/* submit button for form data */}
         
            
        
        </div>
      )}
    </div>
  );
};

export default AddEmployees;
