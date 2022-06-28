import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TimeAgo from "timeago-react";

const TableRow = ({ data, setDataToEdit, deleteData }) => {
  const navigate = useNavigate();

  const handleEdit = e => {
    setDataToEdit(data);

    navigate(`/edit/${data.id}`);
  };

  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.eventType}</td>
      <td>{data.guests}</td>
      <td>{new Date(data.startTime).toLocaleString()}</td>
      <td>
        {data.endTime
          ? new Date(data.endTime).toLocaleString()
          : "Not specified"}
      </td>
      <td>
        <TimeAgo datetime={new Date(data.updatedAt)} />
      </td>
      <td>
        <Button type="button" variant="warning" onClick={handleEdit}>
          Editar
        </Button>
        <Button
          type="button"
          variant="danger"
          onClick={() => deleteData(data.id)}
        >
          Eliminar
        </Button>
      </td>
    </tr>
  );
};

export default TableRow;
