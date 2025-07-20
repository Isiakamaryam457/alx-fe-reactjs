import { useState } from "react"

function Contact() {
     const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: ''
     });

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       alert('Form submitted!');
     };

     return (
       <div style={{ padding: '20px' }}>
         <h1>Contact Us</h1>
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="name"
             placeholder="Your Name"
             value={formData.name}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <input
             type="email"
             name="email"
             placeholder="Your Email"
             value={formData.email}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <textarea
             name="message"
             placeholder="Your Message"
             value={formData.message}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <button type="submit">Send Message</button>
         </form>
         <div style={{
          backgroundColor: '#ffd700',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          borderRadius: '100px 0 100px 0',
         }}>
         <p style={{ width: "300px", lineHeight: "1.8", fontSize: "16px", }}>
  At TechNova Solutions, we deliver cutting-edge digital services with unmatched precision and innovation. From software development to cloud integration, our expert team ensures reliable, scalable, and secure solutions. Backed by years of experience and client trust, we consistently exceed expectations—setting new standards for excellence, integrity, and transformative technology across industries.
</p>
<p style={{ width: "300px", lineHeight: "1.8", fontSize: "16px" }}>
  At TechNova Solutions, we deliver cutting-edge digital services with unmatched precision and innovation. From software development to cloud integration, our expert team ensures reliable, scalable, and secure solutions. Backed by years of experience and client trust, we consistently exceed expectations—setting new standards for excellence, integrity, and transformative technology across industries.
</p>
<p style={{ width: "300px", lineHeight: "1.8", fontSize: "16px" }}>
  At TechNova Solutions, we deliver cutting-edge digital services with unmatched precision and innovation. From software development to cloud integration, our expert team ensures reliable, scalable, and secure solutions. Backed by years of experience and client trust, we consistently exceed expectations—setting new standards for excellence, integrity, and transformative technology across industries.
</p>
</div>
       </div>
     );
   }

   export default Contact;