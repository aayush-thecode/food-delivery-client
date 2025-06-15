import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-orange-50 rounded-xl shadow-lg font-poppins text-gray-800">
      <h1 className="text-3xl font-bold text-orange-600 text-center mb-6">
        Get in Touch 🍔
      </h1>
      <p className="text-center mb-8">
        Questions? Custom orders? We’re here to satisfy your cravings!
      </p>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg border-2 border-orange-300 focus:border-orange-500 outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg border-2 border-orange-300 focus:border-orange-500 outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            required
            placeholder="Tell us what you'd like..."
            className="w-full px-4 py-3 rounded-lg border-2 border-orange-300 focus:border-orange-500 outline-none transition resize-y"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl shadow-md transition"
        >
          Send Your Order Inquiry
        </button>
      </form>
    </div>
  )
}

export default Contact
