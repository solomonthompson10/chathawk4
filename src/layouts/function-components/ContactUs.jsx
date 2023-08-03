import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import Notice from '@shortcodes/Notice';

export const ContactUs = () => {
  const form = useRef();
  const [showResults, setShowResults] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs.sendForm('service_cqc1l1k', 'template_fotv6mo', form.current, 'aj7IzJRFkRr198fHA')
      .then((result) => {
          console.log(result.text);
          setShowResults(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
    <form
    className="lg:max-w-[484px]"
    ref={form} 
    onSubmit={sendEmail}
  >
    <div className="form-group mb-5">
      <label className="form-label" htmlFor="name">Full Name</label>
      <input
        className="form-control"
        type="text"
        name="from_name"
        placeholder="Your Full Name"
      />
    </div>
    <div className="form-group mb-5">
      <label className="form-label" htmlFor="eamil">Email Adrdess</label>
      <input
        className="form-control"
        type="text"
        name="user_email"
        placeholder="Your  Email Address"
      />
    </div>
    {/* <!-- <div className="form-group mb-5">
      <label className="form-label" for="reason">Reason/Purpose</label>
      <select name="reason" name="reason" className="form-select" required>
        <option value="">Select reason/purpose</option>
        <option value="investment plane">Investment Plan</option>
        <option value="investment plane-2">Investment Plan 2</option>
        <option value="investment plane-3">Investment Plan 3</option>
      </select>
    </div> --> */}
    <div className="form-group mb-5">
      <label className="form-label" htmlFor="message">Message Here</label>
      <textarea
        className="form-control h-[150px]"
        name="message"
        cols="30"
        rows="10"></textarea>
    </div>
    <input
      className="btn btn-primary block w-full"
      type="submit"
      value="Send"
    />
    <div className='pb-5'></div>
    { showResults ?  <Notice type="note">Thank you for contacting ChatHawk. One of our agents will contact you soon.</Notice> : null }
  </form>

  );
};
