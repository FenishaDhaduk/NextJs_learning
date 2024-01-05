import Lottie from "react-lottie";
import React from "react";
import loader from "@/components/loader.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loader,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Loader = props => {
  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={props.height ? props.height : 50}
        width={props.width ? props.width : 50}
        style={props.style ? props.style : {}}
      />
    </div>
  );
};
export default Loader;
