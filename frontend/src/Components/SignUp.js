import {React, useState} from 'react'
import {useNavigate} from 'react-router-dom';

function SignUp() {

    const [credentials, setcredentials] = useState({name:"",email:"",password:"",cpassword:""});
    const Base_URL = "http://localhost:8000/api";
    let navigate = useNavigate();

    const onChange = (e) =>{
        e.preventDefault();
        setcredentials({...credentials,[e.target.name]:e.target.value});
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch(`${Base_URL}/user/createUser`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'}, 
            body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password}), 
        });
        const json = await response.json();

        if(json.success){
            localStorage.setItem('token',json.authToken);
            navigate('/');
        }

    }
    return (
        <div className="container my-3">
            <h1 className='my-3'>SignUp Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' onChange={onChange} required minLength={3}  value={credentials.name} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' onChange={onChange} required value={credentials.email} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password " name='password' onChange={onChange} required minLength={5} value={credentials.password} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} required minLength={5} value={credentials.cpassword} aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SignUp
