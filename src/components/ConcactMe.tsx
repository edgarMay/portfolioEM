import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', body: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted form:', form);
    // Here you would integrate with a service like Formspree, EmailJS, or a backend API
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* Info Panel */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6">Get in Touch</h2>
          <p className="text-lg leading-relaxed mb-4">
          Whether you have a question, a project idea, or just want to connect, feel free to reach out.
          I'm always open to meaningful conversations and new opportunities.
          </p>
          <a
            href="mailto:edgar.mm09@gmail.com"
            className="text-indigo-600 font-medium underline block mb-4"
          >
            edgar.mm09@gmail.com
          </a>
          <div className="flex gap-4 mt-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok fa-2x"></i>
            </a>
          </div>
        </div>

        {/* Form Panel */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                required
                value={form.firstName}
                onChange={handleChange}
                className="w-full border border-gray-400 dark:border-gray-600 rounded-md px-4 py-2"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full border border-gray-400 dark:border-gray-600 rounded-md px-4 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-400 dark:border-gray-600 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="body"
              required
              rows={5}
              value={form.body}
              onChange={handleChange}
              className="w-full border border-gray-400 dark:border-gray-600 rounded-md px-4 py-2"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
