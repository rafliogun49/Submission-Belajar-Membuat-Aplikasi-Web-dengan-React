import React from "react";

export default function TitleDivider({children}) {
  return (
    <div className="title-divider">
      <h2>{children}</h2>
      <hr style={{borderTop: "1px solid #cecac3", margin: "0.5rem 0 1.5rem"}} />
    </div>
  );
}
