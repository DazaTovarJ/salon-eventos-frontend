// import React, { useState } from "react";
import React from "react";
import EventsTable from "../components/EventsTable";
import Loader from "../components/Loader";
import Message from "../components/Message";

const EventsIndex = ({
  loading,
  eventsData,
  message,
  setMessage,
  setDataToEdit,
  deleteData,
}) => {
  return (
    <div>
      <h2>Events Information</h2>
      {message && <Message setMessage={setMessage} {...message} />}
      {loading && <Loader />}
      {!eventsData ? (
        <p>There are no events registered. Create one</p>
      ) : (
        <EventsTable
          data={eventsData}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      )}
    </div>
  );
};

export default EventsIndex;
