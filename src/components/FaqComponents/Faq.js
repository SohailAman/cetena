import React, { useEffect } from "react";
import "./Faq.css";
const Faqs = () => {
  useEffect(() => {
    var faq = document.getElementsByClassName("faq-page");
    var i;
    for (i = 0; i < faq.length; i++) {
      faq[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
          body.style.display = "none";
        } else {
          body.style.display = "block";
        }
      });
    }
  });
  return (
    <main className="mainfaq">
      <div className="  faq-main">
        <h1 style={{ marginTop: "100px" }} className="faq-heading">
          FAQ
        </h1>
      </div>
      <section className="faq-container">
        <div className="faq-one faqmain">
          <div className="circle-plus" />
          {/* faq question */}
          <h1 className="faq-page">What is Catena Tools?</h1>
          {/* faq answer */}
          <div className="faq-body" style={{ display: "none" }}>
            <p>
              Catena Tools is a on-chain swap-by-swap analytics platform for
              users of decentralized exchanges on EVM compatible networks
            </p>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="faq-two faqmain">
          {/* faq question */}
          <h1 className="faq-page">What are EVM compatible networks?</h1>
          {/* faq answer */}
          <div className="faq-body">
            <p>
              EVM stands for Ethereum Virtual Machine the computation engine
              that Ethereum blockchain operates on, other EVM networks are BSC,
              Polygon, Avalanche.
            </p>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="faq-three faqmain">
          {/* faq question */}
          <h1 className="faq-page">What is a DEX?</h1>
          {/* faq answer */}
          <div className="faq-body">
            <p>
              DEX stands for decentralized exchange, a protocol that allows peer
              to peer swapping of tokens on-chain non custodially.{" "}
            </p>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="faq-three faqmain">
          {/* faq question */}
          <h1 className="faq-page">Who benefits from using Catena Tools?</h1>
          {/* faq answer */}
          <div className="faq-body">
            <p>
              Anyone who has ever swapped tokens and is holding, trading or
              has/had liquidity positions. Can benefit from using Catena Tools.
              Institutions to average users.{" "}
            </p>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="faq-three faqmain">
          {/* faq question */}
          <h1 className="faq-page">What are liquidity positions?</h1>
          {/* faq answer */}
          <div className="faq-body">
            <p>
              Liquidity positions or LPs are a type of trade that involve
              providing tokens to a DEX liquidity pool to generate profit from
              users swaps.{" "}
            </p>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="faq-three faqmain">
          {/* faq question */}
          <h1 className="faq-page">How do I use Catena Tools?</h1>
          {/* faq answer */}
          <div className="faq-body">
            <p>
              Navigate your browser to the Enter App button on the top right
              corner of the page to get started.{" "}
            </p>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="faq-three faqmain">
          {/* faq question */}
          <h1 className="faq-page">Is Catena Tools free to use?</h1>
          {/* faq answer */}
          <div className="faq-body">
            <p>
              Catena Tools is and will always be free to use, as a community
              owned non-profit. Services are hosted and maintained by the Catena
              Tools community and Deu Labs. Some features such as the Execution
              Terminal are available for members who stake $CHROME{" "}
            </p>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="faq-three faqmain">
          {/* faq question */}
          <h1 className="faq-page">Is there a token?</h1>
          {/* faq answer */}
          <div className="faq-body">
            <p>
              Catena Tools, part of Protocol Y ecosystem, is powered by $CHROME;
              an asset backed Staking/Bonding tokonomy engineered to be deeply
              liquid for bootstrapping the protocol.
            </p>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="faq-three faqmain">
          {/* faq question */}
          <h1 className="faq-page">What is Protocol Y?</h1>
          {/* faq answer */}
          <div className="faq-body">
            <p>
              Protocol Y is the next generation of decentralised protocols,
              powered by $CHROME.{" "}
            </p>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="faq-three faqmain">
          {/* faq question */}
          <h1 className="faq-page">What is Staking/Bonding?</h1>
          {/* faq answer */}
          <div className="faq-body ">
            <p>
              Staking is depositing tokens in a smart contract for yield.
              Bonding is the process of buying discount tokens from a protocol
              with a vesting period, thus contributing generative liquidity so
              the protocol can share profits with participants.
            </p>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="faq-three faqmain">
          {/* faq question */}
          <h1 className="faq-page">What is (3,3)?</h1>
          {/* faq answer */}
          <div className="faq-body">
            <p>
              The (3, 3) represents the game theory strategy of pure staking,
              which is the most beneficial action for Protocol Y. The (3, 3)
              strategy indicates a strong emphasis on staking, making it highly
              favored within the community.{" "}
            </p>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="faq-three faqmain">
          {/* faq question */}
          <h1 className="faq-page">How can I be a part of governance? </h1>
          {/* faq answer */}
          <div className="faq-body">
            <p>
              You can join in on governance by creating and voting on proposals
              for the platform with $CHROME.
            </p>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="faq-three faqmain">
          {/* faq question */}
          <h1 className="faq-page">Is this a DAO?</h1>
          {/* faq answer */}
          <div className="faq-body">
            <p>Catena Tools is an analytics layer. </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faqs;
