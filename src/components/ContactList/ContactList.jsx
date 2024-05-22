import Contact from "../Contact/Contact";
import style from "./ContactList.module.css"

const ContactList = ({ contacts }) => {
  return (
    <ul className={style.list}>
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </ul>
  );
};
export default ContactList;
