
import { nanoid } from 'nanoid'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import css from "./ContactForm.module.css"

const ContactForm = ({addContact}) => {

const nameFormId = nanoid();
const numberFormId = nanoid()

const phoneNumberRegex =
/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

const validationSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
    number: Yup.string()
    .required('Required')
    .matches(
    phoneNumberRegex,
    "Invalid phone number. Phone must be +380XXXXXXXXX"
    ),
})


const handleSubmit = (value, actions) => {
    addContact(value);
    actions.resetForm();
}



return (
    <Formik initialValues={{ id: '', name: '', number: '' }} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <Form className={css.formikForm}>
        <label className={css.label}>
        <span>Name</span>
        <Field 
        className={css.input} 
        type="text" 
        name="name" 
        id={nameFormId} 
        placeholder="Marilyn Monroe"
        />
        <ErrorMessage 
        className={css.errorMessage} 
        name="name" 
        component="span"
        />
        </label>
        <label>
        <span>Number</span>
        <Field 
        className={css.input} 
        type="tel" 
        name="number" 
        id={numberFormId} 
        placeholder="+380XXXXXXXXX "
        />
        <ErrorMessage 
        className={css.errorMessage} 
        name="number" 
        component="span"
        />
        </label>
        <button 
        className={css.button} 
        type='submit'>
            Add contact
            </button>
        </Form>
    </Formik>
)
}

export default ContactForm







