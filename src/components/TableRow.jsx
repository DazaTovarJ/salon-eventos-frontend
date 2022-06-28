import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import TimeAgo from "timeago-react";

const TableRow = ({ data }) => {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.eventType}</td>
      <td>{data.guests}</td>
      <td>{new Date(data.startTime).toLocaleString()}</td>
      <td>{new Date(data.endTime).toLocaleString()}</td>
      <td>
        <TimeAgo datetime={new Date(data.updatedAt)} />
      </td>
      <td>
        <LinkContainer to={`/edit/${data.id}`}>
          <Button variant="warning">Editar</Button>
        </LinkContainer>
        <LinkContainer to={`/delete/${data.id}`}>
          <Button variant="danger">Eliminar</Button>
        </LinkContainer>
      </td>
    </tr>
  );
};

export default TableRow;
