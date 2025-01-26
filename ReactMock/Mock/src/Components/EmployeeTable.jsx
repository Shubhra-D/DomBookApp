import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../styles/EmployeeTable.css'
import AddEmployees from './AddEmployees';

const EmployeeTable = () => {
  const [employees,setEmployees] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  
  const fetchEmployee = ()=>{
    setIsLoading(true)
    axios({
        url:`http://localhost:3000/employees`,
        method:"GET"
    }).then((res)=>setEmployees(res.data))
    .catch((err)=>err.response ? err.response.data:err.response)
    .finally(()=>{
        setIsLoading(false)
    })
  }
  
  useEffect(()=>{
    fetchEmployee()
  },[])
  
  
    return (
    <div>
      {isLoading ? (<h1>Data is Loading...</h1>
    ):(
        <div>
            <h2>Employees Table</h2>
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
                    {employees.map((e)=>{
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
