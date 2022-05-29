import React from "react";
import Card from "./Card";

export default function CardsList({notes, onDelete, onArchived}) {
  const card = notes.map((note) => {
    return (
      <Card {...note} key={note.id} id={note.id} onDelete={onDelete} onArchived={onArchived} />
    );
  });
  return (
    <section className="flex cards-container">
      {notes.length !== 0 ? card : <h4>Tidak ada catatan</h4>}
    </section>
  );
}
