import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../styles/EmployeeTable.css'
import AddEmployees from './AddEmployees';
import FilterDropdown from './FilterDropdown';

const EmployeeTable = () => {
  const [employees,setEmployees] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [filteredEmployee,setFilteredEmployee] = useState([]);
  //inititally filtered data is zero
  const [departmentFilter,setDepartmentFilter] = useState(0)
  
  const fetchEmployee = ()=>{
    setIsLoading(true)
    axios({
        url:`http://localhost:3000/employees`,
        method:"GET"
    }).then((res)=>{
        setEmployees(res.data)
        setFilteredEmployee(res.data)
    })
    .catch((err)=>err.response ? err.response.data:err.response)
    .finally(()=>{
        setIsLoading(false)
    })
  }
  
  useEffect(()=>{
    fetchEmployee()
  },[])
  //updating or rerendering phase of that data
  useEffect(()=>{
      let filtered = [...employees];
    if(departmentFilter){
        filtered = filtered.filter((e)=>e.department==departmentFilter)
    }//key department==departmentFilter
    setFilteredEmployee(filtered)
  },[departmentFilter])
  
  
    return (
    <div>
      {isLoading ? (<h1>Data is Loading...</h1>
    ):(
        <div>
            <h2>Employees Table</h2>
            <FilterDropdown 
               handleDepartment= {(departmentf) =>setDepartmentFilter(departmentf)}
            />
            <table>
                <thead>
                    <tr>
                    <th>Sr.No.</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Department</th>
                  </tr>
                </thead>
                <tbody>
                    {filteredEmployee.map((e)=>{
                        return(
                            <tr key={e.id}>
                               <td>{e.id}</td>
                               <td>{e.name}</td>
                               <td>{e.designation}</td>
                               <td>{e.department}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
    
        </div>
    )}
    <AddEmployees onAdd={fetchEmployee}/>
    </div>
    
  )
}

export default EmployeeTable;











