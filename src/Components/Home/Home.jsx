/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import ServicesSection from "./Slider";
import ProductionProcess from "./Process";
import OurTeamSection from "./Team";
import OurValuableClientsSection from "./clients";
const Home = () => {
  const slides = [
    {
      url: "https://satake-usa.com/wp-content/uploads/2021/04/Destoner-SGA-B.png",

      name: "DE-Stoner",
    },
    {
      url: "https://5.imimg.com/data5/SELLER/Default/2022/8/JF/YF/WC/16395088/mild-steel-bucket-elevator.png",

      name: "Elevators",
    },

    {
      url: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/plastic-film-jhatka-fatka-machine-3-hp-capacity-20-50-20230819060549.png",
      name: "Fatka Machine",
    },
    {
      url: "https://5.imimg.com/data5/SELLER/Default/2023/8/336868120/LF/CB/CT/3370644/horizontal-cyclone-400-2-500x500.png",
      name: "Horizontal Cyclone",
    },

    {
      url: "https://hindustanagro.in/wp-content/themes/hindustan/assets/images/product/dal-polisher.webp",
      name: "Dal Polisher",
    },
    {
      url: "https://5.imimg.com/data5/SELLER/Default/2023/8/336872681/DM/NV/KM/3370644/dal-polisher-1-500x500.png",
      name: "Buff Polisher",
    },
    {
      url: "https://www.cimbria.com/content/dam/public/grain-and-protein/cimbria/conveying/screw-conveyors/screw-conveyor-cu.png",
      name: "Screw Conveyor",
    },
    {
      url: "https://static.wixstatic.com/media/5f1a7b_1bd890a7f6f04fcbb414e2cec26ede91~mv2.png/v1/crop/x_476,y_157,w_2024,h_1379/fill/w_620,h_412,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01-01_edited.png",
      name: "Rill Machine",
    },
    {
      url: "https://5.imimg.com/data5/SELLER/Default/2023/12/373127974/WA/PI/GQ/27056827/mild-steel-industrial-air-blower-500x500.png",
      name: "Blower Machine",
    },
    {
      url: "https://anval.net/wp-content/uploads/2020/01/RH-Series.png",
      name: "Rotary Airlock",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="bg-zinc-200 z-0 text-black font-sans">
      <div className="w-full  relative  bg-cover bg-[url('/Images/luxa.jpg')] h-full bg-center overflow-hidden">
        <div className="lg:w-1/2  p-4 ">
          <h1
            className="text-4xl font-serif text uppercase text-zinc-300
        "
          >
            buildind excellence in food processing 40+...
          </h1>
          <p className="text-zinc-300 mt-4">
            {" "}
            We specialize in manufacturing advanced machinery designed to
            enhance efficiency and quality in the industry. Discover our
            commitment to reliability, innovation, and unparalleled expertise
          </p>
          <a href="/about">
            <button className="z-10 text-zinc-300 px-6 py-2 mt-2  rounded-lg font-mono bg-gray-700 hover:bg-gray-900 border  duration-500  ">
              Explore
            </button>
          </a>
        </div>
        <h2 className="mt-24 mb-4 font-bold  text-center text-2xl text-zinc-300">
          Experience Excellence, Innovation, and Reliability – All in One Place
        </h2>
        <p className="text-zinc-300 right-4 text-xl m-4 ">
          ISO 9001:2015 Certified
        </p>
      </div>
      {/* Hero Section */}
      <section className="m-t-2 pb-3 pt-10 px-4 lg:px-8 bg-gray-300">
        <h2 className="text-2xl py-2 md:text-4xl  border-b-2 border-green-600 mb-4">
          National Engineering Works
        </h2>
        <p className="w-full text-lg md:text-lg  text-gray-700 mb-8">
          Established in 2010, National Engineering Works has become a pioneer
          in providing innovative engineering solutions, precise surveying, and
          comprehensive services. Our unwavering commitment to quality,
          excellence, and customer satisfaction sets us apart, making us a
          trusted partner in shaping industrial success stories
        </p>
      </section>
      <ProductionProcess />
      <section className="py-12  bg-zinc-100">
        <div className="max-w-7xl  mx-auto px-6">
          <h2 className="text-2xl py-2 md:text-4xl  border-b-2 border-green-600 mb-4">
            What We Excel In
          </h2>

          <div className="p-2 grid md:grid-cols-3 border-b-2 gap-4">
            <div className="shadow-md shadow-gray-900 rounded-3xl flex flex-col items-center text-center p-6   duration-300   ">
              <svg
                version="1.1"
                id="_x36_"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve"
                fill="#000000"
                className="h-24 hover:-translate-y-2 duration-300"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <polygon
                      style={{ fill: "none" }}
                      points="318.872,164.945 305.096,178.721 318.872,187.599 "
                    ></polygon>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path
                              style={{ fill: "#96C9BA" }}
                              d="M285.585,76.334v219.753c0,14.656-8.386,27.43-20.612,33.779 c-2.821,1.489-5.799,2.586-8.934,3.291c-2.743,0.706-5.643,1.02-8.542,1.02c-6.348,0-12.226-1.568-17.477-4.311 c-12.226-6.349-20.612-19.122-20.612-33.779V76.334c0-10.501,4.31-19.984,11.207-26.881s16.379-11.207,26.881-11.207 c5.14,0,10.026,1.108,14.511,3.019c0.068,0.029,0.138,0.05,0.205,0.078c1.939,0.84,3.823,1.787,5.582,2.937 c0.627,0.391,1.254,0.783,1.803,1.175c0.549,0.392,1.097,0.784,1.645,1.254c1.176,0.94,2.273,1.959,3.37,3.057 c0.784,0.783,1.567,1.567,2.195,2.43c0.784,0.861,1.489,1.802,2.195,2.82c0.627,0.941,1.175,1.802,1.646,2.744 c0.314,0.548,0.627,1.096,0.94,1.724c0.784,1.489,1.411,3.057,1.881,4.624c0.314,0.784,0.549,1.568,0.784,2.352 c0.235,0.862,0.47,1.646,0.627,2.507c0.235,1.176,0.392,2.273,0.47,3.448C285.507,73.749,285.585,75.002,285.585,76.334z"
                            ></path>{" "}
                            <path
                              style={{ fill: "#96C9BA" }}
                              d="M174.846,76.334v219.753c0,8.7-2.978,16.694-7.994,23.12 c-3.292,4.388-7.602,8.071-12.618,10.658c-5.251,2.743-11.129,4.311-17.477,4.311c-6.348,0-12.226-1.568-17.477-4.311 c-12.226-6.349-20.612-19.122-20.612-33.779V76.334c0-0.077,0-0.077,0-0.156c0.078-10.423,4.31-19.828,11.207-26.725 c6.897-6.897,16.301-11.207,26.803-11.207h0.079C157.683,38.246,174.846,55.409,174.846,76.334z"
                            ></path>{" "}
                            <path
                              style={{ fill: "#B8C6C6" }}
                              d="M412.704,42.791v270.694c0,5.722-1.019,11.286-3.057,16.38 c-1.019,3.057-2.508,5.878-4.232,8.542c-8.307,13.167-23.041,21.944-39.656,21.944c-5.094,0-10.031-0.784-14.577-2.352 c-15.517-5.094-27.508-18.103-31.113-34.248c-0.784-3.291-1.176-6.74-1.176-10.267V42.791c0-2.351,0.157-4.702,0.549-7.054 c1.254-8.386,4.781-16.066,9.953-22.414c1.019-1.254,2.116-2.507,3.292-3.606c3.997-4.075,8.777-7.366,14.028-9.718h38.167 c6.74,3.058,12.696,7.681,17.32,13.324c5.172,6.348,8.699,14.028,9.953,22.414C412.468,38.089,412.704,40.441,412.704,42.791z"
                            ></path>{" "}
                          </g>{" "}
                          <path
                            style={{ opacity: "0.1", fill: "#040000" }}
                            d="M412.704,42.791v5.956c-0.157,0.156-0.314,0.234-0.549,0.391 c-2.43,1.49-5.329,2.43-8.386,2.43h-75.942c-3.057,0-5.956-0.94-8.386-2.43c-0.235-0.157-0.392-0.235-0.549-0.391v-5.956 c0-2.351,0.157-4.702,0.549-7.054c1.254-8.386,4.781-16.066,9.953-22.414h72.807c5.172,6.348,8.699,14.028,9.953,22.414 C412.468,38.089,412.704,40.441,412.704,42.791z"
                          ></path>{" "}
                          <path
                            style={{ fill: "#B8C6C6" }}
                            d="M419.365,15.596v7.055c0,5.486-2.9,10.345-7.21,13.087c-2.43,1.567-5.329,2.508-8.386,2.508 h-75.942c-3.057,0-5.956-0.941-8.386-2.508c-4.389-2.743-7.21-7.602-7.21-13.087v-7.055C312.232,7.055,319.206,0,327.827,0 h75.942C412.311,0,419.365,7.055,419.365,15.596z"
                          ></path>{" "}
                        </g>{" "}
                        <polygon
                          style={{ fill: "#B4B3B3" }}
                          points="512,230.569 510.511,250.084 510.511,250.24 508.552,277.514 506.906,300.163 503.614,344.834 498.05,420.228 496.717,438.175 21.317,438.175 11.129,299.614 7.602,251.651 1.802,173.123 1.568,169.988 1.568,169.753 0,149.062 15.988,158.859 98.67,209.722 132.448,230.569 132.526,230.569 130.332,169.91 130.332,169.753 129.548,149.062 174.846,177.591 209.408,199.377 256.039,228.688 259.017,230.569 259.017,149.062 285.585,166.148 318.893,187.621 385.43,230.569 385.509,230.569 387.703,169.597 388.487,149.062 412.704,165.051 "
                        ></polygon>{" "}
                        <polygon
                          style={{ fill: "#F2F2F2" }}
                          points="510.589,250.318 508.552,277.514 506.906,300.163 503.614,344.834 498.128,420.228 498.05,420.228 496.717,438.175 495.385,455.573 22.649,455.573 21.552,440.29 21.395,438.175 11.129,299.614 7.602,251.651 1.724,173.123 1.489,169.91 1.568,169.988 1.568,169.753 3.762,171.085 98.67,229.08 133.231,250.24 132.448,230.569 130.175,169.831 130.332,169.91 130.332,169.753 174.846,197.575 209.408,219.205 256.039,248.359 259.017,250.24 259.017,230.569 258.939,169.753 259.017,169.753 285.585,186.76 312.623,204.079 318.893,208.076 384.725,250.162 385.43,230.569 387.703,169.597 412.704,185.976 510.511,250.084 510.511,250.24 "
                        ></polygon>{" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <rect
                              x="44.789"
                              y="290.441"
                              style={{ fill: "#88BBC0" }}
                              width="122.078"
                              height="39.454"
                            ></rect>{" "}
                            <rect
                              x="44.789"
                              y="338.406"
                              style={{ fill: "#88BBC0" }}
                              width="122.078"
                              height="39.454"
                            ></rect>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <rect
                              x="197.986"
                              y="290.441"
                              style={{ fill: "#88BBC0" }}
                              width="122.078"
                              height="39.454"
                            ></rect>{" "}
                            <rect
                              x="197.986"
                              y="338.406"
                              style={{ fill: "#88BBC0" }}
                              width="122.078"
                              height="39.454"
                            ></rect>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <rect
                              x="351.182"
                              y="290.441"
                              style={{ fill: "#88BBC0" }}
                              width="122.078"
                              height="39.454"
                            ></rect>{" "}
                            <rect
                              x="351.182"
                              y="338.406"
                              style={{ fill: "#88BBC0" }}
                              width="122.078"
                              height="39.454"
                            ></rect>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                      <path
                        style={{ opacity: "0.06", fill: "#040000" }}
                        d="M512,230.569l-1.411,19.75l-2.038,27.196l-1.646,22.648l-8.778,120.065h-0.078 l-1.332,17.947l-1.332,17.398H256.039V39.343c4.232,0.941,8.151,2.665,11.756,4.938c0.627,0.391,1.254,0.783,1.803,1.175 c0.549,0.392,1.097,0.784,1.645,1.254c1.176,0.94,2.273,1.959,3.37,3.057c0.784,0.783,1.567,1.567,2.195,2.43 c0.784,0.94,1.568,1.881,2.195,2.82c0.627,0.941,1.175,1.802,1.646,2.744c0.314,0.548,0.627,1.096,0.94,1.724 c0.784,1.489,1.411,3.057,1.881,4.624c0.314,0.784,0.549,1.568,0.784,2.352c0.235,0.862,0.47,1.646,0.627,2.507 c0.235,1.176,0.392,2.273,0.47,3.448c0.156,1.334,0.235,2.587,0.235,3.919v89.814l33.308,21.474V42.791 c0-2.351,0.157-4.702,0.549-7.054c-4.389-2.743-7.21-7.602-7.21-13.087v-7.055C312.232,7.055,319.206,0,327.827,0h75.942 c8.542,0,15.596,7.055,15.596,15.596v7.055c0,5.486-2.9,10.345-7.21,13.087c0.313,2.351,0.549,4.703,0.549,7.054v122.181 L512,230.569z"
                      ></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              {/* <img src="https://niceengineering.in/wp-content/uploads/2021/11/icon-01.png" /> */}
              <h3 className="text-xl py-2 text-gray-700 mb-2">Production</h3>
              <p className="text-center">
                Our production combines state-of-the-art technology and
                unmatched craftsmanship to deliver reliable, high-quality
                machinery tailored for excellence in the food processing
                industry.
              </p>
            </div>

            <div className="shadow-md shadow-gray-900 rounded-3xl flex flex-col items-center text-center p-6   duration-300   ">
              <svg
                fill="#000000"
                height="96px"
                width="96px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512.00 512.00"
                xml:space="preserve"
                className="hover:-translate-y-2 duration-300"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M153.6,362.667c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533 S158.72,362.667,153.6,362.667z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M221.867,362.667c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533 S226.987,362.667,221.867,362.667z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M358.4,362.667c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533 S363.52,362.667,358.4,362.667z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M290.133,362.667c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533 S295.253,362.667,290.133,362.667z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M85.333,362.667c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533 S90.453,362.667,85.333,362.667z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M426.667,362.667c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533 S431.787,362.667,426.667,362.667z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M491.52,430.933c11.093,0,20.48-9.387,20.48-20.48v-79.36c0-10.24-7.68-18.773-17.067-19.627v-30.72 c0-10.24-7.68-18.773-17.067-20.48V21.333c0-5.12-3.413-8.533-8.533-8.533H42.667c-5.12,0-8.533,3.413-8.533,8.533v238.933 c-9.387,1.707-17.067,10.24-17.067,20.48v30.72C7.68,313.173,0,321.707,0,331.093v79.36c0,11.093,9.387,20.48,20.48,20.48h5.12 v51.2H8.533c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h25.6h51.2h341.333h51.2h25.6 c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533H486.4v-51.2H491.52z M102.4,81.067h85.333V115.2h-17.067v-8.533 c0-5.12-3.413-8.533-8.533-8.533s-8.533,3.413-8.533,8.533V140.8c0,5.12,3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533v-8.533 h17.067v25.6c0,5.12,3.413,8.533,8.533,8.533h25.6V192c0,5.12,3.413,8.533,8.533,8.533h51.2c5.12,0,8.533-3.413,8.533-8.533v-25.6 h25.6c5.12,0,8.533-3.413,8.533-8.533v-25.6h17.067v8.533c0,5.12,3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533v-34.133 c0-5.12-3.413-8.533-8.533-8.533s-8.533,3.413-8.533,8.533v8.533h-17.067V81.067H409.6v179.2h-85.333v-34.133 c0-5.12-3.413-8.533-8.533-8.533H196.267c-5.12,0-8.533,3.413-8.533,8.533v34.133H102.4V81.067z M76.8,482.133H42.667v-51.2H76.8 V482.133z M59.733,371.2c0-14.507,11.093-25.6,25.6-25.6c14.507,0,25.6,11.093,25.6,25.6s-11.093,25.6-25.6,25.6 C70.827,396.8,59.733,385.707,59.733,371.2z M418.133,482.133H93.867v-51.2h324.267V482.133z M128,371.2 c0-14.507,11.093-25.6,25.6-25.6c14.507,0,25.6,11.093,25.6,25.6s-11.093,25.6-25.6,25.6C139.093,396.8,128,385.707,128,371.2z M196.267,371.2c0-14.507,11.093-25.6,25.6-25.6c14.507,0,25.6,11.093,25.6,25.6s-11.093,25.6-25.6,25.6 C207.36,396.8,196.267,385.707,196.267,371.2z M264.533,371.2c0-14.507,11.093-25.6,25.6-25.6c14.507,0,25.6,11.093,25.6,25.6 s-11.093,25.6-25.6,25.6C275.627,396.8,264.533,385.707,264.533,371.2z M332.8,371.2c0-14.507,11.093-25.6,25.6-25.6 s25.6,11.093,25.6,25.6s-11.093,25.6-25.6,25.6S332.8,385.707,332.8,371.2z M401.067,371.2c0-14.507,11.093-25.6,25.6-25.6 s25.6,11.093,25.6,25.6s-11.093,25.6-25.6,25.6S401.067,385.707,401.067,371.2z M469.333,482.133H435.2v-51.2h34.133V482.133z M477.867,311.467H34.133V281.6c0-2.56,1.707-4.267,4.267-4.267h4.267h51.2h102.4h119.467h102.4h51.2h4.267 c2.56,0,4.267,1.707,4.267,4.267V311.467z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              {/* <img src="https://niceengineering.in/wp-content/uploads/2021/11/icon-02.png" /> */}
              <h3 className="text-xl py-2 text-gray-700 mb-2">Services</h3>
              <p className="text-center">
                Our services are dedicated to providing seamless support, expert
                guidance, and innovative solutions to ensure the optimal
                performance and longevity of your machinery{" "}
              </p>
            </div>

            <div className="shadow-md shadow-gray-900  rounded-3xl flex flex-col items-center text-center p-6   duration-300   ">
              <svg
                fill="#000000"
                width="96px"
                height="96px"
                viewBox="0 0 512 512"
                enable-background="new 0 0 512 512"
                id="Wrench"
                version="1.1"
                className=" duration-300 hover:-translate-y-2 "
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Wrench_1_">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M339.83,19.865h-1.123c-16.503,0-29.93,13.427-29.93,29.93v282.986c0,18.066-6.542,36.064-18.42,50.678 c-9.611,11.828-14.904,26.749-14.904,42.016c0,36.757,29.902,66.66,66.659,66.66h9.612l-24.221-49.537l5-16.465h23.588 l20.346,47.473l6.154-4.911c0.869-0.692,8.646-7.226,14.402-23.131c0.277-0.765,0.541-1.532,0.795-2.304 c8.338-25.415,2.643-54.321-14.865-75.438c-5.806-7.004-9.824-15.23-11.621-23.791c-1.023-4.877-1.543-9.878-1.543-14.862V49.795 C369.76,33.292,356.334,19.865,339.83,19.865z M320.777,112.05h12.797v190.988h12V112.05h12.186v217.119 c0,3.37,0.229,6.743,0.632,10.095h-37.876c0.16-2.156,0.262-4.318,0.262-6.482V112.05z M357.76,100.05h-36.982v-4.416h36.982 V100.05z M338.707,31.865h1.123c9.887,0,17.93,8.043,17.93,17.93v33.838h-36.982V49.795 C320.777,39.908,328.82,31.865,338.707,31.865z M373.686,375.48c14.898,17.97,19.766,42.508,12.701,64.037 c-0.215,0.655-0.439,1.308-0.676,1.961c-1.686,4.658-3.559,8.297-5.257,11.037l-16.449-38.383h-40.399l-8.955,29.496 l17.395,35.576c-25.348-4.738-44.592-27.029-44.592-53.73c0-12.52,4.338-24.752,12.217-34.447 c9.553-11.752,16.078-25.447,19.129-39.764h41.963C363.309,359.989,367.718,368.283,373.686,375.48z"></path>{" "}
                        <path d="M339.574,65.773c8.777,0,15.918-7.141,15.918-15.918c0-8.778-7.141-15.919-15.918-15.919 c-8.778,0-15.92,7.141-15.92,15.919C323.654,58.632,330.796,65.773,339.574,65.773z M339.574,45.936 c2.16,0,3.918,1.757,3.918,3.919c0,2.161-1.758,3.918-3.918,3.918c-2.162,0-3.92-1.758-3.92-3.918 C335.654,47.693,337.412,45.936,339.574,45.936z"></path>{" "}
                        <rect
                          height="19.572"
                          width="12"
                          x="333.574"
                          y="315.033"
                        ></rect>{" "}
                      </g>{" "}
                      <g>
                        {" "}
                        <path d="M189.584,446.227c-8.778,0-15.919,7.141-15.919,15.919s7.141,15.919,15.919,15.919s15.919-7.141,15.919-15.919 S198.362,446.227,189.584,446.227z M189.584,466.064c-2.161,0-3.919-1.758-3.919-3.919s1.758-3.919,3.919-3.919 s3.919,1.758,3.919,3.919S191.746,466.064,189.584,466.064z"></path>{" "}
                        <path d="M243.602,121.333c6.411-10.453,9.799-22.489,9.799-34.808c0-36.757-29.903-66.66-66.66-66.66h-9.612l24.22,49.537 l-4.999,16.464h-23.589l-20.346-47.472l-6.155,4.912c-0.857,0.684-20.128,16.623-20.473,60.829h-15.353v28.105l5.321,3.066 c4.317,2.471,8.42,5.314,12.207,8.46c0.915,0.756,1.823,1.54,2.694,2.323c18.073,16.302,28.438,39.611,28.438,63.95v252.164 c0,16.504,13.428,29.932,29.932,29.932h1.118c16.505,0,29.932-13.428,29.932-29.932V219.558h0v-13.798 C220.077,175.619,228.211,146.425,243.602,121.333z M148.414,59.519l13.09,30.543l-17.362,14.073h-6.362 C137.979,80.987,143.847,66.952,148.414,59.519z M138.687,137.172c-1-0.899-2.035-1.792-3.065-2.644 c-4.102-3.408-8.538-6.51-13.187-9.222v-9.171h25.958l22.539-18.269h34.316l8.955-29.495l-17.395-35.577 c25.347,4.738,44.593,27.029,44.593,53.731c0,10.104-2.776,19.97-8.029,28.534c-16.548,26.98-25.295,58.344-25.296,90.7v13.8h0 v180.392h-12.492V208.962h-12v190.989h-12.49V210.04C171.095,182.309,159.285,155.752,138.687,137.172z M171.095,411.951h36.982 v4.415h-36.982V411.951z M190.145,480.135h-1.118c-9.888,0-17.932-8.045-17.932-17.932v-33.837h36.982v33.837 C208.077,472.09,200.032,480.135,190.145,480.135z"></path>{" "}
                        <path d="M207.951,111.13h-48.695v34.698h48.695V111.13z M171.256,123.13h6.348v10.698h-6.348V123.13z M195.951,133.828h-6.347 V123.13h6.347V133.828z"></path>{" "}
                        <rect
                          height="19.573"
                          width="12"
                          x="183.584"
                          y="177.395"
                        ></rect>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <h3 className="text-xl py-2 text-gray-700 mb-2">Maintenance </h3>
              <p className="text-center">
                Our maintenance solutions ensure your machinery operates at peak
                efficiency, minimizing downtime and maximizing productivity with
                expert care and precision
              </p>
            </div>
          </div>
        </div>
      </section>
      <h2 className="text-2xl  mx-5 py-2 md:text-4xl   border-b-2 border-green-600 mb-4">
        Advanced Machinery
      </h2>
      <div className="flex justify-evenly items-center p-5 bg-gradient-to-l from-gray-400 to-zinc-200 to-blue-100 max-md:flex-col">
        <div>
          <p className="text-zinc-900">
            At National Engineering Works, we specialize in innovative and
            efficient machinery designed to meet diverse industrial needs.
            <br></br>
            Explore our range of high-quality advanced machines:
          </p>
          <ul className="px-10 py-2 list-disc">
            <li className="text-zinc-800">
              <p className=" text-zinc-900">De-Stoner</p>
            </li>
            <li className="text-zinc-800">
              <p className=" text-zinc-900">Elevators</p>
            </li>
            <li className="text-zinc-800">
              <p className=" text-zinc-900">Horizontal Cyclone </p>
            </li>

            <li className="text-zinc-800">
              <p className=" text-zinc-900">Fatka Machine</p>
            </li>
            <li className="text-zinc-800">
              <p className=" text-zinc-900">Buff Polisher</p>
            </li>
            <li className="text-zinc-800">
              <p className=" text-zinc-900">Dal Polisher</p>
            </li>
            <li className="text-zinc-800">
              <p className=" text-zinc-900">Screw Conveyer</p>
            </li>
            <li className="text-zinc-800">
              <p className=" text-zinc-900">Rill Machine</p>
            </li>
            <li className="text-zinc-800">
              <p className=" text-zinc-900">Rotary Airlock</p>
            </li>
            <li className="text-zinc-800">
              <p className=" text-zinc-900">blower Machine</p>
            </li>
          </ul>
          <a href="/machines">
            <button className="m-2 text-white bg-gray-700 rounded-md px-4 py-1">
              More..
            </button>
          </a>
        </div>
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden  ">
          {/* Slider Container */}
          <div className="relative h-64  rounded-lg">
            <img
              src={slides[currentIndex].url}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover  rounded-lg shadow-sm"
            />
          </div>

          {/* Caption */}
          <p className="text-center text-lg font-medium text-gray-700 mt-4">
            {slides[currentIndex].name}
          </p>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
            aria-label="Previous Slide"
          >
            <GrFormPrevious />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
            aria-label="Next Slide"
          >
            <MdNavigateNext />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full ${
                  index === currentIndex ? "bg-blue-600" : "bg-zinc-100"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      <ServicesSection />
      <OurTeamSection />
      <section className="bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl py-2 md:text-4xl  border-b-2 border-green-600 mb-4">
            Our State-of-the-Art Infrastructure
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center mb-12">
            At{" "}
            <span className="font-semibold text-blue-600">
              National Engineering Works
            </span>
            , we take pride in our sophisticated infrastructure facility,
            equipped with cutting-edge technologies and modern machinery.
            Designed to ensure precision, uniformity, and efficiency in
            manufacturing, our infrastructure serves as the backbone of our
            success.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src="Images/IMG-20241120-WA0034.jpg"
                alt="Factory View"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">
                Advanced Manufacturing Unit
              </h3>
              <p className="text-gray-600 mt-4">
                Our manufacturing unit is equipped with state-of-the-art
                machinery to ensure high-quality production processes. Each step
                is optimized for consistency and precision, enabling us to meet
                global standards.
              </p>
            </div>
            <div>
              <img
                src="Images/IMG-20241120-WA0027.jpg"
                alt="Industry View"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">
                Quality Testing & Warehousing
              </h3>
              <p className="text-gray-600 mt-4">
                We maintain rigorous quality testing processes to ensure every
                product meets the highest standards. Our spacious warehousing
                facility is designed for secure and efficient storage,
                streamlining logistics and delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
      <OurValuableClientsSection />
      {/* <ReviewSection/> */}
      {/* Footer */}
      <footer className="py-6 text-center bg-black text-white">
        <p>
          &copy; {new Date().getFullYear()} National Engineering Works. All
          Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
