"use client";

import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const PageRender = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);

    // if (navigator.geolocation) {
    //   // navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     console.log("position.coords", position);

    //     const latitude = position.coords.latitude;
    //     const longitude = position.coords.longitude;

    //     fetch(
    //       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBpWLsrD7X4jXWj2f1OFAKWzOMepuHzVYQ`,
    //       {
    //         cache: "no-cache"
    //       }
    //     )
    //       .then((res) => res.json())
    //       .then((response) => {
    //         console.log("response", response);
    //       });
    //   });
    // } else {
    //   console.log("Geolocation is not supported by this browser.");
    // }
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="page-loader">
          <h2>Loading ...</h2>
        </div>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}

      <ToastContainer />
    </>
  );
};

export default PageRender;
