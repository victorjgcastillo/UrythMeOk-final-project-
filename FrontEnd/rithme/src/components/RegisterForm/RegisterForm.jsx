import React from 'react'
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { API } from "../../shared/services/apiBackend";
import './RegisterForm.scss';

export default function RegisterForm () {
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
  
    if (!values.email) {errors.email = "Required"} 
    else if (values.email.length < 4) {errors.email = "Must be 5 characters or more"}
  
    if (!values.password) {errors.password = "Required"} 
    // else if (values.password.length < 8) {errors.password = "Must be 8 characters or more"} 
    // else if (values.password === "12345678") {errors.password = "Must not be 12345678 !!!"}
  
    if (!values.repassword) {errors.repassword = "Required"} 
    else if (values.repassword !== values.password) {errors.repassword = "Passwords doesn't match"}
  
    return errors;
  };

  const formik = useFormik({
    initialValues: {name: "", email: "", password: "", repassword: "", postalCode: ""},
    validate,
    onSubmit: (values) => {
      try {
        const {email,password,name,postalCode} = values;
        const reqBody = {email,password,name,postalCode};
        API.post('/users/register', reqBody).then((res) => {
          console.log(res);
        })
        navigate("/login");
      } catch (error) {
        console.log(error);
      }       
    }
  });

  return (
    <div className="register-form">
      <form className="form-container" onSubmit={formik.handleSubmit}>
        <div className='form-title'>
          <h1>Register</h1>
        </div>
        <div className='form-info'>
          <div className='label-div'>
            <label htmlFor="name">Name</label>
            <input onChange={formik.handleChange} value={formik.values.name} id="name" name="name" />
          </div>
            
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

          <div className='label-div'>
            <label htmlFor="repassword">
              <span>Re-enter Password</span>
              {formik.touched.repassword && formik.errors.repassword ? (<span className="error">{formik.errors.repassword}</span>) : null}
            </label>
            <input onChange={formik.handleChange} value={formik.values.repassword} id="repassword" name="repassword" type="password" onBlur={formik.handleBlur}/>
          </div>

          <div className='label-div'>
            <label htmlFor="postalCode">Postal Code</label>
            <input onChange={formik.handleChange} value={formik.values.postalCode} id="postalCode" name="postalCode" />
          </div>
        </div>
        <div className='form-submit'>
          <button className='submit-button' type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
