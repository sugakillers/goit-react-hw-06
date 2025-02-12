import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice.js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
const phoneNumberRegex =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(20, 'Name must be less than 20 characters')
    .required('Name is required'),
  number: Yup.string()
    .required('Phone is required')
    .matches(
      phoneNumberRegex,
      'Invalid phone number. Phone must be +380XXXXXXXXX'
    ),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (formValue, formActions) => {
    formValue.id = nanoid();
    dispatch(addContact(formValue));
    formActions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <Field
            type="text"
            name="name"
            id="name"
            placeholder="Marilyn Monroe"
          ></Field>
          <ErrorMessage 
          name="name" 
          component="span" 
          className={css.error} />
        </label>
        <label className={css.label}>
          <span>Number</span>
          <Field 
          type="text" 
          name="number" 
          placeholder="380XXXXXXXXX">
          </Field>
          <ErrorMessage 
          name="number" 
          component="span" 
          className={css.error} />
        </label>
        <button className={css.button} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;


