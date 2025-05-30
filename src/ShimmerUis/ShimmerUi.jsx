import React from "react";

const ShimmerUi = () => {
  return (
    <div className="py-16 px-4 flex gap-6 flex-wrap">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="relative w-[200px] h-[200px] bg-gray-200 rounded-lg overflow-hidden"
        >
          <div
            className="absolute inset-0 animate-shimmer"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)",
              transform: "translateX(-100%)",
              animation: "shimmer 1.5s infinite",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUi;
