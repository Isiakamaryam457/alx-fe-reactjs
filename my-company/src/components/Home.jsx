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
         </div>
       </div>
     );
   }

export default Home;

