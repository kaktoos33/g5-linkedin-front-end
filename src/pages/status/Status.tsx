import axios from "axios";
import React, { useState } from "react";
import http from "../../http-common";

type contact = {
  id: number;
  name: string;
  username: string;
  email: string;
};
interface Istate {
  contacts: [contact];
}
export default function Status() {
  // const [mycontacts, setMyContacts] = useState<Istate>();
  // // fetch(`http://localhost:8080/status`)
  // //   .then((response) => setStatus(response))
  // //   .catch(() => setStatus(Response.error));
  // axios
  //   .get("http://jsonplaceholder.typicode.com/users")
  //   // .then((res) => res.toJson())
  //   .then((data) => {
  //     setMyContacts({ contacts: data.data });
  //   })
  //   .catch(console.log);
  const [data, setData] = useState();
  //axios.get("http://localhost:8080/status").then((res) => setData(res.data));
  http.get("/status").then((res) => setData(res.data));
  return (
    <div dir="ltr">
      <div>
        {/* {mycontacts?.contacts.map((contact) => (
          <div key={contact.id}>
            <h5>{contact.name}</h5>
            <h6>{contact.email}</h6>
          </div>
        ))} */}
        {data}
      </div>
    </div>
  );
}
