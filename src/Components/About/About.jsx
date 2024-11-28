const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <img
        src="Images/27.jpg"
        className="object-cover opacity-30 w-screen h-screen fixed top-0 left-0 z-0"
      />
      <section className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl "> National Engineering Works</h1>
          <p className="mt-4 text-lg">
            We are a trusted name in engineering, providing state-of-the-art
            solutions in food processing and industrial machinery manufacturing.
          </p>
        </div>
      </section>

      {/* Our Background */}
      <section className=" py-16 px-4 text-gray-800 z-50">
        <div className="w-full text-center mb-12">
          <h2 className="text-2xl text-left  mx-5 py-2 md:text-4xl   border-b-2 border-green-600 mb-4">
            National Engineering Works
          </h2>{" "}
          <p className="mt-4 text-lg">
            Established in 2010, National Engineering Works has earned a strong
            reputation in the field of food processing machinery. With a focus
            on innovation, quality, and customer satisfaction, we have built
            lasting relationships with clients across the industry.Our
            well-coordinated management and competent team has helped us achieve
            marked recognition in the market.We dispatch Our products only after
            passing through quality assurance tests Our mentor is "IRSHAD KHAN "
            who bears all the credit for the efficient team work that our
            company does it is all due to his efforts that the organization has
            been successfully taking bulk orders over the years.
          </p>
          <p className="mt-4 text-lg">
            Our Company is based on Solapur (Maharashtra,India),which is the hub
            of manufacturing plants.With the availability of the required raw
            material and equipment.it becomes easier for us to produce the
            milling plant in lesser time and deliver it to our clients a
            stipulated time-frame. Our employees are provided modern and
            advanced machinery to manufacture the milling paint machines.
          </p>
        </div>
      </section>

      {/* Our Work */}
      <section className="bg-gray-100 px-4 py-4">
        <div className="w-full text-center">
          <h2 className="text-2xl text-left  mx-5 py-2 md:text-4xl   border-b-2 border-green-600 mb-4">
            Our Work
          </h2>{" "}
          <p className="mt-4 text-lg mb-6">
            We specialize in a variety of advanced engineering solutions that
            support the food processing and manufacturing industries. Our
            products include pulse mills, rice mills, grinding plants, and more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src="Images/IMG-20241120-WA0034.jpg"
                alt="Our Work"
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl  mt-4">Pulse Mills</h3>
              <p className="mt-2">
                Efficient, high-quality mills designed for optimal pulse
                processing.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src="Images/IMG-20241120-WA0023.jpg"
                alt="Our Work"
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl  mt-4">Grinding Plants</h3>
              <p className="mt-2">
                State-of-the-art grinding plants for a wide range of materials.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src="Images/IMG-20241120-WA0008.jpg"
                alt="Our Work"
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl  mt-4">Rice Mills</h3>
              <p className="mt-2">
                Advanced rice milling technology for improved efficiency and
                quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="w-full py-6 px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl text-left  mx-5 py-2 md:text-4xl   border-b-2 border-green-600 mb-4">
            Our Expertise
          </h2>{" "}
          <p className="mt-4 text-lg">
            With over a decade of experience, our team is proficient in
            providing innovative engineering solutions tailored to each client's
            needs. We are committed to continuous learning and improvement.
          </p>
        </div>
        <div className="flex flex-wrap justify-around">
          <div className="flex flex-col items-center p-6 max-w-xs  border-b border-black ">
            <svg
              className="h-16 w-16 text-blue-600 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17l5 5l-5 5M15 12H9m6 0l-5 5m5-5l-5-5"
              />
            </svg>
            <h3 className="text-xl ">Innovation</h3>
            <p className="text-center">
              We leverage cutting-edge technology and engineering principles to
              deliver customized solutions.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 max-w-xs border-b border-black ">
            <svg
              className="h-16 w-16 text-blue-600 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h18M3 10h18M3 15h18M3 20h18"
              />
            </svg>
            <h3 className="text-xl ">Quality Control</h3>
            <p className="text-center">
              Each machine we produce undergoes rigorous testing to ensure
              optimal performance and safety.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 max-w-xs  border-b border-black ">
            <svg
              className="h-16 w-16 text-blue-600 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <h3 className="text-xl ">Client-Centric</h3>
            <p className="text-center">
              We focus on understanding the unique requirements of our clients,
              ensuring tailored solutions that meet their needs.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="w-full py-6 px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-left  mx-5 py-2 md:text-4xl   border-b-2 border-green-600 mb-4">
            Our Infrastructure
          </h2>{" "}
          <p className="mt-4 text-lg">
            We have established a sophisticated infrastructure equipped with
            state-of-the-art technology. Our facility is divided into key
            functional areas, including manufacturing, quality testing, and
            warehousing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <img
              src="Images/IMG-20241120-WA0009.jpg"
              alt="Manufacturing"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl  mt-4">Manufacturing</h3>
          </div>
          <div>
            <img
              src="Images/IMG-20241120-WA0024.jpg"
              alt="Quality Testing"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl  mt-4">Quality Testing</h3>
          </div>
          <div>
            <img
              src="Images/IMG-20241120-WA0014.jpg"
              alt="Warehousing"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl  mt-4">Warehousing</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
