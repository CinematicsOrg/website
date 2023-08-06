import { useRef, useState } from 'react';
import Button from '../Button';
import FormInput from '../FormInput';
import axios from 'axios';
import Label from '../Label';

const ContactForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [enquiries, setEnquiries] = useState<string>('');
  const formRef = useRef(null);

  const scriptUrl =
    'https://script.google.com/macros/s/AKfycbxG1ubETc1NSlJppzDtE82zi9SKHvgGyLKwzcBiL7zfEHahzJSat2gQG31m4DmfIu7e/exec';

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formRef.current);

    fetch(scriptUrl, { method: 'POST', body: new FormData(formRef.current!) })
      .then((res) => {
        console.log('SUCCESSFULLY SUBMITTED');
      })
      .catch((err) => console.log(err));

    // axios
    //   .post(
    //     'https://script.google.com/macros/s/AKfycbxG1ubETc1NSlJppzDtE82zi9SKHvgGyLKwzcBiL7zfEHahzJSat2gQG31m4DmfIu7e/exec',
    //     {
    //       Name: name,
    //       Email: email,
    //       Number: phone,
    //       Enquiries: enquiries,
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log({ err });
    //   });
  };

  return (
    <div className="text-[white] px-8">
      <form
        className="flex flex-col w-[517px]"
        onSubmit={(e) => handleFormSubmit(e)}
        ref={formRef}
      >
        <Label label="FULL NAME" />
        <FormInput
          name="Name"
          type="text"
          value={name}
          placeholder="John Doe"
          classDef="w-full"
          changed={(e) => setName(e.target.value)}
        />

        <Label label="EMAIL" />
        <FormInput
          type="email"
          name="Email"
          value={email}
          placeholder="Johndoe@email.com"
          classDef="w-full"
          changed={(e) => setEmail(e.target.value)}
        />

        <Label label="PHONE NUMBER" />
        <FormInput
          type="text"
          name="Number"
          value={phone}
          placeholder="+2348080808080"
          classDef="w-full"
          changed={(e) => setPhone(e.target.value)}
        />

        <Label label="ENQUIRIES" />
        <textarea
          className={`h-[300px] mb-[45px] text-[black] text-[20px] p-2 resize-none`}
          name="Enquiries"
          value={enquiries}
          placeholder="How much is your executive package?"
          onChange={(e) => setEnquiries(e.target.value)}
        ></textarea>

        <Button shouldSubmit={true}>Send Message</Button>
      </form>
    </div>
  );
};

export default ContactForm;
