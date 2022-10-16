import React, { useState } from "react";

const LikeButton = () => {
  //클릭했을때 값이 변경되야하니까 처음에는 false로 보여지면안됨
  const [liked, setLiked] = useState(false);

  if (liked) {
    return "l love you!";
  }

  return (
    <button
      onClick={() => {
        setLiked(true);
      }}
    >
      Click
    </button>
  );
};

export default LikeButton;
