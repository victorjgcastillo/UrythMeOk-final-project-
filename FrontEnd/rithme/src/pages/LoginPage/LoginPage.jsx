import React, { useContext, useState } from 'react'
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { API } from "../../shared/services/apiBackend";
import { JwtContext } from '../../shared/contexts/JwtContext';

export default function LoginPage () {
    const navigate = useNavigate();    
    const { setJwt } = useContext(JwtContext);

    const [registeredEmail,setRegisteredEmail] = useState(true);
    const [forgotPassword,setforgotPassword] = useState(false);

    const formik = useFormik({
        initialValues: {name: "", email: "", password: "", repassword: "", postalCode: ""},
        onSubmit: (values) => {
            const {email,password} = values;
            const reqBody = {email,password};

            setRegisteredEmail(true);
            setforgotPassword(false);

            API.post('/users/login', reqBody).then((res) => {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                setJwt(true);
                navigate("/");
            }).catch((error)=> {
                console.log(error.response.data.message)
                if (error.response.data.message === "Password Error"){
                    setforgotPassword(true);
                } else if (error.response.data.message === "Not registered email"){
                    setRegisteredEmail(false);
                }
            })  
        }
      });

      return (
        <div className="login-page">
          <h1>Login</h1>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input onChange={formik.handleChange} value={formik.values.email} id="email" name="email" onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email ? (<div className="error">{formik.errors.email}</div>) : null}

            <label htmlFor="password">Password</label>
            <input onChange={formik.handleChange} value={formik.values.password} id="password" name="password" type="password" onBlur={formik.handleBlur}/>
            {formik.touched.password && formik.errors.password ? (<div className="error">{formik.errors.password}</div>) : null}

            <button type="submit">Login</button>

            {registeredEmail===false && <span className='error'>Email not registered</span>}
            {forgotPassword===true && <span className='error'>Wrong Password</span>}

            <p>Forgot password?</p>
          </form>
        </div>
      );
}
