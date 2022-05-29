import React from "react";
import CardsList from "./CardsList";
import TitleDivider from "./TitleDivider";

export default function NotesCategory({type, notes, onDelete, onArchived}) {
  if (type === "archive") {
    const filterArchive = notes.filter((note) => note.archived === true);
    return (
      <div>
        <TitleDivider>Catatan Arsip</TitleDivider>
        <div className="flex" style={{gap: "16px"}}>
          <CardsList notes={filterArchive} onDelete={onDelete} onArchived={onArchived} />
        </div>
      </div>
    );
  } else {
    const filterActive = notes.filter((note) => note.archived === false);
    return (
      <div>
        <TitleDivider>Catatan Aktif</TitleDivider>
        <div className="flex" style={{gap: "16px"}}>
          <CardsList notes={filterActive} onDelete={onDelete} onArchived={onArchived} />
        </div>
      </div>
    );
  }
}
