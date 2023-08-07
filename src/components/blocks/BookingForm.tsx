import { useState } from 'react';
import Button from '../Button';
import Label from '../Label';
import FormInput from '../FormInput';
import CheckBox from '../CheckBox';
import { eventTitleList } from '../../utils/constants';

const BookingForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [moreInfo, setMoreInfo] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>('');
  const [eventTime, setEventTime] = useState<string>('');

  const eventTitleContent = eventTitleList.map((i, index) => {
    return <CheckBox key={index} labelName={i} name={i} value={i} />;
  });

  return (
    <div className="text-[white] px-[16px] md:px-[140px]">
      <form className="flex flex-col">
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

        <Label label="EVENT TITLE" />
        <div className="mb-[16px] md:grid grid-cols-3">{eventTitleContent}</div>

        <div className="grid grid-cols-2 gap-[15px] md:gap-[53px]">
          <div className="flex flex-col">
            <Label label="EVENT DATE" />
            <FormInput
              type="text"
              name="Date"
              value={eventDate}
              classDef="w-full"
              placeholder="DD/MM/YY"
              changed={(e) => setEventDate(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <Label label="EVENT TIME" />
            <FormInput
              type="text"
              name="Time"
              value={eventTime}
              classDef="w-full"
              placeholder="DURATION"
              changed={(e) => setEventTime(e.target.value)}
            />
          </div>
        </div>

        <Label label="MORE INFORMATION" />
        <textarea
          className={`h-[300px] mb-[45px] text-[black] text-[20px] p-2 resize-none`}
          name="Enquiries"
          value={moreInfo}
          placeholder="I would be booking for a month"
          onChange={(e) => setMoreInfo(e.target.value)}
        ></textarea>

        <div className="flex justify-center">
          <Button style="w-full md:auto">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
