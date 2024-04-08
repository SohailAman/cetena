import React, { useRef, useEffect } from "react";
import LogoY from "../../assets/img/Compass Logo.mp4";
const Future = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleLoadedMetadata = () => {
      video.controls = false;
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  return (
    <section className="w-full">
      <div className="flex w-full flex-col items-center">
        <div className="relative h-[300px] w-[300px] aspect-w-1 aspect-h-1 lg:w-[400px] lg:h-[400px]">
          {/* <img className="logos-b" src={LogoY} alt="cf-jit" style={{}} /> */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            src={LogoY}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "auto",
              height: "auto",
              minWidth: "100%",
              minHeight: "100%",
              objectFit: "cover",
            }}
          ></video>
        </div>
        <div className="flex mt-[5rem] w-full flex-col no-padi items-center justify-start px-2 sm:px-0">
          <span
            className="   text-16"
            style={{
              color:
                // "#CECECE"
                "#E5E4E2",
            }}
          >
            Chrome
          </span>
          <span className="max-w-[858px] bg-gradient-to-r from-black to-cf-light-2 bg-clip-text text-center font-aeonikMedium text-42 leading-[45px] text-transparent sm:text-6xl sm:leading-[73px]">
            The future generation of decentralized protocols
          </span>
          <span className="mt-6 max-w-[719px] text-center text-cf-light-3">
            {/* */}
            <b className="text-14 text-white sm:text-16 " />
            Be part of the next generation of Web3 ecosystems, open-source and
            community owned. Backed by censorship resistant digital tokens.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Future;
