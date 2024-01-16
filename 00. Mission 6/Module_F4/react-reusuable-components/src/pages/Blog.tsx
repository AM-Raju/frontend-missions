import React, { useState } from "react";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";

const Blog = () => {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <Button
          className="w-2/12"
          onClick={() => {
            setModal((prev) => !prev);
          }}
        >
          Open Modal
        </Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          {/* <Modal.CloseButton onClose={handleModalClose}></Modal.CloseButton> */}
          <Modal.Header>
            <h3>This is modal header</h3>
            <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>
          <h1>This is Modal</h1>
        </Modal>
      </div>
    </div>
  );
};

export default Blog;
