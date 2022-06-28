import React from "react";
import { Button, Form } from "react-bootstrap";

const NewEventForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="event-type">
        <Form.Label>Event type</Form.Label>
        <Form.Select name="eventType">
          <option value="">Choose...</option>
          <option value="Grado">Graduation</option>
          <option value="Cumpleaños">Birthday</option>
          <option value="Matrimonio">Wedding</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="guests">
        <Form.Label>Event type</Form.Label>
        <Form.Control type="number" name="guests" min="1" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="start-time">
        <Form.Label>Start Time</Form.Label>
        <Form.Control type="datetime-local" name="startTime" min="1" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="start-time">
        <Form.Label>End Time</Form.Label>
        <Form.Control type="datetime-local" name="endTime" min="1" />
      </Form.Group>
      <Button type="submit">Send</Button>
    </Form>
  );
};

export default NewEventForm;
