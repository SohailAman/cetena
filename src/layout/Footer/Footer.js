import React, { useEffect, useRef } from "react";
import "./Footer.css";
import wordLogo from "../../assets/img/word_logo.png";
import { Link } from "react-router-dom";
import { getNewsletter } from "./Newsletter";

const Footer = () => {
  // const [state, setstate] = useState(false);
  // const [email, setEmail] = useState("");
  const formRef = useRef(null);

  let NewsLetter = async () => {
    const posts = await getNewsletter();
    console.log("posts: ", posts);

    if (!posts) {
      return {
        notFound: true,
      };
    }

    return {
      props: { posts },
    };
  };
  useEffect(() => {
    NewsLetter();
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/ghost/signup-form@~0.1/umd/signup-form.min.js";
    script.async = true;
    script.dataset.buttonColor = "#d4d4d4";
    // script.dataset.backgroundColor = "#00ff00";
    // script.dataset.labels = ["hello"];
    script.dataset.buttonTextColor = "#FFFFFF";
    script.dataset.buttonTextColor = "#5f5f5f";
    script.dataset.site = "https://blog.catena.tools/";

    formRef.current.appendChild(script);

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

  // useEffect(() => {
  //   let sizer = document.getElementById("sizer");
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://cdn.jsdelivr.net/ghost/signup-form@~0.1/umd/signup-form.min.js";
  //   script.async = true;
  //   script.setAttribute("data-site", "https://blog.catena.tools/");
  //   sizer.appendChild(script);
  //   return () => {
  //     sizer.removeChild(script);
  //   }
  // }, [state]);

  let handleSubmit = () => {
    // let sizer = document.getElementById("sizer");
    // const script = document.createElement("script");
    // console.log(sizer, script);
    // script.src =
    //   "https://cdn.jsdelivr.net/ghost/signup-form@~0.1/umd/signup-form.min.js";
    // script.async = true;
    // script.setAttribute("data-site", "https://blog.catena.tools/");
    // // sizer.appendChild(script);
    // return () => {
    //   sizer.removeChild(script);
    // };
    // Create a script element
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/ghost/signup-form@~0.1/umd/signup-form.min.js";
    script.async = true;

    // Set data attributes for customization
    script.setAttribute("data-button-color", "#000000");
    script.setAttribute("data-button-text-color", "#FFFFFF");
    script.setAttribute("data-site", "https://blog.catena.tools/");

    // Append the script to the document body
    document.body.appendChild(script);
  };

  return (
    <>
      <footer className="flex min-h-[24rem] w-full justify-center py-4 md:border-t md:py-[5rem]">
        <div className="flex w-full max-w-6xl flex-wrap justify-between space-y-8 px-4 md:flex-nowrap md:space-x-8 md:space-y-0 flex-col md:flex-row">
          <div className="flex w-full flex-1 flex-col justify-between">
            <Link to="/">
              <img
                alt="Catena"
                loading="lazy"
                width={180}
                height={30}
                decoding="async"
                data-nimg={1}
                style={{ color: "transparent", width: "180px" }}
                src={wordLogo}
              />
            </Link>
            <div className="flex flex-col space-y-7">
              <div className="flex flex-col space-y-2 y-43">
                <span
                  className=" text-[24px] font-bold md:text-[32px]"
                  style={{ color: "black" }}
                >
                  Sign up for our newsletter
                </span>
                <span className="text-16 text-cf-light-2">
                  Stay tuned with the latest updates.
                </span>
              </div>
              <div ref={formRef} className="w-full md:w-[75%] text-[14px]">
                {/* <div
                  className="h-[38px] w-full overflow-hidden md:h-auto md:w-[544px] pl-3 border-spacing-1 rounded-md text-cf-light-2 border-cf-gray-4 bg-cf-gray-2 flex justify-start items-center border hover:border-cf-gray-5 hover:ease-out duration-300 focus-within:bg-cf-gray-3 focus-within:border-cf-gray-5 focus-within:text-white border-cf-gray-4"
                  style={
                    {
                      // border: "1px solid #dadada",
                      // backgroundColor: "#eeeeee",
                    }
                  }
                > */}
                {/* <div id="sizer" style={{ height: "200px" }}></div> */}
                {/* <input
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
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
                    style={{ color: "black" }}
                  />

                  <button
                    className="flex h-[44px] w-12 items-center justify-center rounded-r-md duration-300 ease-out hover:text-white"
                    type="submit"
                    style={{ backgroundColor: "#d4d4d4" }}
                    onClick={handleSubmit}
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
                  </button> */}
                {/* </div> */}
                <div className="absolute mt-2 flex max-w-[320px] items-center transition duration-300 xl:max-w-none opacity-0">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="min-w-[24px]"
                  >
                    <path
                      d="M6 13.0588L9.17647 16.5882L18 7.41177"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="ml-1" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex pt-6 md:space-x-8 mnoi">
            <div className="flex flex-col space-y-6 px-4 text-16">
              <span className="text-cf-light-1">Resources</span>
              <ul className="flex flex-col space-y-3 text-cf-light-3">
                <li className="flex-center space-x-2">
                  <Link
                    className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white whitespace-nowrap"
                    to="/roadmap"
                  >
                    Roadmap
                  </Link>
                </li>
                <li className="flex-center space-x-2">
                  <Link
                    className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white whitespace-nowrap"
                    to="/faq"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="flex-center space-x-2">
                  <Link
                    rel="noopener noreferrer"
                    className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white whitespace-nowrap"
                    to="#"
                  >
                    Blog
                  </Link>
                </li>
                <li className="flex-center space-x-2">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white whitespace-nowrap"
                    href="../../assets/whitepaper.pdf"
                  >
                    Whitepaper
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-6 px-4 text-16">
              <span className="text-cf-light-1">Socials</span>
              <ul className="flex flex-col space-y-3 text-cf-light-3">
                <li className="flex-center space-x-2">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white whitespace-nowrap"
                    href="https://twitter.com/catenatoolsdefi"
                  >
                    Twitter
                  </a>
                </li>
                <li className="flex-center space-x-2">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white whitespace-nowrap"
                    href="https://discord.gg/"
                  >
                    Discord
                  </a>
                </li>
                <li className="flex-center space-x-2">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white whitespace-nowrap"
                    href="https://t.me/catenatools"
                  >
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* {setTimeout(() => { */}
      {/* <div id="sizer" style={{ height: "100vh" }}></div> */}

      {/* }, 2000)} */}
    </>
  );
};

export default Footer;
