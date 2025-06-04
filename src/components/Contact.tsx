// app/contact/page.tsx
'use client';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Replace with your form submission logic (e.g., API call)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We’ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Get in Touch</h1>
      <p className="text-center max-w-2xl mx-auto mb-12">
        We’d love to hear from you! Whether you have a project in mind or just want to chat about web design, fill out the form below, and we’ll be in touch.
      </p>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full mt-1 p-3 border border-forest-green rounded-md focus:ring-forest-green"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full mt-1 p-3 border border-forest-green rounded-md focus:ring-forest-green"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full mt-1 p-3 border border-forest-green rounded-md focus:ring-forest-green"
            rows={5}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-forest-green text-cream py-3 rounded-md hover:bg-dark-green transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}