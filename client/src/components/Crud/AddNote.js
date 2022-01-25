import React, { useContext, useState } from 'react';
import noteContext from '../context/Notes/noteContext';

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ firstname: '', lastname: '', age: '' });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.firstname, note.lastname, note.age);
    setNote({ firstname: '', lastname: '', age: '' });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3">
      <h2>Add Details</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">
            FirstName
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
            aria-describedby="emailHelp"
            value={note.firstname}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            LastName
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            value={note.lastname}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            age
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            name="age"
            value={note.age}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>

        <button
          disabled={note.firstname.length < 5 || note.lastname.length < 5}
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Add Details
        </button>
      </form>
    </div>
  );
};

export default AddNote;
