import React from 'react'

const FilterDropdown = (props) => {
  return (
    <div>
      <select
              className="filter-drop-down"
              onChange={(e)=>props.handleDepartment(e.target.value)}
              name=""
             >
              <option value="">Select Department</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
              <option value="IT">IT</option>
            </select>
    </div>
  )
}

export default FilterDropdown;
