import React from 'react';
import PropTypes from 'prop-types';
import './ConfirmationModal.css';

const ConfirmationModal = ({ message, onConfirm, onCancel, passwordInput, output, result }) => {
    return (
        <div className="confirmation-modal-overlay">
            <div className="confirmation-modal">
                <p>{message}</p>
                <p>{output}</p>
                <p style={{color:'red'}}>{typeof result === 'function' ? result() : JSON.stringify(result)}</p>
                {passwordInput}
                <div className="confirmation-modal-buttons">
                    <button onClick={onConfirm}>Yes</button>
                    <button onClick={onCancel}>No</button>
                </div>
            </div>
        </div>
    );
};

ConfirmationModal.propTypes = {
    message: PropTypes.string.isRequired,
    output: PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
    result: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
    onCancel: PropTypes.func.isRequired,
    passwordInput: PropTypes.node.isRequired,
};

export default ConfirmationModal;