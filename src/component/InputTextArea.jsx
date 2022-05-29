import React from "react";

export default function InputTextArea({value, change}) {
  return (
    <textarea
      name="body"
      rows="4"
      placeholder="Masukkan catatan"
      value={value}
      onChange={change}
    ></textarea>
  );
}
