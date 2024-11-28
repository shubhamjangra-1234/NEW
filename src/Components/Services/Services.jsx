
import { FaTools } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import { FcEngineering } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
const Services = () => {
  return (
    <div className="bg-gray-300 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
        <h2 className="text-2xl text-left  mx-5 py-2 md:text-4xl   border-b-2 border-green-600 mb-4">
        Our Professional Services
          </h2>
          <p className="text-lg text-gray-600">
            Delivering excellence with tailored solutions across multiple
            domains to meet your unique needs. Explore our specialized services
            below.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Repair Services */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-8 md:p-10">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
              <FaTools className="text-blue-700  " />{" "}
              </div>
              <h2 className="text-2xl font-medium border-b border-red-600 pb-2 text-gray-900 ml-4">
                Repair Services
              </h2>
            </div>
            <p className="text-gray-700 mb-6">
              We specialize in restoring equipment to optimal performance. Using
              advanced diagnostics, certified spare parts, and expert
              technicians, we ensure minimal downtime and reliable operations.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Comprehensive diagnostics for precision repairs.</li>
              <li>Skilled technicians with industry expertise.</li>
              <li>Quick turnaround times with high-quality results.</li>
              <li>Custom solutions tailored to your requirements.</li>
            </ul>
          </div>

          {/* Design & Construction */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-8 md:p-10">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
              <MdConstruction className="text-xl text-green-500" />
              </div>
              <h2 className="text-2xl font-medium  border-b border-red-600 pb-2 text-gray-900 ml-4">
                Design & Construction
              </h2>
            </div>
            <p className="text-gray-700 mb-6">
              Transforming visions into reality, we provide innovative designs
              and robust construction solutions. Our team ensures functionality,
              efficiency, and aesthetic appeal in every project.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Custom designs tailored to your specifications.</li>
              <li>Use of cutting-edge technology for precision.</li>
              <li>
                Experienced professionals ensuring durability and quality.
              </li>
              <li>On-time project delivery with complete transparency.</li>
            </ul>
          </div>

          {/* Installation Services */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-8 md:p-10">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 text-xl  bg-red-100 p-3 rounded-full">
              <FcEngineering />
              </div>
              <h2 className="text-2xl  border-b border-red-600 pb-2 font-medium text-gray-900 ml-4">
                Installation Services
              </h2>
            </div>
            <p className="text-gray-700 mb-6">
              Seamless installation services for complex systems, ensuring
              safety, efficiency, and adherence to industry standards. Our goal
              is to simplify your setup process with professionalism.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Precision installation with minimal disruption.</li>
              <li>Certified professionals ensuring compliance.</li>
              <li>Comprehensive testing and quality assurance.</li>
              <li>Support and guidance for post-installation operations.</li>
            </ul>
          </div>

          {/* Consultation Services */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-8 md:p-10">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 text-2xl bg-yellow-100 p-3 rounded-full">
              <FcIdea />
              </div>
              <h2 className="text-2xl  border-b border-red-600 pb-2 font-medium text-gray-900 ml-4">
                Consultation Services
              </h2>
            </div>
            <p className="text-gray-700 mb-6">
              Gain actionable insights and strategic planning from our experts.
              We provide consultation services tailored to your challenges,
              helping you achieve operational excellence and cost efficiency.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>In-depth analysis of your unique requirements.</li>
              <li>Practical solutions for enhanced efficiency.</li>
              <li>Expert guidance for long-term success.</li>
              <li>Proven strategies to minimize costs and maximize ROI.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
