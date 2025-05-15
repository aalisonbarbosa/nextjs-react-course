import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

export default function Todo({ title }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      {modalIsOpen && (
        <>
          <Modal onCancel={closeModalHandler} />
          <Backdrop onCancel={closeModalHandler} />
        </>
      )}
    </>
  );
}
