import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from  './styles/signin.module.css'
const Signin = () => {
  const [cordentials, setCordentials] = useState({ email: "", password: "" })
  const router =useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: cordentials.email, password: cordentials.password }),
    });
    const json = await response.json();
    console.log(json)
    if (json.success) {
      localStorage.setItem('token', json.authtoken)
      setCordentials({ email: "", password: ""})
      setTimeout(() => {
        router.push("/")
      }, 1000);
    }
    else {
     console.log(json.error);
     
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
    <div className={`  ${styles.main} d-flex `}>
      <form onSubmit={handleSubmit} id="form" className={styles.signinForm}>
        <h1>Login for get All Your Notes</h1>
        <div className="form-group my-3">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control my-2" id="email" name="email" value={cordentials.email} onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="current-password">Password</label>
          <input type="password" className="form-control my-2" id="password" onChange={onChange} value={cordentials.password} name="password" placeholder=" Enter Password" />
        </div>

        <button type="submit" className={`${styles.button} btn-primary`}>Submit</button>
      </form>
      <p>Do not have a account yet <Link href="/userProfile/signup">Sign up</Link> now </p>
    </div>
  )
};
export default Signin