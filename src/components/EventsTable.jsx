import React from "react";
import { Table } from "react-bootstrap";
import TableRow from "./TableRow";

const EventsTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <Table striped hover>
      <thead>
        <tr>
          <td>#</td>
          <td>Event Type</td>
          <td>Guests</td>
          <td>Start</td>
          <td>Ends</td>
          <td>Last modification</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <TableRow
            key={item.id}
            data={item}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default EventsTable;
