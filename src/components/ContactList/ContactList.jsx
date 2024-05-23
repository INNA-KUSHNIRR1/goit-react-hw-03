import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

const ContactList = ({ values }) => {
  return (
    <ul className={style.list}>
      {values.map((value) => {
        return (
          <Contact key={value.id} name={value.name} number={value.number} />
        );
      })}
    </ul>
  );
};
export default ContactList;
