import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [single , setSingle] = useState (false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

const handleZoom = () => {
    setSingle(true);
}


  return (
    <div>
    
      <form className="create-note">
       
     {single &&  (<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> )}
            
      <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={single ? "3" : "1"}
          onClick={handleZoom} 
        />   
     
       

        <Zoom in={single ? true : false}>
        <Fab onClick={submitNote} color="warning"><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
