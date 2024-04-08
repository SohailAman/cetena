import React, { useState } from "react";
import tokenThree from "../../assets/img/3a.png";
import tokenTwo from "../../assets/img/2.png";
import tokenOne from "../../assets/img/1.png";
import FeatureBridge from "../../assets/img/1.svg";
import FeatureBridge2 from "../../assets/img/2.svg";
import FeatureBridge3 from "../../assets/img/3.svg";
const KeyPOINTS = () => {
  const [mousePosition, setMousePosition] = useState({
    one: { x: 0, y: 0 },
    two: { x: 0, y: 0 },
    three: { x: 0, y: 0 },
  });

  const handleMouseMove = (e) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const id = e.currentTarget.id;
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;
    setMousePosition((prevPositions) => ({
      ...prevPositions,
      [id]: { x: mouseX, y: mouseY },
    }));
  };

  // const glassEffectStyle = {
  //   '--mouse-x': `${mousePosition.x}px`,
  //   '--mouse-y': `${mousePosition.y}px`,
  // };

  return (
    <section className="flex flex-col space-y-4 py-10 mg__sec2">
      <div className="grid cards2 grid-cols-1 gap-[20px] md:grid-cols-3 md:gap-[10px]">
        <div className="card ">
          <div
            className="flex flex-col items-center rounded-[0.75rem] border border-cf-gray-4 py-4 sm:min-h-80"
            style={{
              minHeight: "360px",
              // height: "400px",
              paddingBottom: "20px",
              overflow: "hidden",
              position: "relative",
              "@media (maxWidth: 1199px)": { height: "400px" },
              // background:
              //   "linear-gradient(122.46deg, #090909 3.2%, #111111 98.88%);",
            }}
          >
            <span
              id="one"
              // className="glass-effect"
              onMouseMove={handleMouseMove}
              style={{
                "--mouse-x": `${mousePosition.one.x}px`,
                "--mouse-y": `${mousePosition.one.y}px`,
                content: "''",
                position: "absolute",
                top: 0,
                left: 0,
                // right: 0,
                // bottom: 0,
                borderRadius: "0.75rem",
                width: "100%",
                height: "100%",
                background:
                  "radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsla(0, 0%, 10%, 0.2), transparent 40%)",
                // zIndex: -1,
              }}
            ></span>
            <div
              className="imgcona img3"
              style={{ height: "100%", width: "auto" }}
            >
              <img src={tokenOne} alt="one" />
            </div>

            <div
              style={{ flexWrap: "wrap" }}
              className="flex space-x-2 px-[20px]"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.5rem",
                  minWidth: "100%",
                }}
              >
                <img
                  src={FeatureBridge}
                  alt=""
                  style={{
                    width: "16px",
                    height: "16px",
                    marginTop: "3px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span
                    className="font-aeonikMedium"
                    style={{ fontWeight: "bold" }}
                  >
                    On-chain analytics{" "}
                  </span>
                  <div
                    // style={{ marginLeft: "25px !important" }}
                    className="flex flex-col space-y-1"
                  >
                    <span className="leading-[20px] text-cf-light-2">
                      Performance analytics reveal the time and price where
                      positions yielded the highest profit
                    </span>
                  </div>
                </div>
              </div>

              <div className="blob" style={{ opacity: 1 }} />
              <div className="fakeblob" />
            </div>
          </div>
        </div>

        <div className="card ">
          <div
            className="flex flex-col items-center rounded-[0.75rem] border border-cf-gray-4  "
            style={{
              minHeight: "360px",
              paddingBottom: "20px",
              position: "relative",
              "@media (maxWidth: 1199px)": { height: "400px" },
            }}
          >
            <span
              id="two"
              // className="glass-effect"
              onMouseMove={handleMouseMove}
              style={{
                "--mouse-x": `${mousePosition.two.x}px`,
                "--mouse-y": `${mousePosition.two.y}px`,
                content: "''",
                position: "absolute",
                top: 0,
                left: 0,
                // right: 0,
                // bottom: 0,
                borderRadius: "0.75rem",
                width: "100%",
                height: "100%",
                background:
                  "radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsla(0, 0%, 10%, 0.2), transparent 40%)",
                // zIndex: -1,
              }}
            ></span>
            <div
              className="img-cona img2"
              style={{ height: "100%", width: "auto" }}
            >
              <img src={tokenTwo} alt="" />
            </div>

            <div
              style={{ flexWrap: "wrap", justifySelf: "flex-start" }}
              className="flex space-x-2 px-[20px]"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                  gap: "0.5rem",
                  minWidth: "100%",
                }}
              >
                <img
                  src={FeatureBridge2}
                  alt=""
                  style={{
                    width: "16px",
                    marginTop: "3px",
                    height: "16px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span
                    className="font-aeonikMedium"
                    style={{ fontWeight: "bold" }}
                  >
                    Professional execution terminal
                  </span>
                  <div
                    // style={{ marginLeft: "25px !important" }}
                    className="flex flex-col space-y-1"
                  >
                    <span className="leading-[20px] text-cf-light-2">
                      Connected to major DEXs for fast and cheap swaps
                    </span>
                  </div>
                </div>
              </div>

              <div className="blob" style={{ opacity: 1 }} />
              <div className="fakeblob" />
            </div>
          </div>
        </div>
        <div className="card ">
          <div
            className="flex flex-col items-center rounded-[0.9rem] border border-cf-gray-4  "
            style={{
              minHeight: "350px",
              paddingBottom: "20px",
              position: "relative",
              "@media (maxWidth: 1199px)": { height: "400px" },
            }}
          >
            <span
              id="three"
              // className="glass-effect"
              onMouseMove={handleMouseMove}
              style={{
                "--mouse-x": `${mousePosition.three.x}px`,
                "--mouse-y": `${mousePosition.three.y}px`,
                content: "''",
                position: "absolute",
                top: 0,
                left: 0,
                // right: 0,
                // bottom: 0,
                borderRadius: "0.75rem",
                width: "100%",
                height: "100%",
                background:
                  "radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsla(0, 0%, 10%, 0.2), transparent 40%)",
                // zIndex: -1,
              }}
            ></span>
            <div className="img-cona img1">
              <img className="w-full" src={tokenThree} alt="" />
            </div>

            <div
              style={{ flexWrap: "wrap" }}
              className="flex space-x-2 px-[20px]"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.5rem",
                  minWidth: "100%",
                }}
              >
                <img
                  src={FeatureBridge3}
                  alt=""
                  style={{
                    marginTop: "5px",
                    width: "16px",
                    height: "16px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span
                    className="font-aeonikMedium"
                    style={{ fontWeight: "bold" }}
                  >
                    Open position tracking
                  </span>
                  <div className="flex flex-col space-y-1">
                    <span className="leading-[20px] text-cf-light-2">
                      See swaps and liquidity positions with industry standard
                      live PnL tracking
                    </span>
                  </div>
                </div>
              </div>

              <div className="blob" style={{ opacity: 1 }} />
              <div className="fakeblob" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyPOINTS;
