import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({username: '', email: '', password:''});

    const [error, setError] = useState("");


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            setError("All fields are required");
        return;
         };

        setError("");
        console.log("Form submitted:", formData);

    };
    
    

    return (
       <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
        {error && <p className="text-red-500 mb-3">{error}</p>}

        <div>
        <label className="block mb-1">Username</label>
        <input type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        />
      </div>
      <div>
         <label className="block mb-1">Email</label>
        <input type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        />
        </div>

        <div>
         <label className="block mb-1">Password</label>
        <input type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        />

         </div>
        <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
      >
        Register
      </button>
       </form>
    );

}


export default RegistrationForm;
