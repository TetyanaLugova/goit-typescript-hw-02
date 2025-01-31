import { Field, Form, Formik, FormikHelpers } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  return (
    <header>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions: FormikHelpers<{ query: string }>) => {
          if (values.query.trim() === '') {
            toast.error('Enter your request!');
          } else {
            onSubmit(values.query);
          }
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
      <Toaster />
    </header>
  );
};

export default SearchBar;
