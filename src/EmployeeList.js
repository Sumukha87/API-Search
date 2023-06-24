import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=2');
        setEmployees(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.first_name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div >
        <h2 className='tex'>Search and Look Up the Data!</h2>
        <div className='search'>
         <input className='inp'   size='50' type="text" placeholder="Search by first name" onChange={handleSearch} />
        </div>
      <div className='flex'>
        {filteredEmployees.map((employee) => (
          <div key={employee.id} className='im'>
            
            <div className='image-wrapper'>
            <img src={employee.avatar} alt={employee.first_name} />
            <span>{employee.id}</span>
            </div>
            <p className='name'>
            {employee.first_name}
            </p>
          </div>
        ))}
    </div>
</div>
  );

};

export default EmployeeList;
