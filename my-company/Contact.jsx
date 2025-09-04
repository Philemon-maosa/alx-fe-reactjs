import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#fce4ec', minHeight: '80vh' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          style={{ display: 'block', margin: '10px auto' }}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          style={{ display: 'block', margin: '10px auto' }}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          style={{ display: 'block', margin: '10px auto' }}
        />
        <button type="submit" style={{ marginTop: '10px' }}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
