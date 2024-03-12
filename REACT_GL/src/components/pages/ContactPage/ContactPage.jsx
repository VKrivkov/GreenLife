import React, { useState }  from 'react'
import './ContactPage.css'

function ContactPage() {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleInvalid = (e) => {
    e.preventDefault(); // Prevent the browser from showing default error bubble / hint
    const fieldName = e.target.name;
    let message = '';
    if (!e.target.validity.valid) {
      switch (fieldName) {
        case 'email':
          message = 'Please enter a valid email address.';
          break;
        case 'firstName':
          message = 'Please enter your first name.';
          break;
        case 'lastName':
          message = 'Please enter your last name.';
          break;
        case 'phoneNumber':
          message = 'Please enter a valid phone number.';
          break;
        default:
          message = 'This field is required.';
      }
    }
    setFormErrors({ ...formErrors, [fieldName]: message });
  };



  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    time: '',
    email: '',
    phoneNumber: '',
    message: '',
    agreeToPrivacyPolicy: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Update the form data state
    setFormData({
      ...formData,
    });
  
    // Clear the error message for this input
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: "9dee5aad-0a3f-4497-a111-b9bb8e1a3219",
          ...formData,
        }),
      });
  
      if (response.ok) {
        setIsSubmitted(true);
        // Reset form fields here if necessary
        setFormData({
          firstName: '',
          lastName: '',
          time: '',
          email: '',
          phoneNumber: '',
          message: '',
          agreeToPrivacyPolicy: true,
        });
        // Optionally hide the popup after some time
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        // Handle server errors or invalid responses
        alert("Submission failed, please try again.");
      }
    } catch (error) {
      // Handle network errors
      console.error("Error during submission:", error);
      alert("Submission failed, please check your internet connection and try again.");
    }
  };


  return (
    <div className="contact-form-container">
      <div className="contact-info">
        <h2>Get in touch</h2>
        <h6>Discover the epitome of sustainable luxury at GreenLife, nestled in the serene beauty of Pervolia, Cyprus..</h6>
        <p><strong>Address:</strong> 545 Mavis Island, Chicago, IL 99191</p>
        <p><strong>Phone:</strong> +1 (555) 234-5678</p>
        <p><strong>Email:</strong> hello@example.com</p>
      </div>
      <form  className="contact-form2" onSubmit={handleSubmit}>
        <div className="input-row">
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={formErrors.firstName ? 'invalid' : ''}
              onInvalid={handleInvalid} // Add this prop to all inputs
              placeholder="First name*"
              required
              title="Please enter your first name."
            />
            {formErrors.firstName && <div className="error-message">{formErrors.firstName}</div>}
          </div>

          <div>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={formErrors.lastName ? 'invalid' : ''}
            onInvalid={handleInvalid} // Add this prop to all inputs
            placeholder="Last name*"
            required
            title="Please enter your last name."
          />
            {formErrors.lastName && <div className="error-message">{formErrors.lastName}</div>}
          </div>
        </div>
      
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={formErrors.email ? 'invalid' : ''}
          onInvalid={handleInvalid} // Add this prop to all inputs
          placeholder="blank@example.com*"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        {formErrors.email && <div className="error-message">{formErrors.email}</div>}


        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className={formErrors.phoneNumber ? 'invalid' : ''}
          onInvalid={handleInvalid} // Add this prop to all inputs

          placeholder="+1234567890*"
          required
          title="Please enter your phone number."
          pattern="\+?[0-9]{7,15}"

        />
        {formErrors.phoneNumber && <div className="error-message">{formErrors.phoneNumber}</div>}


        <input
          type="text"
          name="time"
          value={formData.time}
          onChange={handleChange}
          placeholder="When should we call?"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"

        ></textarea>

        <p>By sending this form, you agree to our privacy policy.</p>

        <button type="submit" className="submit-button">SEND A REQUEST</button>
        {isSubmitted && <div className="success-popup">Your request is sent. </div>}

      </form>
    </div>
  )
}

export default ContactPage