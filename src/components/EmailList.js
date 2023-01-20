import React, { useEffect, useState } from "react";

function EmailList() {
  const [emailList, setEmailList] = useState([]);

  useEffect(() => {
    fetch("https://flipkart-email-mock.vercel.app/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmailList(data.list);
      });
  }, []);

  return (
    <div>
      <h1>Email List</h1>
      <ul>
        {emailList.map((item) => (
          <li key={item.id}>
            <h2>{item.subject}</h2>
            <p>{item.short_description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmailList;
