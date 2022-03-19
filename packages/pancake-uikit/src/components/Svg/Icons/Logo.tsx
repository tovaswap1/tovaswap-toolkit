import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 198 199" {...props}>
    <defs>
      <image  width="190" height="138" id="img1" href="data:image/png;base64,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"/>
    </defs>
    <use id="Capa 1" href="#img1" x="0" y="30" />
    </Svg>
  );
};

export default Icon;