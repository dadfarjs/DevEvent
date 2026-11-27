"use client";
import Image from "next/image";

const ExploreBtn = () => {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto"
      onClick={() => console.log("Explore button clicked!")}
    >
      <a href="#events">
        Explore Events
        <Image
          src="/icons/arrow-down.svg"
          alt="Arrow Down Icon"
          width={20}
          height={20}
          className="inline-block ml-2 w-auto h-auto"
        />
      </a>
    </button>
  );
};

export default ExploreBtn;
