import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  console.log(isVisible);
  return (
    <div className="border border-black m-3 p-2 ">
      <h1 className="font-bold">{title}</h1>

      {isVisible ? (
        <>
          <button
            className="cursor-pointer underline"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setIsvisibleSection] = useState("");
  return (
    <>
      <h1 className="text-3xl font-bold m-3">Instamart</h1>
      <Section
        title={"About us"}
        description={
          "Global post-pandemic supply chain issues meant that the factory was unable to get to full production capacity during 2022. The first EU and UK V6 manual variants (including some UK dealer demonstrator V6 cars) were delivered to customers in Q4 2022. Plans for 2023 include the first V6 automatic deliveries for the EU and UK in Q1, and US V6 deliveries starting in Q4. i4 variant production for the UK is now planned to start in Q3."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => {
          if (visibleSection === "about") {
            setIsvisibleSection("");
          } else {
            setIsvisibleSection("about");
          }
        }}
      />
      <Section
        title={"Team Members"}
        description={
          "Global post-pandemic supply chain issues meant that the factory was unable to get to full production capacity during 2022. The first EU and UK V6 manual variants (including some UK dealer demonstrator V6 cars) were delivered to customers in Q4 2022. Plans for 2023 include the first V6 automatic deliveries for the EU and UK in Q1, and US V6 deliveries starting in Q4. i4 variant production for the UK is now planned to start in Q3."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => {
          if (visibleSection === "team") {
            setIsvisibleSection("");
          } else {
            setIsvisibleSection("team");
          }
        }}
      />
      <Section
        title={"Careers"}
        description={
          "Global post-pandemic supply chain issues meant that the factory was unable to get to full production capacity during 2022. The first EU and UK V6 manual variants (including some UK dealer demonstrator V6 cars) were delivered to customers in Q4 2022. Plans for 2023 include the first V6 automatic deliveries for the EU and UK in Q1, and US V6 deliveries starting in Q4. i4 variant production for the UK is now planned to start in Q3."
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() => {
          if (visibleSection === "career") {
            setIsvisibleSection("");
          } else {
            setIsvisibleSection("career");
          }
        }}
      />
    </>
  );
};

export default Instamart;
