import React from "react";
import { Col, Row } from "react-bootstrap";
import NewEventForm from "../components/NewEventForm";

const EventForm = ({ data, insertEvent, updateEvent }) => {
  return (
    <>
      <h2>New Event</h2>
      <Row className="justify-content-center">
        <Col sm={3}>
          <NewEventForm
            data={data}
            insertEvent={insertEvent}
            updateEvent={updateEvent}
          />
        </Col>
      </Row>
    </>
  );
};

export default EventForm;
