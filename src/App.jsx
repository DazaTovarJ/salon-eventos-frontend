import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./pages/Base";
import EventsIndex from "./pages/EventsIndex";
import EventForm from "./pages/EventForm";
import { helpHTTP } from "./helpers/helpHTTP";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);

  const BASE_URL = "http://localhost:8080/SalonEventosAPI/api";

  let api = helpHTTP();

  useEffect(() => {
    setLoading(true);
    setMessage(null);
    helpHTTP()
      .get(BASE_URL + "/events")
      .then(res => {
        console.log(res);
        if (!res.err) {
          setEventsData(res.data);
          setMessage(null);
        } else {
          setEventsData([]);
          setMessage({
            type: "danger",
            msg: `Error ${res.status}: ${res.statusText}`,
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [BASE_URL]);

  const insertData = async data => {
    try {
      let options = {
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      };

      let res = await api.post(`${BASE_URL}/events`, options);

      if (!res.err) {
        setEventsData([...eventsData, res.data]);
        setMessage({
          type: "success",
          msg: "Data inserted succesfully",
        });
      } else {
        setMessage({
          type: "danger",
          msg: `Error ${res.status}: ${res.statusText}`,
        });
      }
    } catch (error) {
      setMessage({
        type: "danger",
        msg: "An error ocurred while inserting the event",
      });
    }
  };

  const updateData = async data => {
    let endpoint = `${BASE_URL}/events/${data.id}`;

    let options = {
      headers: { "Content-Type": "application/json" },
      body: data,
    };

    try {
      let res = await api.put(endpoint, options);

      if (!res.err) {
        let newData = eventsData.map(el => (el.id === data.id ? data : el));
        setEventsData(newData);
      } else {
        setMessage({
          type: "danger",
          msg: "An error ocurred while updating the event",
        });
      }
    } catch (error) {
      setMessage({
        type: "danger",
        msg: "An error ocurred while updating the event",
      });
    }
  };

  const deleteData = async id => {
    let willDelete = window.confirm(
      `Are you sure you want to delete the event '${id}'?`,
    );

    if (willDelete) {
      let endpoint = `${BASE_URL}/events/${id}`;

      try {
        let res = await api.del(endpoint);
        if (!res.err) {
          let newData = eventsData.filter(el => el.id !== id);
          setEventsData(newData);
          setMessage({
            type: "success",
            msg: res.message,
          });
        } else {
          setMessage({
            type: "danger",
            msg: "An error ocurred while deleting the event",
          });
        }
      } catch (error) {
        setMessage({
          type: "danger",
          msg: "An error ocurred while deleting the event",
        });
      }
    } else {
      return;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route
            index
            element={
              <EventsIndex
                eventsData={eventsData}
                loading={loading}
                message={message}
                setMessage={setMessage}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            }
          />
          <Route path="/add" element={<EventForm insertEvent={insertData} />} />
          <Route
            path="/edit/:id"
            element={<EventForm data={dataToEdit} updateEvent={updateData} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
