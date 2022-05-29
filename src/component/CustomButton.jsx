import React from "react";

export default function CustomButton({type, onDelete, id, onArchived}) {
  return (
    <>
      {type === "buat" && (
        <button className="submit-button" type="submit">
          Buat
        </button>
      )}
      {type === "archive" && (
        <button className="button archive" onClick={() => onArchived(id)}>
          Arsipkan
        </button>
      )}
      {type === "delete" && (
        <button className="button delete" onClick={() => onDelete(id)}>
          Delete
        </button>
      )}
      {type === "unarchive" && (
        <button className="button archive" onClick={() => onArchived(id)}>
          Aktifkan
        </button>
      )}
    </>
  );
}
