import axios from "axios";
import React, { useEffect, useState } from "react";

const AddEmployees = () => {
  const [addEmployee, setAddEmployee] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    department:""
  });
  



  
  const handleClick = () => {
    setAddEmployee(!addEmployee);
  };
  const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({...formData,[name]:value})
  };
  const handleSubmit =(e)=>{
    e.preventDefault()
    setIsLoading(true);
        axios({
          url: `http://localhost:3000/employees`,
          method: "POST",
        })
        .then((res) =>{
            alert("New Employee Got Added");
        setFormData({
            name: "", designation: "", department: ""})
            onAdd();
        })
        .catch((err) => {
         const errorMessage = (err.response ? err.response.data : err.response)
            setError(errorMessage)
        })
          .finally(setIsLoading(false));
      
    
  }
      
  return (
    <div>
      <button onClick={handleClick}>
        {addEmployee ? "Close Add Employee":"Add Employee"}
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
          <select onChange={handleChange} name="department" value={formData.department}>
            <option value="">Select Department</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="IT">IT</option>
          </select>
        </form>
        <button type="submit" disabled={isLoading}>{isLoading  ? "Submitting":"Submit"}</button>
        </div>
      )}
    </div>
  );
};

export default AddEmployees;
