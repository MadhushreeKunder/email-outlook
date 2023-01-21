import React from "react";
import "./EmailDate.css";

function EmailDate(props) {
  const date = new Date(props.date);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const time = date
    .toLocaleTimeString("en-us", {
      hour: "2-digit",
      minute: "2-digit",
    })
    .toLowerCase()
    .split(" ")
    .join("");

  return (
    <div className="date">
      <small>{`${day}/${month}/${year}`}</small>
      <small>{time}</small>
    </div>
  );
}

export default EmailDate;
