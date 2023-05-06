import React,{useState} from 'react'

const Submit = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNo, setContactNo] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [workExp, setWorkExp] = useState('')
    const [resume, setResume] = useState('')


    const handleInputChange = (event) => {
        const { id, value } = event.target
        switch (id) {
          case 'fname':
            setFirstName(value)
            break
          case 'lname':
            setLastName(value)
            break
          case 'email':
            setEmail(value)
            break
          case 'mobile':
            setContactNo(value)
            break
          case 'address':
            setAddress(value)
            break
          case 'city':
            setCity(value)
            break
          case 'state':
            setState(value)
            break
          case 'zip':
            setZipCode(value)
            break
          case 'jtitle':
            setJobTitle(value)
            break
          case 'exp':
            setWorkExp(value)
            break
          case 'resume':
            setResume(event.target.files[0])
            break
          default:
            break
        }
      }


      const handleSubmit = ()=>{
        
      }
  return (
<div className='form'>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="fname" className="form-label"> First Name </label>
    <input type="text" className="form-control" value={firstName}  onChange={handleInputChange} id="fname" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="lname" className="form-label">Last Name</label>
    <input type="text" className="form-control" value={lastName}  onChange={handleInputChange} id="lname"/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" value={email}  onChange={handleInputChange} id="email"/>
  </div>
  <div className="mb-3">
    <label htmlFor="mobile" className="form-label">Contact No.</label>
    <input type="number" className="form-control" value={contactNo} onChange={handleInputChange} id="mobile"/>
  </div>
  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address</label>
    <input type="text" className="form-control" value={address} onChange={handleInputChange} id="address"/>
  </div>
  <div className="mb-3">
    <label htmlFor="city" className="form-label">City</label>
    <input type="text" className="form-control" value={city} onChange={handleInputChange} id="city"/>
  </div>
  <div className="mb-3">
    <label htmlFor="state" className="form-label">State</label>
    <input type="text" className="form-control" value={state} onChange={handleInputChange} id="state"/>
  </div>
  <div className="mb-3">
    <label htmlFor="zip" className="form-label">Zip Code</label>
    <input type="text" className="form-control" value={zipCode} onChange={handleInputChange} id="zip"/>
  </div>
  <div className="mb-3">
    <label htmlFor="jtitle" className="form-label">Job Title</label>
    <input type="text" className="form-control" value={jobTitle} onChange={handleInputChange} id="jtitle"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exp" className="form-label">Work experience (in years)</label>
    <input type="Number" className="form-control" value={workExp} onChange={handleInputChange} id="exp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exp" className="form-label">Upload Resume</label>
    <input type="file" accept='.pdf, .doc, .docx' value={resume} className="form-control" onChange={handleInputChange} id="exp"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Submit