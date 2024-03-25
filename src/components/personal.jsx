import React from 'react';

const Personal = ({ personalInfo, setPersonalInfo }) => {
  const handlePersonalChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  return (
    <div id='personalBox'>
      <h1>Personal Details</h1>
      <h2 id='fullName'>Full Name <p>*required</p> </h2> 
      <input
        type="text"
        name="fullname"
        value={personalInfo.fullname}
        onChange={handlePersonalChange}
      />

      <h2>Job Title</h2> 
      <input
        type="text"
        name="title"
        value={personalInfo.title}
        onChange={handlePersonalChange}
      />

      <h2>Email</h2> 
      <input
        type="email"
        name="email"
        value={personalInfo.email}
        onChange={handlePersonalChange}
      />

      <h2>Phone Number </h2> 
      <input
        type="tel"
        name="phone"
        value={personalInfo.phone}
        onChange={handlePersonalChange}
      />

      <h2>City </h2> 
      <input
        type="text"
        name="address"
        value={personalInfo.address}
        onChange={handlePersonalChange}
      />
    </div>
  );
};

export default Personal;
