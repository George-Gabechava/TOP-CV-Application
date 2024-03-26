import React, { useState, useEffect } from 'react';

export default function Work({ onSubmit, workInfo, setWorkInfo }) {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [firstYear, setfirstYear] = useState('');
  const [finalYear, setfinalYear] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ jobTitle, company, firstYear, finalYear, description });
    setJobTitle('');
    setCompany('');
    setfirstYear('');
    setfinalYear('');
    setDescription('');
  };

  function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  
  useEffect(() => {
    // Sort Work Info by final year
    setWorkInfo(prevState => {
      const sortedInfo = prevState.slice().sort((a, b) => a.finalYear - b.finalYear);
      // Check if WorkInfo has changed before updating state
      if (!areArraysEqual(prevState, sortedInfo)) {
        return sortedInfo;
      }
      return prevState;
    });
  }, [workInfo]);
  

  const handleEdit = (index) => {
    const editedWork = workInfo[index];
    setJobTitle(editedWork.jobTitle);
    setCompany(editedWork.company);
    setfirstYear(editedWork.firstYear);
    setfinalYear(editedWork.finalYear);
    setDescription(editedWork.description);
    setWorkInfo(prevState =>
      prevState.filter((_, i) => i !== index)
    );
  };

  const handleDelete = (index) => {
    setWorkInfo(prevState =>
      prevState.filter((_, i) => i !== index)
    );
  };

  return (
    <div id='workBox'>
      <h1>Work Details</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Job Title:</h3>
          <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        </label>
        <label>
          <h3>Company:</h3>
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
        </label>
        <label>
          <h3>First Year:</h3>
          <input type="number" value={firstYear} onChange={(e) => setfirstYear(e.target.value)} />
        </label>
        <label>
          <h3>Final Year:</h3>
          <input type="text" value={finalYear} onChange={(e) => setfinalYear(e.target.value)} />
        </label>
        <label>
          <h3>Job Description / Main Responsibilities:</h3>
          <textarea className="textArea" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button className='submitButton' type="submit">Submit</button>
      </form>
      
      <div className='subHeader'>
        <h2>Work Submissions:</h2>
        {workInfo.map((info, index) => (
          <div key={index}>
            <p>Job Title: {info.jobTitle}</p>
            <p>Company: {info.company}</p>
            <p>First Year: {info.firstYear}</p>
            <p>Final Year: {info.finalYear}</p>
            <p>Description: {info.description}</p>
            <div className='buttonContainer'>
            <button className='editButton' onClick={() => handleEdit(index)}>Edit</button>
            <button className='deleteButton' onClick={() => handleDelete(index)}>Delete</button>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
