import React from "react";

const Banner = () => {
  // watches for him/her banners

  return (
    <div className="min-w-[320px] max-w-[510px] md:max-w-[800px] lg:max-w-[1140px] mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-4 my-10 md:my-14 lg:my-24">
      <img
        className="w-[100%] md:w-[48%] lg:h-[300px]"
        src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/f1-min.jpg"
        alt=""
      />
      <img
        className="w-[100%] md:w-[48%] lg:h-[300px]"
        src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/f2-min.jpg"
        alt=""
      />
    </div>
  );
};

export default Banner;
