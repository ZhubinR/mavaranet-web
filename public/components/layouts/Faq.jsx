"use client";
import { useState } from "react";
import Image from "next/image";

const Faq = ({ answer, question }) => {
  const [isActive, setIsActive] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(true);
    setIsActive(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
    setIsActive(false);
  };

  return (
    <div className={`faq ${isActive ? "active" : ""}`}>
      <div className="head" onClick={showAll ? handleShowLess : handleShowMore}>
        <p className="question">{question}</p>
        <div className="pe-2 icon">
          <Image
            src={`/images/arrow.svg`}
            width={24}
            height={24}
            alt="arrow down"
          />
        </div>
      </div>
      <div className="body">
        {answer}
      </div>
    </div>
  );
};

export default Faq;
