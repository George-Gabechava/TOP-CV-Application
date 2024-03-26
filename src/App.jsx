// import files
import React, { useState } from 'react';
import './styles/App.css';
import Personal from './components/personal.jsx';
import Education from './components/education.jsx';
import Work from './components/work.jsx';

// import assets
import Account from './assets/account.svg'
import AccountSchool from './assets/account-school.svg'
import AccountWork from './assets/account-tie.svg'


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
        <div className='headers'>
          <img className='icons' src={Account} alt="Outline of a Person" />
          <h2>Personal Information</h2>
        </div>
        <p>{personalInfo.fullname}</p>
        <p>{personalInfo.title}</p>
        <p>{personalInfo.email}</p>
        <p>{personalInfo.phone}</p>
        <p>{personalInfo.address}</p>
        <hr />

        {/* Display education submissions */}
        <div className='headers'>
          <img className='icons' src={AccountSchool} alt="Outline of a Person with a graduation hat" />
          <h2>Education</h2>
        </div>
        {educationInfo.map((info, index) => (
          <div key={index}>
            <p>{info.university}</p>
            <p>{info.major}</p>
            <p>Graduation Year: {info.gradYear}</p>
            <hr />
          </div>
        ))}

        {/* Display work submissions */}
        <div className='headers'>
          <img className='icons' src={AccountWork} alt="Outline of a Person with a tie" />
          <h2>Work Experience</h2>
        </div>
        {workInfo.map((info, index) => (
          <div key={index}>
            <p>{info.jobTitle}</p>
            <p>{info.company}</p>
            <p>{info.firstYear} - {info.finalYear}</p>
            <pre className='preformatted'>{info.description}</pre>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
