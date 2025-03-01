import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        
        <div className="contact-content">
          {/* Left side - Contact Info */}
          <div className="contact-info">
            <h3>Contact Details</h3>
            <div className="info-list">
              <div className="info-item">
                <span>Name:</span>
                <p>Malay Raval</p>
              </div>
              <div className="info-item">
                <span>Email:</span>
                <a href="mailto:malay.raval11@gmail.com">
                  malay.raval11@gmail.com
                </a>
              </div>
              <div className="info-item">
                <span>Instagram:</span>
                <a 
                  href="https://www.instagram.com/_malay_raval_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  @_malay_raval_
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required 
              />
              <input 
                type="text" 
                placeholder="Subject" 
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                required 
              />
              <textarea 
                placeholder="Your Message" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required 
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 