import Button from '../Button';

const ContactForm = () => {
  return (
    <div className="text-[white] px-8">
      <form className="flex flex-col w-[517px]">
        <label htmlFor="" className="mb-[8px]">
          FULL NAME
        </label>
        <input
          type="text"
          className="h-[45px] mb-[45px] text-[black] text-[20px] p-2"
        />

        <label htmlFor="" className="mb-[8px]">
          EMAIL
        </label>
        <input
          type="text"
          className="h-[45px] mb-[45px] text-[black] text-[20px] p-2"
        />

        <label htmlFor="" className="mb-[8px]">
          PHONE NUMBER
        </label>
        <input
          type="text"
          className="h-[45px] mb-[45px] text-[black] text-[20px] p-2"
        />

        <label htmlFor="" className="mb-[8px]">
          ENQUIRIES
        </label>
        <textarea
          className={`h-[300px] mb-[45px] text-[black] text-[20px] p-2 resize-none`}
        ></textarea>

        <Button>Send Messsage</Button>
      </form>
    </div>
  );
};

export default ContactForm;
