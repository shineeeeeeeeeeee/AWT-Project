import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => {console.log(result)
            navigate('/login')
        })
        .catch(err => console.log(err))
    }

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #E8F5E9 0%, #A5D6A7 100%)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Google Fonts Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        className="p-4 rounded shadow-lg"
        style={{
          width: "400px",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(76, 175, 80, 0.2)",
        }}
      >
        <h2
          className="text-center mb-4 fw-bold"
          style={{ color: "#2E7D32", letterSpacing: "1px" }}
        >
          Register Now!
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-3">
            <label
              htmlFor="name"
              className="form-label fw-semibold"
              style={{ color: "#388E3C" }}
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control rounded-pill border-2"
              style={{
                borderColor: "#A5D6A7",
                fontFamily: "'Poppins', sans-serif",
              }}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label fw-semibold"
              style={{ color: "#388E3C" }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-pill border-2"
              style={{
                borderColor: "#A5D6A7",
                fontFamily: "'Poppins', sans-serif",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label fw-semibold"
              style={{ color: "#388E3C" }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-pill border-2"
              style={{
                borderColor: "#A5D6A7",
                fontFamily: "'Poppins', sans-serif",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn w-100 rounded-pill text-white fw-semibold mb-3"
            style={{
              background: "linear-gradient(90deg, #4CAF50 0%, #66BB6A 100%)",
              transition: "0.3s",
              fontFamily: "'Poppins', sans-serif",
              boxShadow: "0 4px 10px rgba(76, 175, 80, 0.3)",
            }}
            onMouseOver={(e) => (e.target.style.opacity = 0.9)}
            onMouseOut={(e) => (e.target.style.opacity = 1)}
          >
            Register
          </button>

          {/* Login Button */}
          <p className="text-center text-muted mb-2">
            Already Have an Account?
          </p>
          <Link to='/login'
            className="btn w-100 rounded-pill border fw-semibold"
            style={{
              backgroundColor: "white",
              color: "#2E7D32",
              borderColor: "#A5D6A7",
              transition: "0.3s",
              fontFamily: "'Poppins', sans-serif",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#E8F5E9";
              e.target.style.color = "#1B5E20";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "#2E7D32";
            }}
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
