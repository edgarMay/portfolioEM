// src/components/ContactMe.tsx
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactMe() {
  console.log('🔎 Renderizando ContactMe.tsx en el navegador');
  // 1) Estado para cada campo del formulario
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    body: ''
  })

  // 2) Tus IDs de EmailJS (cópialos EXACTO desde tu panel)
  const SERVICE_ID  = 'service_2pjeya3'     // Tu Service ID real
  const TEMPLATE_ID = 'template_vn6gq5q'    // Tu Template ID real
  const PUBLIC_KEY  = 'qfSfduvF4liy9nVY2'  // Tu Public Key (User ID) real

  // 3) Inicializa EmailJS una vez al montar el componente
  useEffect(() => {
    emailjs.init(PUBLIC_KEY)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Maneja cambios en los inputs/textarea
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Esta es la función que se ejecuta cuando presionas "Send"
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log('✅ handleSubmit invoked – proceeding to emailjs.send')
    console.log('form object:', form)

    // 4) Crea el objeto con las variables que tu plantilla de EmailJS espera
    const templateParams = {
      first_name: form.firstName,
      last_name:  form.lastName,
      email:      form.email,
      message:    form.body
    }
    console.log('templateParams:', templateParams)

    // 5) Envía el email utilizando emailjs.send(serviceID, templateID, templateParams)
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(
        (response) => {
          console.log('EmailJS success:', response.status, response.text)
          alert('✅ Mensaje enviado correctamente.')
          // Limpia el formulario
          setForm({ firstName: '', lastName: '', email: '', body: '' })
        },
        (error) => {
          console.error('EmailJS error:', error)
          alert('❌ Hubo un problema al enviar el mensaje, inténtalo de nuevo.')
        }
      )
  }

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

        {/* Info Panel */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6">Get in Touch</h2>
          <p className="text-lg leading-relaxed mb-4">
            Whether you have a question, a project idea, or just want to connect, feel free to reach out.
            I&apos;m always open to meaningful conversations and new opportunities.
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
                required
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
  )
}
