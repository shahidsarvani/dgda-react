import React, { useState, useEffect } from "react";
import "./css/PopupModal.css";

const PopupModal = ({ isOpen, onClose }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIframeLoaded(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {!iframeLoaded && <div className="loading-spinner">Loading...</div>}
        <iframe
          src="http://localhost/dgda-html/index.html"
          width="2736"
          height="1824"
          title="Presentation"
          style={{ display: iframeLoaded ? "block" : "none" }} // Hide iframe until fully loaded
          onLoad={() => setIframeLoaded(true)}
        />
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupModal;
