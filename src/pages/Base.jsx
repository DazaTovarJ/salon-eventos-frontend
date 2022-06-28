import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Toolbar from "../components/Navbar";

const Base = () => {
  return (
    <>
      <Toolbar />
      <Container className="p-3">
        <Outlet />
      </Container>
    </>
  );
};

export default Base;
