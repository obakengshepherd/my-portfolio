// src/components/ImageModal.js
import React from "react";

const ImageModal = ({ isOpen, imageUrl, altText, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="image-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-label={`Full size view of ${altText}`}
    >
      <div className="image-modal-content">
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close image"
        >
          ×
        </button>
        <img
          src={imageUrl}
          alt={altText}
          className="modal-image"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default ImageModal;
