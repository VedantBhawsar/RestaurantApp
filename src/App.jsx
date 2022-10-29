import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, MainContainer, CreateContainer } from "./components/index.js";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="md:mt-24 mt-14  px-4 py-4 md:px-16  w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/CreateItemS" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;