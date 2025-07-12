import { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import FormInput from '../components/ui/FormInput';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
              <p className="mb-6">
                Have questions, suggestions, or want to collaborate? We'd love to hear from you! 
                Fill out the form or use the contact information below.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">info@safoodcritique.co.za</p>
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">+27 21 123 4567</p>
                </div>
                <div>
                  <h3 className="font-medium">Headquarters</h3>
                  <p className="text-gray-600">
                    123 Foodie Street<br />
                    Cape Town, 8001<br />
                    South Africa
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
              {submitSuccess ? (
                <div className="p-4 bg-green-100 text-green-700 rounded mb-4">
                  Thank you for your message! We'll get back to you soon.
                </div>
              ) : null}
              <form onSubmit={handleSubmit} className="space-y-4">
                <FormInput
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-md transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">How can I contribute a review?</h3>
                <p className="text-gray-600">
                  We welcome contributions from food enthusiasts! Simply register for an account and 
                  you can start submitting your reviews through our dashboard.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Do you accept sponsored content?</h3>
                <p className="text-gray-600">
                  We maintain strict editorial independence. While we may accept sponsored content, 
                  it will always be clearly marked as such and will not influence our review process.
                </p>
              </div>
              <div>
                <h3 className="font-medium">How often do you update your reviews?</h3>
                <p className="text-gray-600">
                  We strive to revisit establishments periodically, especially when we receive reports 
                  of significant changes. However, we encourage our community to share updates in the comments.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;