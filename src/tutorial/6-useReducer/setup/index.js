import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";

// reducer function
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};
const Index = () => {
  const [name, setName] = useState("");
  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);
  const [state, dispath] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      // setShowModal(true);
      // setPeople([...people, { id: new Date().getTime().toString(), name }]);
      // setName("");
      const newItem = { id: new Date().getTime().toString(), name };
      dispath({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      // setShowModal(true);
      dispath({ type: "NO_VALUE" });
    }
  };
  const closeModal = () => {
    dispath({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      {/* {showModal && <Modal />} */}
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispath({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
