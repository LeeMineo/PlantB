import React from 'react';

const CameraControls = ({ onCapture, onSwitchCamera }) => {
    return (
        <div className="camera-controls">
            <button onClick={onCapture}>Capture</button>
            <button onClick={onSwitchCamera}>Switch Camera</button>
        </div>
    );
};

export default CameraControls;
