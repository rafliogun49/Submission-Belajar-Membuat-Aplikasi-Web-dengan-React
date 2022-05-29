import React from "react";

export default function CardBody({title, createdAt, body}) {
  const showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
  };

  return (
    <div className="flex column card-body">
      <h3>{title}</h3>
      <div>
        <i class="fa-solid fa-calendar" style={{color: "#A1A3A8", marginRight: "4px"}}></i>
        <span style={{color: "#A1A3A8"}}>{showFormattedDate(createdAt)}</span>
      </div>
      <p>{body}</p>
    </div>
  );
}
