import "./styles.css";
import ContactCard from "./ContactCard";
import { useEffect, useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setContacts(data.results);
      });
  }, []);

  return (
    <>
      {contacts.map((contact) => (
        <ContactCard
          avatar={contact.picture.large}
          name={`${contact.name.first + " " + contact.name.last}`}
          email={contact.email}
          age={contact.dob.age}
        />
      ))}
    </>
  );
};

export default App;
