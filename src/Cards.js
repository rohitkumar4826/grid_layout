import React from "react";

const cardItems = [
  "ONE", "TWO", "THREE", "FOUR",
  "FIVE", "SIX", "SEVEN", "EIGHT",
  "NINE", "TEN", "ELEVEN", "TWELVE"
];

const Cards = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {cardItems.map((item, index) => (
        <div
          key={index}
          className="bg-blue-500 text-white p-4 h-16 flex items-center justify-center text-lg font-semibold rounded-md shadow"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Cards;
