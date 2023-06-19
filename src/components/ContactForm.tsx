import Button from './Button';

const ContactForm = () => {
  return (
    <div className="text-[white] px-8">
      <form className="flex flex-col w-[517px]">
        <label htmlFor="" className="mb-[8px]">
          FULL NAME
        </label>
        <input type="text" className="h-[45px] mb-[45px]" />

        <label htmlFor="" className="mb-[8px]">
          EMAIL
        </label>
        <input type="text" className="h-[45px] mb-[45px]" />

        <label htmlFor="" className="mb-[8px]">
          PHONE NUMBER
        </label>
        <input type="text" className="h-[45px] mb-[45px]" />

        <label htmlFor="" className="mb-[8px]">
          ENQUIRIES
        </label>
        <input type="text" className="h-[200px] mb-[100px]" />

        <Button style="flex items-center w-[259px] h-[74px] py-5 px-10 justify-center font-medium bg-dred ">
          Send Messsage
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
