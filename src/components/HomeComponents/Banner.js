import React, { useRef, useEffect } from "react";
import LogoBanner from "../../assets/img/LOGO C.png";

const Banner = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/ghost/signup-form@~0.1/umd/signup-form.min.js";
    script.async = true;
    script.dataset.buttonColor = "#d4d4d4";
    script.dataset.labels = ["email"];
    script.dataset.icon = "hello";
    // script.dataset.backgroundColor = "#00ff00";
    // script.dataset.labels = ["hello"];
    // script.dataset.buttonTextColor = "#FFFFFF";
    script.dataset.buttonTextColor = "#5f5f5f";
    script.dataset.site = "https://blog.catena.tools/";
    // console.log(script);

    formRef.current.insertBefore(script, formRef.current.firstChild);

    // script.addEventListener("load", () => {
    //   const button = document.querySelector(".gh-signup-root");
    //   console.log(button.childNodes);
    //   // if (button) {
    //   //   button.innerText = "Your New Text";
    //   // }
    // });

    return () => {
      formRef?.current?.removeChild(script);
    };
  }, []);

  return (
    <section
      className="  flex flex-col items-center h-1/5 sm:h-1/2 md:h-1/3 lg:h-1/4 xl:h-1/5"
      id="banner-section"
      style={{
        marginTop: "-40px",
        marginBottom: "20px",
      }}
    >
      <div className="flex main-banners max-w-[350px] flex-col items-center space-y-8 text-center md:max-w-[884px] h-full">
        <div className="h-[200px] md:h-[350px] w-auto flex items-center justify-center mb-4">
          <img
            className="animate-fade-in h-[100%] w-auto max-w-full max-h-full"
            src={LogoBanner}
            alt=""
            loading="lazy"
          />
        </div>
        <div
          className="font-aeonikMedium txt-banner text-[40px] leading-[47px] md:leading-[73px] lg:text-[64px] animate-move-down"
          style={{
            background:
              "linear-gradient(91.69deg,#ffffff 50.28%,rgba(255, 255, 255, 0.62) 90.44%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            transform: "translateY(-35px) translateZ(0)",
            color: "black",
          }}
        >
          The ultimate on-chain DeFi analytics nexus{" "}
        </div>
        <div
          className="max-w-[487px]"
          style={{ transform: "translateY(-15px) translateZ(0)" }}
        >
          <span className="animate-move-down-2">
            Catena provides visual analytics, live liquidity &amp; swap position
            tracking and an execution terminal for DEX participants. <br />
          </span>
          <br />
          <div ref={formRef} className="w-full text-[14px] animate-move-up">
            {/* <div
              className="h-[38px] w-full overflow-hidden md:h-auto md:w-[500px] pl-3 border-spacing-1 rounded-md text-cf-light-2 border-cf-gray-4 bg-cf-gray-2 flex justify-start items-center border hover:border-cf-gray-5 hover:ease-out duration-300 focus-within:bg-cf-gray-3 focus-within:border-cf-gray-5 focus-within:text-white border-cf-gray-4"
              style={{
                border: "1px solid #dadada",
                backgroundColor: "#eeeeee",
              }}
            >
              <input
                type="text"
                className="
                rounded-xl
                text-cf-light-3
                flex-1
                appearance-none
                w-full
                py-2
                pl-2.5
                pr-2.5
                bg-transparent
                placeholder-cf-light-1
                shadow-sm
                focus:text-cf-light-3
                focus:outline-none
                focus:border-transparent
                h-12
                pointer-events-auto h-[44px] border-none bg-none"
                placeholder="Enter your email"
                defaultValue
                style={{ color: "black" }}
              />
              <button
                className="flex h-[44px] w-12 items-center justify-center rounded-r-md duration-300 ease-out hover:text-white"
                type="submit"
                style={{ backgroundColor: "#d4d4d4" }}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-cf-light-2 duration-300 hover:text-white hover:ease-out"
                >
                  <path
                    d="M13.75 6.75L19.25 12L13.75 17.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12H4.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div> */}
            <br />
            Keep up to date with our progress
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
