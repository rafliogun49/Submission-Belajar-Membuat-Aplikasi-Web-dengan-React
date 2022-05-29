import React from "react";
import CardBody from "./CardBody";
import CardButtons from "./CardButtons";

export default function Card({title, body, archived, createdAt, id, onDelete, onArchived}) {
  return (
    <div className="card">
      <CardBody title={title} body={body} createdAt={createdAt} />
      <CardButtons archived={archived} id={id} onDelete={onDelete} onArchived={onArchived} />
    </div>
  );
}
