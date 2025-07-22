import React from "react";

type Props = {
  num: number;
};

const EvenOdd: React.FC<Props> = ({ num }) => {
  const isEven = num % 2 === 0;

  return (
    <div
      role="region"
      aria-live="polite"
      className="mt-6 p-4 border border-gray-300 rounded-xl shadow-sm bg-white animate-fade-in"
    >
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Result</h2>
      <p className="text-lg text-gray-700">
        The number{" "}
        <span
          className="font-bold text-gray-900"
          aria-label={`Number is ${num}`}
        >
          {num}
        </span>{" "}
        is{" "}
        <span
          className={`font-bold ${isEven ? "text-green-600" : "text-red-600"}`}
          aria-label={isEven ? "Even" : "Odd"}
        >
          {isEven ? "Even" : "Odd"}
        </span>
        .
      </p>
    </div>
  );
};

export default EvenOdd;
