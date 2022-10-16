import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gugudan from "./gugudan/Gugudan";
import LikeButton from "./likeButton/LikeButton";

const App = () => {
  return (
    <BrowserRouter>
      <LikeButton />
      <Gugudan />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
