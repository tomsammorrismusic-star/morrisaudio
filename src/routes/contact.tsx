import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Mail, Send, Phone, MapPin, Clock } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tomsammorrismusic@gmail.com',
    href: 'mailto:tomsammorrismusic@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '07857 484127',
    href: 'tel:+447857484127',
  },
  {
    icon: MapPin,
    label: 'Based',
    value: 'Yorkshire & London',
    href: null,
  },
  {
    icon: Clock,
    label: 'Response time',
    value: 'Usually within 24 hours',
    href: null,
  },
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-yellow-500/10 border border-yellow-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-yellow-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
          <p className="text-gray-600 mb-6">
            Thanks for reaching out. I'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-semibold rounded-lg transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Get In Touch</h1>
          <p className="text-gray-600 text-lg max-w-xl">
            Looking for a sound recordist for your next production? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact details */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-yellow-600">Contact Details</h2>
              <div className="space-y-4">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={16} className="text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-900 hover:text-yellow-600 transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct email CTA */}
            <div className="p-5 rounded-2xl bg-yellow-500/10 border border-yellow-500/30">
              <p className="text-sm text-gray-700 mb-3">
                Prefer to email directly? Use the button below.
              </p>
              <a
                href="mailto:tomsammorrismusic@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-bold rounded-lg transition-colors text-sm w-full justify-center"
              >
                <Mail size={16} />
                Email Me
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const formData = new FormData(form)
                fetch('/contact.html', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: new URLSearchParams(
                    formData as unknown as Record<string, string>,
                  ).toString(),
                }).then(() => setSubmitted(true))
              }}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="production" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Production Type
                </label>
                <select
                  id="production"
                  name="production"
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
                >
                  <option value="">Select a type…</option>
                  <option value="film">Feature Film</option>
                  <option value="documentary">Documentary</option>
                  <option value="commercial">Commercial / Ad</option>
                  <option value="tv">TV / Series</option>
                  <option value="corporate">Corporate</option>
                  <option value="music">Music Video</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors resize-none"
                  placeholder="Tell me about your project — dates, location, and what you need…"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-950 rounded-xl font-bold transition-colors"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
