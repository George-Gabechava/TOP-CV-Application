import { useState } from 'react'
import './App.css'


// grid for left and right side? see app css
function App() {
  const [fullname, setfullname] = useState("");
  const [title, settitle] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");

  const [educationList, setEducation] = useState([{
    
  }]);

  return (
    <>
      <div id='leftContainer'>
        <div id='personalBox'>
          <h1>Personal Details</h1>
          <h2 id='fullName'>Full Name <p>*required</p> </h2> <input
          type="text"
          fullname={fullname}
          onChange={(event) => setfullname(event.target.value)}
          />

          <h2>Job Title</h2> <input
          type="text"
          title={title}
          onChange={(event) => settitle(event.target.value)}
          />

          <h2>Email</h2> <input
          type="email"
          email={email}
          onChange={(event) => setemail(event.target.value)}
          />

          <h2>Phone Number </h2> <input
          type="tel"
          phone={phone}
          onChange={(event) => setphone(event.target.value)}
          />

          <h2>Address </h2> <input
          type="text"
          address={address}
          onChange={(event) => setaddress(event.target.value)}
          />
        </div>
        <div id='educationBox'>
          <h1>Education</h1>
          {/* create form button */}
        </div>
      </div>

      <div id='rightContainer'>
        {/* input default values? */}
        <h2>{fullname}</h2>
        <h2>{title}</h2>
        <h2>{email}</h2>
        <h2>{phone}</h2>
        <h2>{address}</h2>

      </div>
    </>

  )
}

export default App
