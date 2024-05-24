import { FaUserAlt } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import style from "./Contact.module.css";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={style.card}>
      <div className={style.user}>
        <h2 className={style.nameUser}>
          <FaUserAlt className={style.icon} />
          {name}
        </h2>
        <p>
          <ImPhone className={style.icon} size={24} />
          {number}
        </p>
      </div>
      <button className={style.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
