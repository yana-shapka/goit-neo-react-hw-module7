import css from './ContactForm.module.css';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {useId} from 'react';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {addContact} from '../../redux/contactsOps';
import {toast} from 'react-toastify';

const customSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters long.')
    .max(50, 'Name must be no more than 50 characters long.')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Number must be at least 3 characters long.')
    .max(50, 'Number must be no more than 50 characters long.')
    .matches(
      /^[0-9\(\)\+\-\s]*$/,
      'Number can only contain numbers, spaces, parentheses, + and - characters.'
    )
    .required('Number is required'),
});

const ContactForm = () => {
  const name = useId();
  const number = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
    toast.success('Contact added successfully!');
  };

  return (
    <Formik
      initialValues={{name: '', number: ''}}
      onSubmit={handleSubmit}
      validationSchema={customSchema}
    >
      <Form className={css.formWrapper}>
        <div className={css.formItem}>
          <label htmlFor={name}>Name:</label>
          <Field
            type="text"
            name="name"
            id={name}
            className="formInput"
            placeholder="Enter name"
          />
          <ErrorMessage
            name="name"
            component="span"
            className={css.errorMessage}
          />
        </div>
        <div className={css.formItem}>
          <label htmlFor={number}>Number:</label>
          <Field
            type="text"
            name="number"
            id={number}
            className="formInput"
            placeholder="Enter number"
          />
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMessage}
          />
        </div>
        <button className={css.addButton}>Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
