import React from 'react';

const VideoUrlInput = ({ formik }) => {
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor="video-url" className="text-sm font-semibold">
                Video URL:
            </label>
            <input
                type="url"
                id="video-url"
                className="border rounded p-2"
                {...formik.getFieldProps('videoUrl')}
            />
        </div>
    );
};

export default VideoUrlInput;
