import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'JavaScript Mastery',
          from_email: form.email,
          to_email: 'sujata@jsmastery.pro',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container  pt-10">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>
          <div className="border border-opacity-20 p-8  rounded-lg shadow-lg flex-1 mt-10 ">
          <form action="https://formspree.io/f/myzkzlbn" method="POST" className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-600 mb-2">
                Full Name
              </label>
              <input
              name="username"
                type="text"
                id="name"
                className="p-3 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-transparent"
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white mb-2">
                Email
              </label>
              <input
              name="Email"
                type="email"
                id="email"
                className="p-3 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 bg-transparent"
                placeholder="Enter your email"
              />
            </div>
           
            <div className="flex flex-col">
              <label  htmlFor="message" className="text-gray-600 mb-2">
                Message
              </label>
              <textarea
              name="message"
                id="message"
                className="p-3 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-transparent"
                rows="4"
                placeholder="Enter your message"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white font-semibold rounded-md bg-gray-800 hover:bg-primary transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
          {/* <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
