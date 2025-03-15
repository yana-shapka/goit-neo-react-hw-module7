import React from 'react';
import css from './ConfirmationModal.module.css';

const ConfirmationModal = ({ isVisible, onCancel, onConfirm }) => {
  if (!isVisible) return null;

  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContent}>
        <h2>Are you sure you want to delete this contact?</h2>
        <div>
          <button onClick={onCancel} className={css.cancelButton}>
            Cancel
          </button>
          <button onClick={onConfirm} className={css.confirmButton}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
