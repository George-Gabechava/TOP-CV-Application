// App.jsx
import React, { useState } from 'react';
import './App.css';
import Personal from './components/personal.jsx';
import Education from './components/education.jsx';
import Work from './components/work.jsx';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullname: '',
    title: '',
    email: '',
    phone: '',
    address: ''
  }); 

  const [educationInfo, setEducationInfo] = useState([]);

  const handleEducationSubmit = (data) => {
    setEducationInfo([...educationInfo, data]);
  };

  const [workInfo, setWorkInfo] = useState([]);

  const handleWorkSubmit = (data) => {
    setWorkInfo([...workInfo, data]);
  };

  return (
    <>
      <div id='leftContainer'>
        <Personal 
          personalInfo={personalInfo} 
          setPersonalInfo={setPersonalInfo} 
        />
        <Education 
          onSubmit={handleEducationSubmit} 
          educationInfo={educationInfo} 
          setEducationInfo={setEducationInfo}
        />
        <Work 
          onSubmit={handleWorkSubmit} 
          workInfo={workInfo} 
          setWorkInfo={setWorkInfo}
        />
      </div>

      <div id='rightContainer'>
        {/* Display personal information */}
        <h2>Personal Information</h2>
        <p>{personalInfo.fullname}</p>
        <p>{personalInfo.title}</p>
        <p>{personalInfo.email}</p>
        <p>{personalInfo.phone}</p>
        <p>{personalInfo.address}</p>

        {/* Display education institution submissions */}
        <h2>Education</h2>
        {educationInfo.map((info, index) => (
          <div key={index}>
            <p>University: {info.university}</p>
            <p>Major: {info.major}</p>
            <p>Graduation Year: {info.gradYear}</p>
            <hr />
          </div>
        ))}

        {/* Display work submissions */}
        <h2>Work Information</h2>
        {workInfo.map((info, index) => (
          <div key={index}>
            <p>Job Title: {info.jobTitle}</p>
            <p>Company: {info.company}</p>
            <p>Years: {info.firstYear} - {info.finalYear}</p>
            <p>{info.description}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
