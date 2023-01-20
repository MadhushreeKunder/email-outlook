import React from "react";
import "./EmailCard.css";

const EmailCard = (props) => {
  return (
    <div>
      <ul>
        {props.emailList.map((item) => (
          <li key={item.id}>
            <div className="card">
              <div className="avatar">
                {item.from.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <div>
                  From:{" "}
                  <span className="bold">
                    {item.from.name} {"<"}
                    {item.from.email}
                    {">"}
                  </span>
                </div>
                <div>
                  Subject: <span className="bold"> {item.subject} </span>
                </div>
                <p>{item.short_description}</p>
                <p> {Date(item.date)} </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailCard;
