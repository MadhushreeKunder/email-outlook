import React, { useEffect, useState } from "react";
import EmailCard from "./EmailCard/EmailCard";

const EmailList = () => {
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
      <EmailCard emailList={emailList} />
    </div>
  );
};

export default EmailList;
