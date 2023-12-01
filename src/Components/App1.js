// src/App.js
import React, { useState } from 'react';
import Select from 'react-select';

import './../App.css';
import App2 from './App2';

function App1() {
  const [selectedOption, setSelectedOption] = useState(null);

  const [formData, setFormdata] = useState({
    name: '',
    email: '',
    // autofocus: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log('Selected Option:', selectedOption);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`You Name and Email Data ${formData.name} ${formData.email}`)
  };

  const options = [
    { value: 'Pakistan', label: 'Pakistan' },
    { value: 'India', label: 'India' },
    { value: 'Srilanka', label: 'Srilanka' },
  ];

  return (
    <div className="App">
      <h2>Simple Form 1</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <br />

        <input type="submit" value="Submit" />
        <div>{formData.autofocus}</div>

        <div className="App">
          <Select
             id='izaz'
            data-testid="myDropdown"
            defaultValue={selectedOption}
            onChange={handleSelectChange} // Add onChange handler
            options={options}
          />
        </div>
      </form>
      <App2 Name={formData.name} Email={formData.email} onchangee={handleChange} />
    </div>
  );
}

export default App1;
