import React,{useState} from 'react'
import { firestore, storage } from './firebaseConfig';
import { collection , addDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';

const Submit = () => {

    const navigate = useNavigate();
    const [resume, setresume] = useState({});
    const [data, setdata] = useState({});
    const [url, seturl] = useState("");
    const collectionRef = collection(firestore, "users");
    
    const handleInput =  (event)=>{
        let newInput = { [event.target.name]: event.target.value }
        setdata({...data, ...newInput});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const storageRef = ref(storage, resume.name);
        const uploadTask = uploadBytesResumable(storageRef, resume);
        uploadTask.on("state_changed",(snapshot)=>{
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("upload is "+ progress+ " % done");
        },
        (error)=>{
          console.log(error.message);
        },
        ()=>{
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
            console.log("file available at ", downloadURL)
            seturl(downloadURL);
          })
        }
        )



        addDoc(collectionRef, {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            contact: data.contact,
            address: data.address,
            city: data.city,
            state: data.state,
            zipcode: data.zipcode,
            jobtitle: data.jobtitle,
            workexp: data.workexp,
            resume: url,
        })
        .then(()=>{
            // alert("data added")
            navigate("/done");
            
        })
        .catch((err)=>{
            alert("something went wrong")
            console.log(err.message)
        })
    }


  return (
<div className='form'>
    <h2>Fill the form</h2>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="fname" className="form-label"> First Name </label>
    <input type="text" className="form-control" name='firstname'  onChange={handleInput} id="fname" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="lname" className="form-label">Last Name</label>
    <input type="text" className="form-control" name="lastname"  onChange={handleInput} id="lname"/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" name='email'  onChange={handleInput} id="email"/>
  </div>
  <div className="mb-3">
    <label htmlFor="mobile" className="form-label">Contact No.</label>
    <input type="number" className="form-control" name='contact' onChange={handleInput} id="mobile"/>
  </div>
  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address</label>
    <input type="text" className="form-control" name='address' onChange={handleInput} id="address"/>
  </div>
  <div className="mb-3">
    <label htmlFor="city" className="form-label">City</label>
    <input type="text" className="form-control" name='city' onChange={handleInput} id="city"/>
  </div>
  <div className="mb-3">
    <label htmlFor="state" className="form-label">State</label>
    <input type="text" className="form-control" name='state' onChange={handleInput} id="state"/>
  </div>
  <div className="mb-3">
    <label htmlFor="zip" className="form-label">Zip Code</label>
    <input type="text" className="form-control" name='zipcode' onChange={handleInput} id="zip"/>
  </div>
  <div className="mb-3">
    <label htmlFor="jtitle" className="form-label">Job Title</label>
    <input type="text" className="form-control" name='jobtitle' onChange={handleInput} id="jtitle"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exp" className="form-label">Work experience (in years)</label>
    <input type="Number" className="form-control" name='workexp' onChange={handleInput} id="exp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exp" className="form-label">Upload Resume</label>
    <input type="file" accept='.pdf, .doc, .docx'  onChange={(event)=>setresume(event.target.files[0])}  className="form-control"  id="exp"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Submit