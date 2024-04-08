import React from "react";
import LogoToken from "../../assets/img/LOGO TOKEN.png";
import Svg4 from "../../assets/img/4.svg";
import Svg5 from "../../assets/img/5.svg";
import Svg6 from "../../assets/img/6.svg";
const PoweredBy = () => {
  return (
    <section className="manual flex w-full flex-col items-center justify-center ">
      <div className="relative w-full  ">
        <div className="flex w-full items-center justify-center">
          <img
            className="scale-[1.5] logo-la object-center md:transform-none"
            src={LogoToken}
            alt="catena token"
          />
        </div>
        {/* <img class="pointer-events-none absolute left-1/2 top-0 -mt-28 h-[500px] min-w-[100vw] translate-x-[-50%] object-cover object-center md:-mt-5 md:h-auto" src="LOGO TOKEN.png" alt="catena token glow"/> */}
      </div>
      <div className="flex lastwd max-w-[1248px] flex-col items-center justify-center">
        <span className="z-40 mt-14 bg-gradient-to-r from-black to-cf-light-2 bg-clip-text text-center font-aeonikMedium text-42 text-transparent md:mt-0 md:text-6xl">
          Powered by $CHROME
        </span>
        <p className="mt-5 max-w-[590px] text-center text-16 md:text-18">
          $CHROME is designed to secure the protocol with deep liquidity for
          progressive expansion
        </p>
        <div className="my-11 w-full border-t border-t-cf-gray-4 md:mb-20 md:mt-36" />
        <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3">
          <div
            style={{ flexWrap: "wrap" }}
            className="flex items-start justify-start namona"
          >
            <div className="namona2">
              <div>
                <div style={{ display: "flex", marginRight: "0.5rem" }}>
                  <img className="img4" src={Svg4} alt="" />
                </div>
              </div>
              <div className="text-16">
                <div>
                  <span
                    className="font-aeonikMedium"
                    style={{ fontWeight: "bold" }}
                  >
                    True (3,3) Governance
                  </span>
                </div>
                <p className="mt-1 font-aeonikRegular text-cf-light-2">
                  Security and sustained value capture through bonding and
                  staking $CHROME
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ flexWrap: "wrap" }}
            className="flex items-start justify-start namona"
          >
            <div className="namona2">
              <div>
                <div style={{ display: "flex", marginRight: "0.5rem" }}>
                  <img className="img5" src={Svg5} alt="" />
                </div>
              </div>
              <div className="text-16">
                <div>
                  <span
                    className="font-aeonikMedium"
                    style={{ fontWeight: "bold" }}
                  >
                    Execution Terminal Access
                  </span>
                </div>
                <p className="mt-1 font-aeonikRegular text-cf-light-2">
                  Unlock access to institutional level execution by staking
                  $CHROME
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ flexWrap: "wrap" }}
            className="flex items-start justify-start namona"
          >
            <div className="namona2">
              <div>
                <div style={{ display: "flex", marginRight: "0.5rem" }}>
                  <img className="img6" src={Svg6} alt="" />
                </div>
              </div>
              <div className="text-16  ">
                <div>
                  <span
                    className="font-aeonikMedium"
                    style={{ fontWeight: "bold" }}
                  >
                    Whitelist Participation
                  </span>
                </div>
                <p className="mt-1 font-aeonikRegular text-cf-light-2">
                  Participate in the next evolution of decentralised protocols
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoweredBy;
