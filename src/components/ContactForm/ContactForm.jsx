import { Field, Form, Formik } from "formik";
import style from "./ContatForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.number()
    .min(3)
    .typeError("That doesn`t look like a phone number")
    .positive("A phone number can`t start with a minus")
    .integer("A phone number can`t include a decimal point")
    .required("Required"),
});

const ContactForm = ({ onAddContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={style.form}>
        <label className={style.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field
          className={style.field}
          type="text"
          name="name"
          id={nameFieldId}
        />
        <ErrorMessage className={style.error} name="name" component="span" />
        <label className={style.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={style.field}
          type="text"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage className={style.error} name="number" component="span" />
        <button className={style.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
