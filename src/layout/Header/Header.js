import React, { useState } from "react";
import WordLogo from "../../assets/img/word_logo.png";
import { Link } from "react-router-dom";
import Whitepaper from "../../assets/whitepaper.pdf";
import "./Header.css";
const Header = () => {
  const [Nav, setNav] = useState(false);
  let toggleNav = () => {
    if (Nav === false) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  return (
    <div>
      <div className="top-bar"></div>
      <div
        className="addbloa backdrop-filter-blur fixed top-0 py-[20px] z-50 h-[53px] w-full border-b text-[14px] md:h-[87px]"
        style={{
          backgroundColor: "white",
          borderColor: "rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className=" flex h-full w-full items-center justify-between px-[20px] md:hidden">
          <Link
            className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white"
            to="/"
          >
            <img className="mbl-logo" src={WordLogo} alt="Catena logo" />
          </Link>
          <div className="hamburger-small-screen">
            <button disabled className="cta small-cta">
              Enter App
            </button>
            <button
              onClick={toggleNav}
              className="relative text-white outline-none"
              type="button"
            >
              {Nav ? (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cross-sign "
                >
                  <path
                    d="M17.25 6.75L6.75 17.25"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.75 6.75L17.25 17.25"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="nav-sign"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 18L20 18"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 12L20 12"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 6L20 6"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              )}
              {/* <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke="#000000"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="#000000"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#000000"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg> */}
              {/* <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -translate-x-[100%] -translate-y-1/2 transition  "
          >
            <path
              d="M17.25 6.75L6.75 17.25"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.75 6.75L17.25 17.25"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}
            </button>
          </div>
        </div>
        {/* <center> */}
        <div
          style={{
            flexDirection: "row",
            justifyContent: "space-between !important",
            maxWidth: "80%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className={
            Nav
              ? "test-kmar lg-full  h-full w-full items-center justify-around md:flex nav"
              : "test-kmar lg-full  h-full w-full vis-hidden items-center justify-around md:flex nav"
          }
        >
          <div className="lg-only">
            <Link
              className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white"
              to="/"
              style={{ paddingTop: "5px" }}
            >
              <img
                className="min-w-[120px]"
                src={WordLogo}
                alt="Catena logo"
                style={{ width: "180px", transform: "translateY(3px)" }}
              />
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            className="test-kmar2 flex items-center space-x-2 mbl-menu"
          >
            <Link to="/" className="main-link">
              <p className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white">
                Home
              </p>
            </Link>
            <Link to="/roadmap" className="main-link">
              <p className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white">
                Roadmap
              </p>
            </Link>
            <Link to="/faq" className="main-link">
              <p className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white">
                FAQ
              </p>
            </Link>
            <Link to="/blog" className="main-link">
              <p className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white">
                Blog
              </p>
            </Link>
            <a
              target="_blank"
              href={Whitepaper}
              className="main-link"
              rel="noreferrer"
            >
              <p className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white">
                Whitepaper
              </p>
            </a>
          </div>
          <div
            style={{}}
            className="flex nav-social items-center [&>img]:stroke-white relative justify-end"
          >
            <div
              style={{ minWidth: "60%", marginRight: "-30%" }}
              className="flex items-center justify-between space-x-2"
            >
              <a
                target="_blank"
                className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white"
                href="https://discord.gg/catena-community"
                rel="noreferrer"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.53466 7.39352L5.55715 14.6271C5.4449 15.4577 5.86255 16.2703 6.60336 16.6625L9.62031 18.2597L10.6203 15.7597C10.6203 15.7597 11.2766 16.2597 12.6203 16.2597C13.9641 16.2597 14.6203 15.7597 14.6203 15.7597L15.6203 18.2597L18.6373 16.6625C19.3781 16.2703 19.7958 15.4577 19.6835 14.6271L18.706 7.39352C18.6538 7.00713 18.3817 6.68632 18.0091 6.57166L15.3703 5.75977V6.25977C15.3703 6.81206 14.9226 7.25977 14.3703 7.25977H10.8703C10.318 7.25977 9.87031 6.81206 9.87031 6.25977V5.75977L7.23158 6.57166C6.85891 6.68632 6.58688 7.00713 6.53466 7.39352Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.1201 12.0098C11.1201 12.2859 10.8962 12.5098 10.6201 12.5098C10.344 12.5098 10.1201 12.2859 10.1201 12.0098C10.1201 11.7337 10.344 11.5098 10.6201 11.5098C10.8962 11.5098 11.1201 11.7337 11.1201 12.0098Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.1201 12.0098C15.1201 12.2859 14.8962 12.5098 14.6201 12.5098C14.344 12.5098 14.1201 12.2859 14.1201 12.0098C14.1201 11.7337 14.344 11.5098 14.6201 11.5098C14.8962 11.5098 15.1201 11.7337 15.1201 12.0098Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                target="_blank"
                className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white"
                href="https://t.me/catenatools"
                rel="noreferrer"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4951 13.6348L12.8701 11.7598M10.4951 13.6348L15.6201 19.2598L19.8701 4.75977L5.37012 10.0098L10.4951 13.6348Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                target="_blank"
                className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white"
                href="https://twitter.com/catena"
                rel="noreferrer"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.93012 18.2598C15.402 18.2598 18.3945 13.4501 18.3945 9.2797C18.3945 9.04658 18.5597 8.83991 18.7721 8.74374C19.5004 8.41389 20.445 7.50919 19.4695 5.98804C18.8232 6.33552 18.292 6.52538 17.5804 6.75424C16.4541 5.48369 14.5696 5.42245 13.3715 6.61737C12.5986 7.38795 12.2711 8.53662 12.5108 9.6328C10.1186 9.50594 7.318 7.74542 5.80762 5.77367C5.01826 7.21608 5.42119 9.06097 6.72834 9.98778C6.25473 9.97278 5.79172 9.83717 5.37819 9.59281V9.6328C5.37819 11.1353 6.37666 12.4289 7.76452 12.7264C7.32684 12.8533 6.86736 12.872 6.42143 12.7808C6.8114 14.0663 8.49986 15.5087 9.77284 15.5343C8.71899 16.4124 7.41773 16.8893 6.07818 16.888C5.84138 16.8874 5.60516 16.8724 5.37012 16.8424C6.73088 17.7686 8.31371 18.2598 9.93012 18.2573V18.2598Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <button disabled className="cta lg-cta">
                Enter App
              </button>
            </div>
          </div>
        </div>
        {/* </center> */}
      </div>
    </div>
  );
};

export default Header;
