import { useRef, useState } from 'react';
import Button from '../Button';
import FormInput from '../FormInput';
import Label from '../Label';
import FadeLoader from 'react-spinners/FadeLoader';
import { Formik } from 'formik';
import TextAreaInput from '../TextAreaInput';

const scriptUrl = import.meta.env.VITE_CONTACT_FORM_SCRIPT_URL;

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formSubmitSuccess, setFormSubmitSuccess] = useState<boolean>(false);
  const [formSubmitError, setFormSubmitError] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const formRef = useRef(null);

  const initialState = {
    name: '',
    email: '',
    phone: '',
    enquiries: '',
  };
  console.log({ scriptUrl });

  const validate = (values: typeof initialState) => {
    const errors: {
      name?: string;
      phone?: string;
      email?: string;
      enquiries?: string;
    } = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length < 1) {
      errors.name = 'Must be a valid name';
    }

    if (!values.phone) {
      errors.phone = 'Required';
    } else if (values.phone?.length < 8) {
      errors.phone =
        'Invalid phone number format try this format +234 81x xxx xxx x';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (values.enquiries && values.enquiries.length < 3) {
      errors.enquiries = 'Must be at least 3 characters long ';
    }
    return errors;
  };

  const handleDisable = (
    values: typeof initialState,
    isSubmitting: boolean
  ) => {
    return (
      isSubmitting ||
      values.name?.length === 0 ||
      values.email?.length === 0 ||
      values.phone?.length === 0 ||
      values.enquiries?.length === 0
    );
  };

  return (
    <div>
      <Formik
        initialValues={initialState}
        validate={validate}
        onSubmit={async (_, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          setFormSubmitSuccess(false);
          setFormSubmitError(false);
          setError('');
          setLoading(true);

          fetch(scriptUrl, {
            method: 'POST',
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            body: new FormData(formRef.current!),
          })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .then((_) => {
              console.log('SUCCESSFULLY SUBMITTED');
              setLoading(false);
              setSubmitting(false);
              setFormSubmitSuccess(true);
              resetForm({ values: initialState });
            })
            .catch((err) => {
              setLoading(false);
              setSubmitting(false);
              setFormSubmitError(true);
              setError(err.message);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
          isSubmitting,
          // setFieldValue,
        }) => (
          <div className="text-[white] px-[16px] md:px-8">
            <form
              className="flex flex-col w-[100%] md:w-[517px]"
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <Label label="FULL NAME" />
              <FormInput
                name="name"
                type="text"
                value={values.name}
                placeholder="John Doe"
                classDef="w-[100%]"
                onBlur={handleBlur}
                changed={handleChange}
                error={errors.name && touched.name && errors.name}
              />

              <Label label="EMAIL" />
              <FormInput
                type="email"
                name="email"
                value={values.email}
                placeholder="Johndoe@email.com"
                classDef="w-[100%]"
                changed={handleChange}
                onBlur={handleBlur}
                error={errors.email && touched.email && errors.email}
              />

              <Label label="PHONE NUMBER" />
              <FormInput
                type="text"
                name="phone"
                value={values.phone}
                placeholder="+2348080808080"
                classDef="w-[100%]"
                changed={handleChange}
                onBlur={handleBlur}
                error={errors.phone && touched.phone && errors.phone}
              />

              <Label label="ENQUIRIES" />
              <TextAreaInput
                classDef="w-[100%]"
                name="enquiries"
                value={values.enquiries}
                placeholder="How much is your executive package?"
                changed={handleChange}
                onBlur={handleBlur}
                error={
                  errors.enquiries && touched.enquiries && errors.enquiries
                }
              />

              <Button
                disabled={handleDisable(values, isSubmitting)}
                shouldSubmit={true}
              >
                Send Message
              </Button>
            </form>
          </div>
        )}
      </Formik>
      {loading ? (
        <div className="flex justify-center pt-[60px]">
          <FadeLoader
            color={'#e64d15'}
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : formSubmitSuccess ? (
        <div className="md:text-[36px] text-center pt-[60px]">
          The form was sent successfully
        </div>
      ) : formSubmitError ? (
        <div className="md:text-[36px] text-center pt-[60px]">
          {error === 'Failed to fetch' ? 'Network Error' : error}
        </div>
      ) : null}
    </div>
  );
};

export default ContactForm;
