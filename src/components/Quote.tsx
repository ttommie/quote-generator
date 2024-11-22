function Quote() {
  return (
    <div className='items-center w-[474px] space-y-4'>
      {/* Quote */}
      <p className='font-inter text-[15px] select-text'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
      </p>

      {/* Buttons */}
      <div className='flex justify-between'>
        <button className='border-2 rounded-lg w-[230px] h-11 border-border hover:bg-buttonColor/20'>
          generate
        </button>
        <button className='border-2 rounded-lg w-[230px] h-11 border-borderAccent hover:bg-buttonAccentColor/20'>
          copy
        </button>
      </div>
    </div>
  );
}

export default Quote;
