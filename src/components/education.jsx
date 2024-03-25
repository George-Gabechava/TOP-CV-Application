import React, { useState, useEffect } from 'react';

export default function Education({ onSubmit, educationInfo, setEducationInfo }) {
  const [university, setUniversity] = useState('');
  const [major, setMajor] = useState('');
  const [gradYear, setGradYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ university, major, gradYear });
    setUniversity('');
    setMajor('');
    setGradYear('');
  };

  function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  
  useEffect(() => {
    // Sort educationInfo by graduation year
    setEducationInfo(prevState => {
      const sortedInfo = prevState.slice().sort((a, b) => a.gradYear - b.gradYear);
      // Check if educationInfo has changed before updating state
      if (!areArraysEqual(prevState, sortedInfo)) {
        return sortedInfo;
      }
      return prevState;
    });
  }, [educationInfo]);
  

  const handleEdit = (index) => {
    const editedEducation = educationInfo[index];
    setUniversity(editedEducation.university);
    setMajor(editedEducation.major);
    setGradYear(editedEducation.gradYear);
    setEducationInfo(prevState =>
      prevState.filter((_, i) => i !== index)
    );
  };

  const handleDelete = (index) => {
    setEducationInfo(prevState =>
      prevState.filter((_, i) => i !== index)
    );
  };

  return (
    <div id='educationBox'>
      <h1>Education Details</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>University:</h3>
          <input type="text" value={university} onChange={(e) => setUniversity(e.target.value)} />
        </label>
        <label>
          <h3>Degree:</h3>
          <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} />
        </label>
        <label>
          <h3>Graduation Year:</h3>
          <input type="text" value={gradYear} onChange={(e) => setGradYear(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      
      <div>
        <h2>Education Submissions:</h2>
        {educationInfo.map((info, index) => (
          <div key={index}>
            <p>University: {info.university}</p>
            <p>Degree: {info.major}</p>
            <p>Graduation Year: {info.gradYear}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
