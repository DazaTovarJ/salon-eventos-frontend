import React, { useEffect, useState } from "react";
import EventsTable from "../components/EventsTable";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { helpHTTP } from "../helpers/helpHTTP";

const EventsIndex = () => {
  const [eventsData, setEventsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  let url = "http://localhost:8080/SalonEventosAPI/api/";

  useEffect(() => {
    setLoading(true);
    setMessage(null);
    helpHTTP()
      .get(url + "events")
      .then(res => {
        console.log(res);
        if (!res.err) {
          setEventsData(res.data);
          setMessage(null);
        } else {
          setEventsData(null);
          setMessage({
            type: "danger",
            msg: `Error ${res.status}: ${res.statusText}`,
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return (
    <div>
      <h2>Events Information</h2>
      {message && <Message setMessage={setMessage} {...message} />}
      {loading && <Loader />}
      {eventsData !== null && <EventsTable data={eventsData} />}
    </div>
  );
};

export default EventsIndex;
