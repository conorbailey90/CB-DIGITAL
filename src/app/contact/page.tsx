'use client';
import { useState } from 'react';
import { Toaster, toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result)
        toast.success('Message sent successfully!', {
          position: 'top-right',
          duration: 3000,
          className: 'custom-toast custom-toast-success',
        });
        // Clear form on success
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          service: '',
          message: '',
        });
      } else {
        toast.error('Failed to send message. Please try again.', {
          position: 'top-right',
          duration: 3000,
          className: 'custom-toast custom-toast-error',
        });
      }
    
    } catch (error) {
        console.log(error)
      toast.error('An error occurred. Please try again later.', {
        position: 'top-right',
        duration: 3000,
        className: 'custom-toast custom-toast-error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative flex flex-col items-center w-full">
      <div className="relative w-full flex justify-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]" />
        <div className="w-[95%] grid grid-cols-12 auto-rows-min pt-24 pb-12 md:pt-24 md:pb-12">
          {/* Main heading */}
          <div className="col-span-12 mb-8">
            <h1 className="text-6xl mb-4 tracking-normal text-black logo uppercase lg:text-8xl">LET&apos;S WORK TOGETHER</h1>
          </div>

          {/* Contact information */}
          <div className="col-span-12 md:col-span-6 mb-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2 tracking-tighter text-black">Get in touch</h3>
                <div className="space-y-2">
                  <p className="text-sm tracking-tighter text-black">
                    <span className="font-medium">Email:</span> hello@baileydigital.co.uk
                  </p>
                  <p className="text-sm tracking-tighter text-black">
                    <span className="font-medium">Phone / WhatsApp:</span> +44 7540 809644
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 tracking-tighter text-black">Location</h3>
                <p className="text-sm tracking-tighter text-black">
                  Billericay, Essex<br />
                  United Kingdom<br />
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 tracking-tighter text-black">Business hours</h3>
                <div className="space-y-1">
                  <p className="text-sm tracking-tighter text-black">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="col-span-12 md:col-span-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1 tracking-tighter text-black">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-black focus:border-black tracking-tighter"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1 tracking-tighter text-black">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-black focus:border-black tracking-tighter"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 tracking-tighter text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-black focus:border-black tracking-tighter"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1 tracking-tighter text-black">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-black focus:border-black tracking-tighter"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-1 tracking-tighter text-black">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-black focus:border-black tracking-tighter"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="website-design">Website Design</option>
                  <option value="website-development">Website Development</option>
                  <option value="automation">Business Automation</option>
                  <option value="maintenance">Website Maintenance</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 tracking-tighter text-black">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-black focus:border-black tracking-tighter resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-6 text-sm font-medium tracking-tighter uppercase transition-colors duration-200 ${
                  isLoading ? 'bg-gray-600 text-gray-300 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
      <Toaster
        position="top-right"
        // richColors
        toastOptions={{
          style: {
            fontFamily: 'inherit',
            fontSize: '0.875rem',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '-0.05em',
            color: '#ffffff',
            background: 'black',
            border: '1px solid #d1d5db',
            borderRadius: '0',
            padding: '12px 16px',
          },
          className: 'custom-toast',
          duration: 3000,
        }}
        closeButton
      />
    </section>
  );
}