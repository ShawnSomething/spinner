import React from 'react';

interface CommentsProps {
  comment: string;
}

const Comments: React.FC<CommentsProps> = ({ comment }) => {
    const commentStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
        margin: '0px 80px'
    };

    return (
        <p style={commentStyle}>{comment}</p>
    );
};

export default Comments;
