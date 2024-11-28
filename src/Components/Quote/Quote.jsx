const GetQuote = () => {
  return (
    <div className="min-h-screen bg-gray-300 p-2">
      {/* Container */}
      <div className="w-full bg-zinc-200 shadow-md rounded-lg  p-4 ">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-2xl text-left  mx-5 py-2 md:text-4xl   border-b-2 border-green-600 mb-4">
            Discover Tailored Solutions for Your Needs
          </h2>
          <p className="text-gray-600 text-lg">
            Reach out to us for personalized insights into our services and a
            detailed quotation crafted for your requirements.
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col bg-zinc-200 p-4 md:flex-row justify-evenly mt-10 gap-8">
          {/* Address */}

          <div className="bg-zinc-100 rounded-md p-4 flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 text-indigo-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16.29 4.71a1 1 0 011.41 0l3.59 3.59a1 1 0 010 1.41l-9.59 9.59a1 1 0 01-.33.22l-4 1a1 1 0 01-1.25-1.25l1-4a1 1 0 01.22-.33l9.59-9.59zm-5.3 10.59h.01"
              />
            </svg>
            <h2 className="text-xl text-gray-700 mb-2">Office</h2>
            <a href="https://www.google.com/maps/place/17%C2%B045'47.3%22N+75%C2%B049'15.5%22E/@17.7631397,75.818409,17z/data=!3m1!4b1!4m4!3m3!8m2!3d17.7631397!4d75.8209839?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"  className="text-gray-500">
              C-162,Chincholi MIDC, Solapur, 413255
            </a>
          </div>
          {/* Email */}
          <div className="bg-zinc-100 rounded-md p-4 flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 text-green-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-4 4v-1a5.978 5.978 0 01-4.687-2.344C6.298 12.418 6 11.244 6 10v-1c0-.415.337-.752.75-.752H17.25c.413 0 .75.337.75.752v1c0 1.244-.298 2.418-.813 3.656C15.978 14.344 14 16 14 16v1h-2zm-4.938-3.438l.563.563c-.75 1.125-1.312 2.367-1.687 3.688H9V18h-.063C8.71 17.086 9.508 15.863 10.5 15c-.992-.863-1.79-2.086-1.938-3.063H6.938z"
              />
            </svg>
            <h2 className="text-xl text-gray-700 mb-2">Email Support</h2>
            <a
              href="nationalengineering973@gmail.com"
              className="text-gray-500"
            >
              nationalengineering973@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-zinc-100 rounded-md p-4 flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 text-blue-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 16.53l-4.66-4.65c-.23-.23-.54-.33-.87-.33h-.01a1.22 1.22 0 00-.86.37L12 16.71 7.93 12.65c-.23-.23-.34-.54-.34-.86a1.22 1.22 0 01.34-.87L11.06 7l-2.2-2.2a1.22 1.22 0 01-.35-.87V3a.97.97 0 00-.28-.7c-.44-.44-.73-.44-1.17 0L2 9.7l4.66 4.65c.23.23.54.34.87.34h.01c.34 0 .66-.13.87-.34L12 7.29l4.07 4.07c.23.23.54.34.87.34s.64-.13.87-.34L22 3.7V7a.98.98 0 01-.3.7l-4.66 4.66c-.23.23-.54.33-.87.33-.35 0-.65-.13-.87-.37z"
              />
            </svg>
            <h2 className="text-xl text-gray-700 mb-2">Call Our Team</h2>
            <p className="text-gray-500">
              <a href="tel:9634781042">9634781042</a> ||
              <a href="tel:6395233717"> 6395233717</a> ||
              <a href="tel: 9579802492"> 9579802492</a>
            </p>
          </div>
        </div>
        <div className="mt-12 bg-gray-50 py-8 px-4 rounded-lg shadow-md">
          {/* About Us Section */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl text-gray-800 mb-4">
              We’re Here to Assist You
            </h2>
            <p className="text-gray-600 text-lg">
              Our dedicated team is committed to providing personalized support.
              If you have any questions or inquiries, feel free to reach out. We
              promise to get back to you at the earliest opportunity, ensuring
              your experience with us is smooth and efficient.
            </p>
            <p className="text-gray-600 text-lg mt-2">
              Let us know how we can assist you, and we'll make sure your needs
              are addressed promptly.
            </p>
          </div>

          {/* Decorative Divider */}
          <div className="my-8 border-t border-gray-200"></div>

          {/* Call-to-Action Section */}
          <div className="text-center">
            <h3 className="text-xl text-gray-700 mb-4">
              Got a Query? Our Team is Ready to Help
            </h3>
            <p className="text-gray-500">
              Simply drop us a message, and we’ll get back to you with solutions
              tailored to your needs.
            </p>
            <p className="text-gray-500 mt-1">
              Reach out today, and experience professional support like never
              before!
            </p>
          </div>
        </div>
        {/* Map Section */}
        <div className="mt-10">
          <h2 className="text-2xl text-left  mx-5 py-2 md:text-4xl   border-b-2 border-green-600 mb-4">
            Locate Us with Ease
          </h2>
          <div className="w-full p-2 h-64 bg-gray-50 rounded-lg shadow-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3799.6071625495006!2d75.81840897517357!3d17.76313968318953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQ1JzQ3LjMiTiA3NcKwNDknMTUuNSJF!5e0!3m2!1sen!2sin!4v1732551143265!5m2!1sen!2sin"
              className="w-full h-full"
              style={{border:"0"}}
              allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-gray-500 text-center mt-4">
          C-162,Chincholi MIDC, Solapur, 413255
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
