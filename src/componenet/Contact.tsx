import React, { FormEvent } from "react";

const ContactForm: React.FC = () => {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <section id="contact" className="container mx-auto px-4 py-12 h-screen">
      <div className="flex flex-col sm:items-center sm:justify-center h-full">
        {/* Contact Form */}
        <div className="form-container sm:w-full md:w-1/2 md:ml-8 px-4">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Contact Us
          </h2>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
            />
            <input
              type="email"
              placeholder="E-Mail"
              className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
            />
            <textarea
              cols={30}
              rows={6}
              placeholder="Type Your Message"
              className="w-full p-4 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
            />
            <form onSubmit={handleSubmit}>
              <button
                type="submit"
                className="bg-black text-white py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out text-center w-full"
              >
                Submit
              </button>
            </form>
          </form>
        </div>

        {/* Contact Image */}
        <div className="contact-img mt-8 sm:w-full sm:max-w-md md:w-1/2 md:mt-0">
          <img
            src="https://i.postimg.cc/1XvYM67V/restraunt2.jpg"
            alt="Restaurant"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
