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
          <Modal.CloseButton></Modal.CloseButton>
          <h1>This is Modal</h1>
        </Modal>
      </div>
    </div>
  );
};

export default Blog;
