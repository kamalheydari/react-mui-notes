import React from "react";
import { Container } from "@material-ui/core";
import Masonry from "react-masonry-css";

import NoteCard from "../components/NoteCard";

import { useGlobalContext } from "../context/context";

const Notes = () => {
  const { notes, handleDelete } = useGlobalContext();

  return (
    <Container>
      <Masonry
        breakpointCols={{ default: 3, 1100: 2, 800: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div item key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
