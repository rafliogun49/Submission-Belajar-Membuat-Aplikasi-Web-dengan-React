import React from "react";

export default function InputTitle({value, change}) {
  let residualChar = 50 - value.length;
  return (
    <div>
      <label style={{display: "block", fontSize: "12px", float: "right"}}>
        Sisa karakter:{" "}
        {residualChar < 0 ? (
          <span style={{color: "red"}}>{residualChar}</span>
        ) : (
          <span>{residualChar}</span>
        )}
      </label>
      <input
        type="text"
        name="title"
        className="input-title"
        placeholder="Masukkan judul"
        value={value}
        onChange={change}
      />
    </div>
  );
}
