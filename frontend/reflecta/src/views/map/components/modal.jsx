import React, { useState, useRef } from "react";
import Content from "./modalContainer";

const ModalCarrousel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Manejar el cierre del modal al presionar la tecla ESC
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  // Agregar y quitar el listener de eventos en el montaje/desmontaje del componente
  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div>
      <button
        className='btn pointer-events-auto relative z-10 bg-slate-950 transition-all3'
        onClick={openModal}
      >
        ⚙️
      </button>

      {isOpen && (
        <dialog ref={modalRef} className='modal bg-black/50' open>
          <div className='modal-box max-h-11/12'>
            <Content />
            <form method='dialog'>
              <div className='modal-action flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-2'>
                  <a className='btn btn-sm btn-outline btn-secondary'>
                    Download view
                  </a>
                  <a className='btn btn-sm btn-outline btn-success'>
                    Metadata
                  </a>
                </div>
                <button className='btn btn-sm btn-primary' onClick={closeModal}>
                  Save
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ModalCarrousel;
