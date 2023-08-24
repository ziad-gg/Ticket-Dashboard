import React from 'react';

interface PreviewProps {
    title: string;
    description: string;
    color: string;
    useGuildThumbnail: boolean;
    useGuildIconInFooter: boolean;
}

const PreviewComponent: React.FC<PreviewProps> = ({ title, description, color, useGuildThumbnail, useGuildIconInFooter }) => {
    return (
        <div className="preview-embed">
            <div className="preview-header" style={{ backgroundColor: color }}>
                <div className="preview-title">{title}</div>
            </div>
            <div className="preview-description">{description}</div>
            {useGuildThumbnail && <div className="preview-guild-thumbnail" />}
            {/* Add more embed elements */}
            {useGuildIconInFooter && <div className="preview-guild-icon" />}
            <div className="preview-footer" style={{ backgroundColor: color }}>
                <div className="preview-username">Username</div>
            </div>
        </div>
    );
};

export default PreviewComponent;
