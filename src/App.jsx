import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./pages/Base";
import EventsIndex from "./pages/EventsIndex";
import EventForm from "./pages/EventForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<EventsIndex />} />
          <Route path="/add" element={<EventForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
