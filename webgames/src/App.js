import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LikeButton from "./likeButton/LikeButton";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LikeButton />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
