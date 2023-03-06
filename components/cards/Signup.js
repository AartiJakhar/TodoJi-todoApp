import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import styles from  './styles/Signup.module.css'

export default function Signup() {
  const {setUser}=useContext()
  const [cordentials, setCordentials] = useState({ name: "", email: "", password: "", cpassword: "", })
const router=useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password,cpassword } = cordentials;
    if(password===cpassword){

        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            
          localStorage.setItem('token', json.authtoken)
          setUser(token)
          setCordentials({name: "", email: "", password: "", cpassword: "",})
          setTimeout(() => {
            router.push("/")
          }, 1000);
        }
        else {
            console.log('success false');
            
        }
    }else{
        console.log('confirm password first');
        
    }
  }
  const onChange = (e) => {
    setCordentials({ ...cordentials, [e.target.name]: e.target.value });

  };
  useEffect(() => {
    const token=localStorage.getItem('token')
    console.log(typeof token);
    if(token!==null){
        router.push("/")
    }
    
  }, []);
  
  return (
    <div className={` ${styles.main}`}>
      <form onSubmit={handleSubmit} id="form" className={styles.signupForm}>
        <h1>Creat A Account to use TODOJI</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={onChange} type="text" name="name" className="form-control my-2" id="name" placeholder="Enter Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input onChange={onChange} type="email" className="form-control my-2" id="email" aria-describedby="emailHelp" name="email" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
        </div>
        <div className="form-group my-2">
          <label htmlFor="password">Password</label>
          <input onChange={onChange} minLength={5} required type="password" className="form-control" name="password" id="password" placeholder="Password" />
        </div>
        <div className="form-group my-2">
          <label htmlFor="cpassword">Confirm Password</label>
          <input onChange={onChange} minLength={5} required type="password" className="form-control" name="cpassword" id="cpassword" placeholder="Password" />
        </div>
        <button type="submit" className={`${styles.btn} btn-primary"`}>Submit</button>
      </form>
    </div>
  )
}

