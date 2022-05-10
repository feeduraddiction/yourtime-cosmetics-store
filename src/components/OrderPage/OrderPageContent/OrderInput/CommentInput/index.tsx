import React from "react";

const CommentInput = ({
  onChangeComment,
}: {
  onChangeComment: (e: React.FormEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <div>
      <h4>Comment</h4>
      <textarea name="comments" id="comment" onChange={onChangeComment} />
    </div>
  );
};

export default CommentInput;
