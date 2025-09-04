function Services() {

const style = {
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#fff3e0",
    minHeight: "80vh",
    color: "#333",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    marginTop: "1rem",
  };

     return (
       <div style={{ padding: '20px' }}>
         <h1>Our Services</h1>
         <ul>
           <li>Technology Consulting</li>
           <li>Market Analysis</li>
           <li>Product Development</li>
         </ul>
       </div>
     );
   }

   export default Services;