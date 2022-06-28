import React from "react";
import { Col, Row } from "react-bootstrap";
import NewEventForm from "../components/NewEventForm";

const EventForm = () => {
  return (
    <>
      <h2>New Event</h2>
      <Row className="justify-content-center">
        <Col sm={3}>
          <NewEventForm />
        </Col>
      </Row>
    </>
  );
};

export default EventForm;
