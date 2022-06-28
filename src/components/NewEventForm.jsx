import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Message from "./Message";

const defaultForm = {
  eventType: "",
  guests: 1,
  startTime: "",
  endTime: "",
  id: null,
};

const NewEventForm = ({ data, insertEvent, updateEvent }) => {
  const [form, setForm] = useState(defaultForm);
  const [message, setMessage] = useState(null);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (data) {
      if (!data.endTime) {
        data.endTime = "";
      }
      const { id, eventType, guests, startTime, endTime } = data;
      setForm({ id, eventType, guests, startTime, endTime });
    } else {
      setForm(defaultForm);
    }
  }, [data]);

  const handleChange = e => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      setMessage({ type: "danger", msg: "Campos requeridos" });
      return;
    }

    setMessage(null);
    setValidated(true);

    if (!form.endTime || form.endTime === "") delete form.endTime;
    if (form.id === null || form.id === undefined) {
      insertEvent(form).then(() => {
        setMessage({
          type: "success",
          msg: "Data inserted succesfully",
        });
      });
    } else {
      updateEvent(form).then(() => {
        setMessage({
          type: "success",
          msg: "Data updated succesfully",
        });
      });
    }

    setForm(defaultForm);
  };

  return (
    <>
      {message && <Message setMessage={setMessage} {...message} />}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="event-type">
          <Form.Label>Event type</Form.Label>
          <Form.Select
            name="eventType"
            value={form.eventType}
            onChange={handleChange}
            required
          >
            <option value="">Choose...</option>
            <option value="Graduation">Graduation</option>
            <option value="Birthday">Birthday</option>
            <option value="Wedding">Wedding</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="guests">
          <Form.Label>Guests</Form.Label>
          <Form.Control
            type="number"
            name="guests"
            value={form.guests}
            min="1"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="start-time">
          <Form.Label>Start Time</Form.Label>
          <Form.Control
            type="datetime-local"
            name="startTime"
            value={form.startTime}
            min="1"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="end-time">
          <Form.Label>End Time</Form.Label>
          <Form.Control
            type="datetime-local"
            name="endTime"
            value={form.endTime}
            min="1"
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit">Send</Button>
      </Form>
    </>
  );
};

export default NewEventForm;
