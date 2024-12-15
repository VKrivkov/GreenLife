import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "./Contact.css";


const Contact = () => {

  useEffect(() => {
    const handleScroll = () => {
      const backgroundImage = document.querySelector('.contact-background-image');
      const contactSection = document.querySelector('.contact-section');
  
      if (backgroundImage && contactSection) {
        // Get the position of the contact section relative to the viewport
        const rect = contactSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        // Check if the contact section is in the viewport
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          // Calculate the scroll position relative to the contact section
          const scrollPosition = windowHeight - rect.top;
  
          // Adjust parallax and zoom effects
          const parallaxOffset = scrollPosition * 0.2; // Adjust the factor as needed
          const scaleAmount = 1 + (scrollPosition * 0.0003); // Adjust the factor as needed
  
          backgroundImage.style.transform = `translateY(${parallaxOffset}px) scale(${scaleAmount})`;
        } else {
          // Reset the transform when the section is not in view
          backgroundImage.style.transform = 'translateY(0px) scale(1)';
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Call handleScroll initially in case the section is in view on page load
    handleScroll();
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  


  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { t } = useTranslation();

  const handleInvalid = (e) => {
    e.preventDefault(); // Prevent the browser from showing default error bubble / hint
    const fieldName = e.target.name;
    let message = '';
    if (!e.target.validity.valid) {
      switch (fieldName) {
        case 'email':
          message = t("contact.errors.validEmail");
          break;
        case 'firstName':
          message = t("contact.errors.firstName");
          break;
        case 'lastName':
          message = t("contact.errors.lastName");
          break;
        case 'phoneNumber':
          message = t("contact.errors.phoneNumber");
          break;
        default:
          message = t("contact.errors.requiredField");
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
          access_key: "1d83188c-4f4e-4699-a026-a28f2b5392c7",
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
    <div id = 'contact-section' className='contact-section'> 
      <div className="contact-background-image"></div>

      <h2 className='headline-contact'>{t('contact.headline')}</h2>

      <form  className="contact-form" onSubmit={handleSubmit}>
        <div className="input-row">
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={formErrors.firstName ? 'invalid' : ''}
              onInvalid={handleInvalid} // Add this prop to all inputs
              placeholder={t('contact.firstNamePlaceholder')}
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
            placeholder={t('contact.lastNamePlaceholder')}
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
          placeholder={t('contact.emailPlaceholder')}
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

          placeholder={t('contact.phoneNumberPlaceholder')}
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
          placeholder={t('contact.callTimePlaceholder')}
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t('contact.messagePlaceholder')}

        ></textarea>

        <p>{t('contact.privacyPolicy')}</p>

        <button type="submit" className="submit-button">{t('contact.submitButton')}</button>
        {isSubmitted && <div className="success-popup"> {t('contact.successMessage')} </div>}

      </form>
    </div>   

  )
}

export default Contact