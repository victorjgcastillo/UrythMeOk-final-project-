import React, { useContext, useState } from 'react'
import { useFormik } from "formik";
import { Link, useNavigate } from 'react-router-dom';
import { API } from "../../shared/services/apiBackend";
import { JwtContext } from '../../shared/contexts/JwtContext';
import LogOut from '../LogOut/LogOut';
import './LoginForm.scss';

export default function LoginForm () {
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
                localStorage.setItem('user', JSON.stringify(res.data.myUser));
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
        <form className="form-container" onSubmit={formik.handleSubmit}>
          <div className='form-main-info'>
            <div className='form-title'>
              <h1>Login</h1>
            </div>
            <div className='form-info'>
              <div className='label-div'>
                <label htmlFor="email">
                  <span>Email</span>
                  {formik.touched.email && formik.errors.email ? (<span className="error">{formik.errors.email}</span>) : null}
                </label>
                <input onChange={formik.handleChange} value={formik.values.email} id="email" name="email" onBlur={formik.handleBlur}/>
              </div>

              <div className='label-div'>
                <label htmlFor="password">
                  <span>Password</span>
                  {formik.touched.password && formik.errors.password ? (<span className="error">{formik.errors.password}</span>) : null}
                </label>
                <input onChange={formik.handleChange} value={formik.values.password} id="password" name="password" type="password" onBlur={formik.handleBlur}/>
              </div>
            </div>
          </div>
          <div className='form-submit'>
            <button className='submit-button' type="submit">Log In</button>
          </div>
          <div className='error-cont'>
              {registeredEmail===false && <span className='error'>Email not registered</span>}
              {forgotPassword===true && <span className='error'>Wrong Password</span>}
            </div>
            <Link to='/register' style={{ textDecoration: 'none' }}><p className='cuenta-nueva'>Registar nuevo usuario</p></Link>
        </form>
      );
}
