import React from 'react';
import DeleteButton from "./DeleteButton";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

function TeamRow({ team, id }) {
  const popover = (
    <Popover id={`popover-${id}`}>
      <Popover.Header as="h4">{team.name}</Popover.Header>
      <Popover.Body>
        <div>
          {team.logo && <img src={team.logo} alt={team.name} style={{ width: '100px', height: '100px' }} />}
          <p>OFFICIAL MEMBER</p>
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger={['hover', 'focus']} placement='bottom' overlay={popover}>
      <tr key={id}>
        <td>{team.name}</td>
        <td>{team.coachName}</td>
        <td>{team.coachPhone}</td>
        <td>{team.numberOfPlayers}</td>
        <td>
          <Link to={`/edit-team/${id}`}><FaEdit /></Link>
          <DeleteButton teamName={team.name} />
        </td>
      </tr>
    </OverlayTrigger>
  );
}

export default TeamRow;

