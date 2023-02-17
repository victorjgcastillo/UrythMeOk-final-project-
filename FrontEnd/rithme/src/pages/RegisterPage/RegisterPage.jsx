import React from 'react'
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { API } from "../../shared/services/apiBackend";

export default function RegisterPage () {
    const navigate = useNavigate();

    const validate = (values) => {
        const errors = {};
    
        if (!values.email) {errors.email = "Required"} 
        else if (values.email.length < 4) {errors.email = "Must be 5 characters or more"}
    
        if (!values.password) {errors.password = "Required"} 
        // else if (values.password.length < 8) {errors.password = "Must be 8 characters or more"} 
        // else if (values.password === "12345678") {errors.password = "Must not be 12345678 !!!"}
    
        if (!values.repassword) {errors.repassword = "Required"} 
        else if (values.repassword !== values.password) {errors.repassword = "Second password doesn't match"}
    
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
        <div className="register-page">
          <h1>Register</h1>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input onChange={formik.handleChange} value={formik.values.name} id="name" name="name" />

            <label htmlFor="email">Email</label>
            <input onChange={formik.handleChange} value={formik.values.email} id="email" name="email" onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email ? (<div className="error">{formik.errors.email}</div>) : null}

            <label htmlFor="password">Password</label>
            <input onChange={formik.handleChange} value={formik.values.password} id="password" name="password" type="password" onBlur={formik.handleBlur}/>
            {formik.touched.password && formik.errors.password ? (<div className="error">{formik.errors.password}</div>) : null}

            <label htmlFor="repassword">Re-enter Password</label>
            <input onChange={formik.handleChange} value={formik.values.repassword} id="repassword" name="repassword" type="password" onBlur={formik.handleBlur}/>
            {formik.touched.repassword && formik.errors.repassword ? (<div className="error">{formik.errors.repassword}</div>) : null}

            <label htmlFor="postalCode">Postal Code</label>
            <input onChange={formik.handleChange} value={formik.values.postalCode} id="postalCode" name="postalCode" />
    
            <button type="submit">Register</button>
          </form>
        </div>
      );
}
