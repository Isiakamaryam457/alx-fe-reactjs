import React from 'react';
import logo from './sweimage.png';

function Home() {
     return (
       <div 
       style={{ 
       padding: '20px',
       }}
       >
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          
          }}>
        <img src={logo} alt="company-logo" style={{height: '250px', width: '300px', borderRadius: '100px 20px 100px 20px'}}/>
           </div>
           <div style={{textAlign: 'center'}}>
         <h1>Welcome to Our Company</h1>
         <p>We are dedicated to delivering excellence in all our services.</p>
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
       </div>
     );
   }

export default Home;

