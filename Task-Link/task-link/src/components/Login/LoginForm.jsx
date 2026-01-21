import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Shared/Button";

function LoginForm() 
{
  const [formData, setFormData] = useState({ identifier: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPwd, setShowPwd] = useState(false);

  function handleChange(event) 
  {
    setFormData({...formData, [event.target.name] : event.target.value});
    setErrors((prev) => ({ ...prev, [event.target.name]: undefined }));
  }

  function validateForm() 
  {
    const newErrors = {};
    
    if(!formData.identifier.trim()) 
    {
      newErrors.identifier = "Email is required";
    } 
    else if (!/\S+@\S+\.\S+/.test(formData.identifier)) 
    {
      newErrors.identifier = "Invalid email format";
    }

    if (!formData.password.trim()) 
    {
      newErrors.password = "Password is required.";
    }
    else if(formData.password.length < 6) 
    {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event) 
  {
    event.preventDefault();

    if (!validateForm()) return;

    const userCredentials = { email: formData.identifier, password: formData.password };
    setFormData({ identifier: "", password: ""});
    
    console.log(userCredentials);
    // Access role using the email key from the mapping DB and then Navigate to the Student OR Recruiter DashBoard. Also pass the email only for their respective Profile.
  }

  return (
    <form className="login-form" noValidate onSubmit={handleSubmit}>
{/* -----------------------------------------------------------------USER NAME / EMAIL---------------------------------------------------------- */}
      <div className="input-group">
        <div className="field filled">
          <input
            name="identifier"
            type="text"
            placeholder=" "
            aria-label="Email"
            autoComplete="username"
            value={formData.identifier}
            onChange={handleChange}
          />
          <label>Email</label>
          <div className="input-underline" />
        </div>

        {errors.identifier && (
          <div className="error-box" role="alert" aria-live="polite">
            <span className="error-icon" aria-hidden="true">i</span>
            <span className="error-text">{errors.identifier}</span>
          </div>
        )}
      </div>

{/* -----------------------------------------------------------------PASSWORD----------------------------------------------------------- */}
      <div className="input-group">
        <div className="field filled" style={{ position: "relative" }}>
          <input
            name="password"
            type={showPwd ? "text" : "password"}
            placeholder=" "
            aria-label="Password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
          <label>Password</label>

          {/* ----------------------------------------------Show/Hide toggle----------------------------------------------- */}
          <button
            type="button"
            className="pwd-toggle"
            onClick={() => setShowPwd((s) => !s)}
            aria-pressed={showPwd}
            aria-label={showPwd ? "Hide password" : "Show password"}
          >
            {showPwd ? "Hide" : "Show"}
          </button>

          <div className="input-underline" />
        </div>

        {errors.password && (
          <div className="error-box" role="alert" aria-live="polite">
            <span className="error-icon" aria-hidden="true">i</span>
            <span className="error-text">{errors.password}</span>
          </div>
        )}
      </div>

{/* --------------------------------------------------------------SUBMIT---------------------------------------------------------------- */}
      <div className="form-actions">
        {/* Button is submit so onSubmit will run */}
        <Button type="submit" text="Login" />
      </div>

{/* ---------------------------------------------------------Signup & Forgot------------------------------------------------------------ */}
      <div className="helper-row">
        <p className="signup-text">Don’t have an account?{" "} <Link to="/signup" className="signup-link"> Sign Up </Link></p>
        <Link to="/forgot" className="forgot-link"> Forgot password? </Link>
      </div>
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
    </form>
  );
}

export default LoginForm;
