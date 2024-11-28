/* eslint-disable react-refresh/only-export-components */
// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import Layout from "./Layout.jsx";
// import Home from "./Components/Home/Home.jsx";
// // import About from "./Components/About/About.jsx";
// import AdvancedMachinesPage from "./Components/Machines/Machines.jsx";
// import GetQuote from "./Components/Quote/Quote.jsx";
// import Services from "./Components/Services/Services.jsx";
// import DestonerMachine from "./Components/Machines/Destoner.jsx";
// import ElevatorMachine from "./Components/Machines/Elevator.jsx";
// import HorizontalCycloneMachine from "./Components/Machines/Cyclone.jsx";
// import FatkaMachinePage from "./Components/Machines/Fatka.jsx";
// import BuffPolisherPage from "./Components/Machines/Buff.jsx";
// import DalPolisherPage from "./Components/Machines/Dal.jsx";
// import ScrewConveyorPage from "./Components/Machines/Coneyor.jsx";
// import BlowerMachine from "./Components/Machines/Blower.jsx";
// import RotaryAirlockPage from "./Components/Machines/Rotary.jsx";
// import RillMachine from "./Components/Machines/Rill.jsx";
// import {lazy , Suspense} from "react";
// const lazyAbout  = React.lazy(() =>(import ('./Components/About/About.jsx')))


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Suspense fallback={<div>Loading...</div>}>

//       <Route path="/about" element={<lazyAbout />} />
//       </Suspense>
      
//       <Route path="/machines" element={<AdvancedMachinesPage />} />
//       <Route path="/destoner" element={<DestonerMachine />} />
//       <Route path="/elevator" element={<ElevatorMachine />} />
//       <Route path="/cyclone" element={<HorizontalCycloneMachine />} />
//       <Route path="/fatka" element={<FatkaMachinePage />} />
//       <Route path="/buff" element={<BuffPolisherPage/>} />
//       <Route path="/dal" element={<DalPolisherPage/>} />
//       <Route path="/conveyor" element={<ScrewConveyorPage/>} />
//       <Route path="/blower" element={<BlowerMachine/>} />
//       <Route path="/rotary" element={<RotaryAirlockPage/>} />
//       <Route path="/rill" element={<RillMachine/>} />
//       <Route path="/Quote" element={<GetQuote/>} />
//       <Route path="/Services" element={<Services/>} />
//     </Route>
//   )
// );
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
/* eslint-disable no-unused-vars */
// import React, { lazy, Suspense } from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import Layout from "./Layout.jsx";
// import Home from "./Components/Home/Home.jsx";
// import AdvancedMachinesPage from "./Components/Machines/Machines.jsx";
// import GetQuote from "./Components/Quote/Quote.jsx";
// import Services from "./Components/Services/Services.jsx";
// import DestonerMachine from "./Components/Machines/Destoner.jsx";
// import ElevatorMachine from "./Components/Machines/Elevator.jsx";
// import HorizontalCycloneMachine from "./Components/Machines/Cyclone.jsx";
// import FatkaMachinePage from "./Components/Machines/Fatka.jsx";
// import BuffPolisherPage from "./Components/Machines/Buff.jsx";
// import DalPolisherPage from "./Components/Machines/Dal.jsx";
// import ScrewConveyorPage from "./Components/Machines/Coneyor.jsx";
// import BlowerMachine from "./Components/Machines/Blower.jsx";
// import RotaryAirlockPage from "./Components/Machines/Rotary.jsx";
// import RillMachine from "./Components/Machines/Rill.jsx";

// // Lazy load the About component
// const About = lazy(() => import("./Components/About/About.jsx"));

// // Router setup
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
      
//       {/* Lazy-loaded route for About */}
//       <Route
//         path="/about"
//         element={
//           <Suspense fallback={<div>Loading...</div>}>
//             <About />
//           </Suspense>
//         }
//       />
      
//       <Route path="/machines" element={<AdvancedMachinesPage />} />
//       <Route path="/destoner" element={<DestonerMachine />} />
//       <Route path="/elevator" element={<ElevatorMachine />} />
//       <Route path="/cyclone" element={<HorizontalCycloneMachine />} />
//       <Route path="/fatka" element={<FatkaMachinePage />} />
//       <Route path="/buff" element={<BuffPolisherPage />} />
//       <Route path="/dal" element={<DalPolisherPage />} />
//       <Route path="/conveyor" element={<ScrewConveyorPage />} />
//       <Route path="/blower" element={<BlowerMachine />} />
//       <Route path="/rotary" element={<RotaryAirlockPage />} />
//       <Route path="/rill" element={<RillMachine />} />
//       <Route path="/quote" element={<GetQuote />} />
//       <Route path="/services" element={<Services />} />
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";

// Lazy-loaded components
// eslint-disable-next-line react-refresh/only-export-components
const Home = lazy(() => import("./Components/Home/Home.jsx"));
const About = lazy(() => import("./Components/About/About.jsx"));
const AdvancedMachinesPage = lazy(() => import("./Components/Machines/Machines.jsx"));
const GetQuote = lazy(() => import("./Components/Quote/Quote.jsx"));
const Services = lazy(() => import("./Components/Services/Services.jsx"));
const DestonerMachine = lazy(() => import("./Components/Machines/Destoner.jsx"));
const ElevatorMachine = lazy(() => import("./Components/Machines/Elevator.jsx"));
const HorizontalCycloneMachine = lazy(() => import("./Components/Machines/Cyclone.jsx"));
const FatkaMachinePage = lazy(() => import("./Components/Machines/Fatka.jsx"));
const BuffPolisherPage = lazy(() => import("./Components/Machines/Buff.jsx"));
const DalPolisherPage = lazy(() => import("./Components/Machines/Dal.jsx"));
const ScrewConveyorPage = lazy(() => import("./Components/Machines/Coneyor.jsx"));
const BlowerMachine = lazy(() => import("./Components/Machines/Blower.jsx"));
const RotaryAirlockPage = lazy(() => import("./Components/Machines/Rotary.jsx"));
const RillMachine = lazy(() => import("./Components/Machines/Rill.jsx"));
import "./main.css"
// Custom loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    {/* <p className=" loader text-xl font-semibold ui loader">Loading...</p> */}
     <span className="loader"></span>
  </div>
);

// Router setup with lazy-loaded routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path=""
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="/machines"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <AdvancedMachinesPage />
          </Suspense>
        }
      />
      <Route
        path="/quote"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <GetQuote />
          </Suspense>
        }
      />
      <Route
        path="/services"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Services />
          </Suspense>
        }
      />
      <Route
        path="/destoner"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <DestonerMachine />
          </Suspense>
        }
      />
      <Route
        path="/elevator"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ElevatorMachine />
          </Suspense>
        }
      />
      <Route
        path="/cyclone"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <HorizontalCycloneMachine />
          </Suspense>
        }
      />
      <Route
        path="/fatka"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <FatkaMachinePage />
          </Suspense>
        }
      />
      <Route
        path="/buff"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <BuffPolisherPage />
          </Suspense>
        }
      />
      <Route
        path="/dal"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <DalPolisherPage />
          </Suspense>
        }
      />
      <Route
        path="/conveyor"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ScrewConveyorPage />
          </Suspense>
        }
      />
      <Route
        path="/blower"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <BlowerMachine />
          </Suspense>
        }
      />
      <Route
        path="/rotary"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <RotaryAirlockPage />
          </Suspense>
        }
      />
      <Route
        path="/rill"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <RillMachine />
          </Suspense>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

