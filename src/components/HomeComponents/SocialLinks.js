import React from "react";

const SocialLinks = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center socials mt-[2rem]!important">
      <div className="relative flex w-full flex-col items-center justify-center">
        {/* <img class="absolute left-1/2 top-0 z-[-1] h-full min-w-[100vw] translate-x-[-50%] object-cover object-center" alt="cf-stars-bg" src="images/home/stars-bg.png" />
            <img class="absolute left-1/2 top-0 z-[-1] h-full min-w-[100vw] translate-x-[-50%] scale-[1.3] md:ml-0 md:scale-[1.2]" alt="cf-light-bg" src="images/home/light-bg.png" />
            <span class="mt-64 max-w-[650px] bg-gradient-to-r from-white to-cf-light-2 bg-clip-text px-1 pb-1 text-center font-aeonikMedium text-42 leading-[46px] text-transparent md:text-6xl md:leading-[73px]"> */}
        {/* */}
        <span />
      </div>
      <span className="text-31 pb-6">Stay connected</span>
      <div className="grid grid-cols-1 gap-5 px-2 md:grid-cols-2">
        <div className="card">
          <div className="h-22 pointer-events-none col-span-1 max-w-md rounded-md border border-cf-gray-4 bg-cf-gray-1 text-cf-light-3 duration-300 ease-in hover:text-white relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:rounded-md before:bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.06),transparent_40%)] inner">
            <a
              rel="noreferrer"
              target="_blank"
              className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white pointer-events-auto flex h-full w-fit flex-col items-center justify-start px-5 py-4"
              href="https://discord.gg/brap"
            >
              <div className="flex w-full items-center justify-start">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#5865F2"
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
                <span className="ml-2 mr-1">Discord</span>
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-rotate-45"
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
              </div>
              <p className="mt-2">
                Step into our Discord community, pose questions or simply mingle
                with us.
              </p>
            </a>
            <div className="blob" style={{ opacity: 1 }} />
            <div className="fakeblob" />
          </div>
        </div>
        <div className="card">
          <div className="h-22 pointer-events-none col-span-1 max-w-md rounded-md border border-cf-gray-4 bg-cf-gray-1 text-cf-light-3 duration-300 ease-in hover:text-white relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:rounded-md before:bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.06),transparent_40%)] inner">
            <a
              rel="noreferrer"
              target="_blank"
              className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white pointer-events-auto flex h-full w-fit flex-col items-center justify-start px-5 py-4"
              href="https://t.me/catenatools"
            >
              <div className="flex w-full items-center justify-start">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-cf-blue-2"
                >
                  <path
                    d="M10.4951 13.6348L12.8701 11.7598M10.4951 13.6348L15.6201 19.2598L19.8701 4.75977L5.37012 10.0098L10.4951 13.6348Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-2 mr-1">Telegram</span>
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-rotate-45"
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
              </div>
              <p className="mt-2">
                Join our Telegram community to remain in the loop and be the
                first to know about new releases.
              </p>
            </a>
            <div className="blob" style={{ opacity: 1 }} />
            <div className="fakeblob" />
          </div>
        </div>
        <div className="card">
          <div className="h-22 pointer-events-none col-span-1 max-w-md rounded-md border border-cf-gray-4 bg-cf-gray-1 text-cf-light-3 duration-300 ease-in hover:text-white relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:rounded-md before:bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.06),transparent_40%)] inner">
            <a
              rel="noreferrer"
              target="_blank"
              className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white pointer-events-auto flex h-full w-fit flex-col items-center justify-start px-5 py-4"
              href="https://twitter.com/catenatoolsdefi"
            >
              <div className="flex w-full items-center justify-start">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-cf-blue-1"
                >
                  <path
                    d="M9.93012 18.2598C15.402 18.2598 18.3945 13.4501 18.3945 9.2797C18.3945 9.04658 18.5597 8.83991 18.7721 8.74374C19.5004 8.41389 20.445 7.50919 19.4695 5.98804C18.8232 6.33552 18.292 6.52538 17.5804 6.75424C16.4541 5.48369 14.5696 5.42245 13.3715 6.61737C12.5986 7.38795 12.2711 8.53662 12.5108 9.6328C10.1186 9.50594 7.318 7.74542 5.80762 5.77367C5.01826 7.21608 5.42119 9.06097 6.72834 9.98778C6.25473 9.97278 5.79172 9.83717 5.37819 9.59281V9.6328C5.37819 11.1353 6.37666 12.4289 7.76452 12.7264C7.32684 12.8533 6.86736 12.872 6.42143 12.7808C6.8114 14.0663 8.49986 15.5087 9.77284 15.5343C8.71899 16.4124 7.41773 16.8893 6.07818 16.888C5.84138 16.8874 5.60516 16.8724 5.37012 16.8424C6.73088 17.7686 8.31371 18.2598 9.93012 18.2573V18.2598Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-2 mr-1">Twitter</span>
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-rotate-45"
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
              </div>
              <p className="mt-2">
                Stay updated with our ecosystem by following us on Twitter.
              </p>
            </a>
            <div className="blob" style={{ opacity: 1 }} />
            <div className="fakeblob" />
          </div>
        </div>
        <div className="card">
          <div className="h-22 pointer-events-none col-span-1 max-w-md rounded-md border border-cf-gray-4 bg-cf-gray-1 text-cf-light-3 duration-300 ease-in hover:text-white relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:rounded-md before:bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.06),transparent_40%)] inner">
            <a
              rel="noreferrer"
              target="_blank"
              className="decoration-1 underline-offset-[2px] transition duration-300 text-cf-light-3 hover:text-white pointer-events-auto flex h-full w-fit flex-col items-center justify-start px-5 py-4"
              href="https://seeij/"
            >
              <div className="flex w-full items-center justify-start">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-cf-blue-4"
                >
                  <path
                    d="M19.25 5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H14C12.8954 4.75 12 5.64543 12 6.75V19.25L12.8284 18.4216C13.5786 17.6714 14.596 17.25 15.6569 17.25H18.25C18.8023 17.25 19.25 16.8023 19.25 16.25V5.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.75 5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H10C11.1046 4.75 12 5.64543 12 6.75V19.25L11.1716 18.4216C10.4214 17.6714 9.40401 17.25 8.34315 17.25H5.75C5.19772 17.25 4.75 16.8023 4.75 16.25V5.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-2 mr-1">Blog</span>
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-rotate-45"
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
              </div>
              <p className="mt-2">
                Seeking the latest in development and community updates? Explore
                our blog.
              </p>
            </a>
            <div className="blob" style={{ opacity: 1 }} />
            <div className="fakeblob" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
