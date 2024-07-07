import { useEffect, useRef } from "react";

function Popup({ title, para, buttons, open, onClose }) {
  const ref = useRef();
  useEffect(() => {
    if (open) ref.current.showModal();
    else ref.current.close();
  }, [open]);

  return (
    <dialog className="popup" ref={ref}>
      <div className="container">
      <h3 className="title">{title}</h3>
      <p className="paragraph">{para}</p>
      <button onClick={() => onClose()}>Ok</button>
      </div>
    </dialog>
  );
}

export default Popup;
