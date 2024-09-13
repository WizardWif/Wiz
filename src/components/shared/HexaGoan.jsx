// import React from 'react'

// eslint-disable-next-line react/prop-types
export default function HexaGoan({ customCss, children }) {
  return (
    <div className={`relative main-hexagon ${customCss}`}>
      <div className={`hexagon-parent w-full shadow-2xl  `}>
        <div className="hexagon-children ">{children}</div>
      </div>
      <div className="shadow"></div>
    </div>
  );
}
