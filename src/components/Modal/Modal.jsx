import clsx from "clsx";
import "./Modal.scss";
import { useCallback } from "react";

export default function Modal({
  isOpen,
  setIsOpen,
  shouldCloseOnOverlayClick = false,
  classes,
  children,
}) {
  const closeOnOverlayClick = useCallback(() => {
    shouldCloseOnOverlayClick ? setIsOpen(!isOpen) : () => {};
  }, [shouldCloseOnOverlayClick, isOpen, setIsOpen]);

  return (
    <div className={clsx("modal", isOpen && "--open", `${classes}`)}>
      <div className="modal__overlay" onClick={closeOnOverlayClick}>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
}
