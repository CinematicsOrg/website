import { useRef, useState } from 'react';
import Button from '../Button';
import Label from '../Label';
import FormInput from '../FormInput';
import CheckBox from '../CheckBox';
import {
  bookingFormChecklistInitialState,
  eventTitleList,
} from '../../utils/constants';
import { Formik } from 'formik';
import { FadeLoader } from 'react-spinners';
import TextAreaInput from '../TextAreaInput';

const scriptUrl = import.meta.env.VITE_BOOKING_FORM_SCRIPT_URL;

const BookingForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formSubmitSuccess, setFormSubmitSuccess] = useState<boolean>(false);
  const [formSubmitError, setFormSubmitError] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const formRef = useRef(null);

  const initialState = {
    name: '',
    email: '',
    phone: '',
    moreInfo: '',
    eventDate: '',
    eventTime: '',
    ...bookingFormChecklistInitialState,
  };

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

    if (values.moreInfo && values.moreInfo.length < 3) {
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
      values.phone?.length === 0
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
        }) => (
          <div className="text-[white] px-[16px] md:px-[140px]">
            <form
              className="flex flex-col"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <Label label="FULL NAME" />
              <FormInput
                name="name"
                type="text"
                value={values.name}
                placeholder="John Doe"
                classDef="w-full"
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
                classDef="w-full"
                onBlur={handleBlur}
                changed={handleChange}
                error={errors.name && touched.name && errors.name}
              />

              <Label label="PHONE NUMBER" />
              <FormInput
                type="text"
                name="phone"
                value={values.phone}
                placeholder="+2348080808080"
                classDef="w-full"
                onBlur={handleBlur}
                changed={handleChange}
                error={errors.name && touched.name && errors.name}
              />

              <Label label="EVENT TITLE" />
              <div className="mb-[16px] md:grid grid-cols-3">
                {eventTitleList.map((i, index) => {
                  return (
                    <CheckBox
                      key={index}
                      onBlur={handleBlur}
                      changed={handleChange}
                      labelName={i.title}
                      name={i.formName}
                      value={values[
                        i.formName as keyof typeof bookingFormChecklistInitialState
                      ].toString()}
                    />
                  );
                })}
              </div>

              <div className="grid grid-cols-2 gap-[15px] md:gap-[53px]">
                <div className="flex flex-col">
                  <Label label="EVENT DATE" />
                  <FormInput
                    type="text"
                    name="eventDate"
                    value={values.eventDate}
                    classDef="w-full"
                    placeholder="DD/MM/YY"
                    onBlur={handleBlur}
                    changed={handleChange}
                    error={errors.name && touched.name && errors.name}
                  />
                </div>

                <div className="flex flex-col">
                  <Label label="EVENT TIME" />
                  <FormInput
                    type="text"
                    name="eventTime"
                    value={values.eventTime}
                    classDef="w-full"
                    placeholder="DURATION"
                    onBlur={handleBlur}
                    changed={handleChange}
                    error={errors.name && touched.name && errors.name}
                  />
                </div>
              </div>

              <Label label="MORE INFORMATION" />
              <TextAreaInput
                classDef="w-[100%]"
                name="moreInfo"
                value={values.moreInfo}
                placeholder="I would be booking for a month"
                changed={handleChange}
                onBlur={handleBlur}
                error={errors.moreInfo && touched.moreInfo && errors.moreInfo}
              />

              <div className="flex justify-center">
                <Button
                  style="w-full md:auto"
                  disabled={handleDisable(values, isSubmitting)}
                  shouldSubmit={true}
                >
                  Submit
                </Button>
              </div>
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

export default BookingForm;
