const AdvancedMachinesPage = () => {
  return (
    <div>
      <section className=" bg-gradient-to-r from-zinc-400 to-zinc-200  w-full py-6 px-2">
        <div className="text-center">
          <h2 className="text-2xl text-left mx-5 py-2 md:text-4xl   border-b-2 border-green-600 mb-4">
            National Engineering Works
          </h2>
          <p className="mt-4 text-lg">
            We have invested in the most innovative and high-quality machinery
            to ensure top-notch results in food processing. Below are the
            machines that set us apart in the industry.
          </p>
        </div>
        <div className=" py-4 px-4 md:px-4">
      <div className="rounded-md  bg-zinc-200 max-w-6xl mx-auto">
        

        {/* Machine Features */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 p-4 ">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://anval.net/wp-content/uploads/2020/01/RH-Series.png"
              alt="Advanced Machines"
              className=""
            />
          </div>
          {/* Text */}
          <div>
            <h3 className="text-2xl border-b border-black font-medium text-gray-900 mb-4">
              Why Choose Our Machines?
            </h3>
            <p className="text-gray-700 mb-4">
              Our advanced machines are designed with state-of-the-art technology to enhance efficiency, accuracy, and productivity across industries. Whether you’re involved in manufacturing, processing, or construction, our equipment delivers consistent, high-quality performance.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                **Precision Engineering** – Designed to handle complex tasks with utmost accuracy.
              </li>
              <li>
                **Durability** – Built with high-quality materials to withstand heavy usage.
              </li>
              <li>
                **Energy Efficient** – Optimized for reduced energy consumption without compromising output.
              </li>
              <li>
                **User-Friendly Interface** – Easy-to-operate controls for seamless operation.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
        {/* Machine 1 - De-Stoner */}
        <div className="flex border-b p-2  border-black  flex-col md:flex-row items-center ">
          <div className="w-full flex justify-center md:w-1/3 p-4">
          <a href="/destoner" >
            <img
              src="https://satake-usa.com/wp-content/uploads/2021/04/Destoner-SGA-B.png"
              alt="De-Stoner"
              className="w-52  h-52 object-cover rounded-md"
            />
            </a>
          </div>
          <div className="w-full md:w-2/3 p-4">
            <h3 className="text-3xl border-b-2 border-green-700 ">De-Stoner</h3>
            <p className="mt-2 text-lg">
              The De-Stoner efficiently removes stones and other foreign
              materials from grains, ensuring product purity and improving the
              final output quality.
            </p>
          </div>
        </div>

        {/* Machine 2 - Elevators */}
        <div className="flex  border-b p-2 border-black  flex-col md:flex-row items-center  ">
          <div className="w-full md:w-2/3 p-4">
            <h3 className="text-3xl border-b-2 border-green-700 ">Elevators</h3>
            <p className="mt-2 text-lg">
              Elevators are used for efficient vertical transportation of bulk
              materials in the processing plant. They ensure smooth handling and
              reliable operation.
            </p>
          </div>
          <div className="w-full flex justify-center md:w-1/3 p-4">
          <a href="/elevator" >
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/8/JF/YF/WC/16395088/mild-steel-bucket-elevator.png"
              alt="Elevators"
              className="w-52  h-52 object-cover rounded-md"
            /></a>
          </div>
        </div>

        {/* Machine 3 - Horizontal Cyclone */}
        <div className="flex border-b p-2 border-black  flex-col md:flex-row items-center  ">
          <div className="w-full flex justify-center m-2 md:w-1/3 p-4">
        <a href="/Cyclone" >
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/8/336868120/LF/CB/CT/3370644/horizontal-cyclone-400-2-500x500.png"
              alt="Horizontal Cyclone"
              className="w-52  h-52 object-cover rounded-md"
            />
          </a>
          </div>
          <div className="w-full md:w-2/3 p-4">
            <h3 className="text-3xl border-b-2 border-green-700 ">
              Horizontal Cyclone
            </h3>
            <p className="mt-2 text-lg">
              The Horizontal Cyclone is designed for high-efficiency dust
              collection, ensuring clean production environments and a safer
              workplace.
            </p>
          </div>
        </div>

        

        {/* Machine 5 - Fatka Machine */}
        <div className="flex border-b p-2 border-black  flex-col md:flex-row items-center  ">
          <div className="w-full md:w-2/3 p-4">
            <h3 className="text-3xl border-b-2 border-green-700 ">
              Fatka Machine
            </h3>
            <p className="mt-2 text-lg">
              The Fatka Machine separates and cleans pulses and grains by
              removing impurities, providing high-quality output for further
              processing.
            </p>
          </div>
          <div className="w-full flex justify-center md:w-1/3 p-4">
          <a href="/fatka" >
            <img
              src="https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/plastic-film-jhatka-fatka-machine-3-hp-capacity-20-50-20230819060549.png"
              alt="Fatka Machine"
              className="w-52  h-52 object-cover rounded-md"
            /></a>
          </div>
        </div>

        {/* Machine 6 - Buff Polisher */}
        <div className="flex border-b p-2 border-black  flex-col md:flex-row items-center  ">
          <div className="w-full flex justify-center md:w-1/3 p-4">
          <a href="/buff" >
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/8/336872681/DM/NV/KM/3370644/dal-polisher-1-500x500.png"
              alt="Buff Polisher"
              className="w-52  h-52 object-cover rounded-md"
            /></a>
          </div>
          <div className="w-full md:w-2/3 p-4">
            <h3 className="text-3xl border-b-2 border-green-700 ">
              Buff Polisher
            </h3>
            <p className="mt-2 text-lg">
              The Buff Polisher enhances the appearance and quality of grains by
              polishing them to a uniform shine, ensuring a premium finish for
              processed products.
            </p>
          </div>
        </div>

        {/* Machine 7 - Dal Polisher */}
        <div className="flex border-b p-2 border-black  flex-col md:flex-row items-center  ">
          <div className="w-full md:w-2/3 p-4">
            <h3 className="text-3xl border-b-2 border-green-700 ">
              Dal Polisher
            </h3>
            <p className="mt-2 text-lg">
              The Dal Polisher machine is designed to enhance the quality of
              pulses by polishing them, improving the texture, and making them
              more marketable.
            </p>
          </div>
          <div className="w-full flex justify-center md:w-1/3 p-4">
          <a href="/dal" >
            <img
              src="https://hindustanagro.in/wp-content/themes/hindustan/assets/images/product/dal-polisher.webp"
              alt="Dal Polisher"
              className="w-52  h-52 object-cover rounded-md"
            /></a>
          </div>
        </div>

        {/* Machine 8 - Screw Conveyor */}
        <div className="flex border-b p-2 border-black  flex-col md:flex-row items-center  ">
          <div className="w-full flex justify-center md:w-1/3 p-4">
          <a href="/conveyor" >
            <img
              src="https://www.cimbria.com/content/dam/public/grain-and-protein/cimbria/conveying/screw-conveyors/screw-conveyor-cu.png"
              alt="Screw Conveyor"
              className="w-52  h-52 object-cover rounded-md"
            />
            </a>
          </div>
          <div className="w-full md:w-2/3 p-4">
            <h3 className="text-3xl border-b-2 border-green-700 ">
              Screw Conveyor
            </h3>
            <p className="mt-2 text-lg">
              The Screw Conveyor is used to transport bulk materials like grains
              and powders in a controlled and efficient manner, making it a
              vital part of the production line.
            </p>
          </div>
        </div>

        {/* Machine 9 - Rill Machine */}
        <div className="flex border-b p-2 border-black  flex-col md:flex-row items-center  ">
          <div className="w-full md:w-2/3 p-4">
            <h3 className="text-3xl border-b-2 border-green-700 ">
              Rill Machine
            </h3>
            <p className="mt-2 text-lg">
              The Rill Machine is used for separating and grading grains based
              on size, ensuring uniformity and improving the overall quality of
              the product.
            </p>
          </div>
          <div className="w-full flex justify-center md:w-1/3 p-4">
          <a href="Rill" >
            <img
              src="https://static.wixstatic.com/media/5f1a7b_1bd890a7f6f04fcbb414e2cec26ede91~mv2.png/v1/crop/x_476,y_157,w_2024,h_1379/fill/w_620,h_412,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01-01_edited.png"
              alt="Rill Machine"
              className="w-52  h-52 object-cover rounded-md"
            />
            </a>
          </div>
        </div>

        {/* Machine 10 - Rotary Airlock */}
        <div className="flex border-b p-2 border-black  flex-col md:flex-row items-center  ">
          <div className="w-full flex justify-center md:w-1/3 p-4">
          <a href="/rotary" >
            <img
              src="https://anval.net/wp-content/uploads/2020/01/RH-Series.png"
              alt="Rotary Airlock"
              className="w-52  h-52 object-cover rounded-md"
            />
            </a>
          </div>
          <div className="w-full md:w-2/3 p-4">
            <h3 className="text-3xl border-b-2 border-green-700 ">
              Rotary Airlock
            </h3>
            <p className="mt-2 text-lg">
              The Rotary Airlock is essential for controlling the flow of
              powders and granular materials while maintaining air pressure in
              the system, crucial for dust collection.
            </p>
          </div>
        </div>

        {/* Machine 11 - Blower Machine */}
        <div className="flex p-2 flex-col md:flex-row items-center ">
          <div className="w-full md:w-2/3 p-4">
            <h3 className="text-3xl  border-b-2 border-green-700 ">
              Blower Machine
            </h3>
            <p className="mt-2 text-lg">
              The Blower Machine is used to move air or gases through ducts or
              pipes, essential in dust collection systems and material handling.
            </p>
          </div>
          <div className="w-full flex justify-center md:w-1/3 p-4">
          <a href="/blower" >
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/12/373127974/WA/PI/GQ/27056827/mild-steel-industrial-air-blower-500x500.png"
              alt="Blower Machine"
              className="w-52  h-52 object-cover rounded-md"
            />
            </a>
          </div>
        </div>
 {/* Expert Team Section */}
 <div className="bg-zinc-200 py-8 px-6 rounded-lg">
          <div className="">
            {/* Text */}
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4 border-b border-red-600 ">
                Meet Our Expert Team
              </h3>
              <p className="text-gray-700 mb-4">
                Our team of seasoned professionals is at the heart of our success. With years of hands-on experience and deep technical expertise, our experts are equipped to provide unparalleled support and guidance.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  **Certified Engineers** – Specialists in machinery installation and maintenance.
                </li>
                <li>
                  **Innovative Thinkers** – Continuously pushing boundaries to improve processes.
                </li>
                <li>
                  **Customer-Focused** – Committed to understanding your unique needs and delivering tailored solutions.
                </li>
                <li>
                  **Problem Solvers** – Addressing challenges swiftly with effective strategies.
                </li>
              </ul>
            </div>
            {/* Image */}
          
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-medium text-gray-900 mb-4">
            Experience Excellence with Our Machines and Team
          </h3>
          <p className="text-gray-700 mb-6">
            Discover how our advanced machines and expert team can transform your operations. Contact us today for more details.
          </p>
          <a href="/quote">
         
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition">
            Learn More
          </button>
         </a>
        </div>
      
      </section>
    </div>
  );
};

export default AdvancedMachinesPage;
