// import React from 'react';
// import './AboutUs.css';

// const AboutUs = () => {
//   return (
//     <div className="about-container">
//       <h1>About Nutri Assist</h1>
//       <p>
//         Welcome to <strong>Nutri Assist</strong>, your personal health and nutrition assistant! 
//         We are dedicated to helping you live a healthier life through personalized diet plans, 
//         meal tracking, calorie counting, and expert guidance.
//       </p>
//       <p>
//         Our platform is designed to cater to your unique needs, whether you're looking to 
//         lose weight, gain muscle, manage a condition, or simply eat healthier. We combine 
//         modern technology with nutritional science to bring you smart, user-friendly tools.
//       </p>
//       <p>
//         With features like meal logging, barcode scanning, fitness tracker integration, and 
//         access to certified nutritionists, Nutri Assist is your all-in-one wellness partner.
//       </p>
//       <p>
//         Thank you for choosing Nutri Assist. Let’s build a healthier tomorrow, together!
//       </p>
//     </div>
//   );
// };

// export default AboutUs;

import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
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
    console.log('User Query:', formData);
    alert('Thanks for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <div className="about-container">
      <h1>About Nutri Assist</h1>
      <p>
        <strong>Nutri Assist</strong> is your personal diet companion, designed to empower you with the right tools and knowledge to improve your health and well-being. In a fast-paced world where health can sometimes take a back seat, we are here to make healthy eating more accessible, enjoyable, and sustainable.
      </p>
      <p>
        Our app provides customized <strong>diet plans</strong> based on your individual goals, whether you aim to lose weight, gain muscle, enhance your energy levels, or simply maintain a balanced diet. Nutri Assist takes the guesswork out of meal planning by offering you clear, actionable suggestions tailored specifically to your needs.
      </p>
      <p>
        Along with diet plans, we also offer a feature to view your <strong>meals for today</strong>. Each meal is curated to ensure you’re eating the right balance of nutrients, helping you stay on track with your goals throughout the day. By taking a closer look at your daily meals, you can easily manage portion sizes, make healthier choices, and optimize your nutrition.
      </p>
      <p>
        Nutri Assist is not just about counting calories; it's about promoting a healthier lifestyle by focusing on the quality of food and its impact on your body. We believe in a holistic approach to wellness — making nutrition part of a balanced lifestyle, with the flexibility to adapt to your preferences and needs.
      </p>
      <p>
        Our goal is to make healthy living as simple as possible. Whether you’re at home, work, or on the go, Nutri Assist is designed to seamlessly integrate into your daily routine, guiding you toward your health goals step by step. With easy-to-follow meal plans, you will have all the support you need to make informed and conscious decisions about your health.
      </p>
      <p>
        Join the growing community of Nutri Assist users who are already experiencing positive changes in their health. With our app, you can take charge of your diet, improve your overall well-being, and feel better every day — all while enjoying the foods you love.
      </p>

      <div className="contact-section">
        <h2>How to Reach Us</h2>
        <p><strong>Email:</strong> support@nutriassist.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send us a message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default AboutUs;
