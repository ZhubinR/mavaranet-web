"use client";
import Image from "next/image";
import { useState } from "react";

const Accordion = ({ item }) => {
  const [showAll, setShowAll] = useState(false);
  const [showMoreText, setShowMoreText] = useState("مشاهده بیشتر");
  const [showLessText, setShowLessText] = useState("مشاهده کمتر");
  const [isActive, setIsActive] = useState(false);

  const handleShowMore = () => {
    setShowAll(true);
    setShowMoreText("مشاهده کمتر");
    setIsActive(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
    setShowMoreText("مشاهده بیشتر");
    setIsActive(false);
  };

  return (
    <div
      className={
        item.list && item.list.length > 0
          ? `accordion ${isActive ? "active" : ""}`
          : "accordion d-none"
      }
    >
      <ul>
        {item.list &&
          item.list.map((bullet, index) => (
            <li key={index}>{bullet.list_item}</li>
          ))}
      </ul>

      <div
        className="show-more-button"
        onClick={showAll ? handleShowLess : handleShowMore}
      >
        <div className="text">{showAll ? showLessText : showMoreText}</div>
        <Image
          src={"/images/arrowDown.svg"}
          width={24}
          height={24}
          alt="arrow down"
        />
      </div>
    </div>
  );
};

export default Accordion;
