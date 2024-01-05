import Lottie from "react-lottie";
import React from "react";
import loader from "@/components/finddata.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loader,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const SearchLoader = props => {
  return (
    <div  style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -70%)' }}>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
  );
};
export default SearchLoader;
