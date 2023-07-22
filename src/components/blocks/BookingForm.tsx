import Button from '../Button';

const BookingForm = () => {
  return (
    <div className="text-[white] px-[140px]">
      <form className="flex flex-col">
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
          EVENT TITLE
        </label>
        <input
          type="text"
          className="h-[45px] mb-[45px] text-[black] text-[20px] p-2"
        />

        <div className="grid grid-cols-2 gap-[53px]">
          <div className="flex flex-col">
            <label htmlFor="" className="mb-[8px]">
              EVENT DATE
            </label>
            <input
              type="text"
              placeholder="DD/MM/YY"
              className="h-[45px] mb-[45px] text-[black] text-[20px] p-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="mb-[8px]">
              EVENT TIME
            </label>
            <input
              type="text"
              placeholder="DURATION"
              className="h-[45px] mb-[45px] text-[black] text-[20px] p-2"
            />
          </div>
        </div>

        <label htmlFor="" className="mb-[8px]">
          MORE INFORMATION
        </label>
        <textarea
          className={`h-[300px] mb-[45px] text-[black] text-[20px] p-2 resize-none`}
        ></textarea>

        <div className="flex justify-center">
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
