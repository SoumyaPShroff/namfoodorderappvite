import React from 'react'
import '../styles/DropdownList.css'

function DropdownList({ data = [], labelKey, valueKey, onChange, selectedValue, placeholder = "-- Select --" }, disabled = false) {
return (
    <select  className="dropdown"
      value={selectedValue}
      onChange={onChange}
      disabled={disabled}
    >
      {data.map((item, index) => (
        <option key={index} value={item[valueKey]}>
          {item[labelKey]}
        </option>
      ))}
    </select>
  )
}

export default DropdownList
