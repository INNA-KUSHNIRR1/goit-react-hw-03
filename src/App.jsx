import { useId, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import { MdOutlineContacts } from "react-icons/md";

const date = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(date);
  const [filter, setFilter] = useState("");

  const contactsFind = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const contactId = useId();
  const handleAddContact = ({ name, number }) => {
    setContacts([...contacts, { id: contactId, name: name, number: number }]);
  };
  return (
    <>
      <div className="div">
        <h1 className="title">
          <MdOutlineContacts className="icon" size={50} />
          <br />
          Phonebook
        </h1>
        <ContactForm contacts={contacts} onAddContact={handleAddContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList values={contactsFind} />
      </div>
    </>
  );
}

export default App;
