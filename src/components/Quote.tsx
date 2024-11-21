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
        <button className='border-2 rounded-lg w-[230px] h-10 hover:shadow-[inset_0px_0px_50px_0px_#FFFFFF1A]'>
          generate
        </button>
        <button className='border-2 rounded-lg w-[230px] h-10 border-[#2F4794] hover:shadow-[inset_0px_0px_50px_0px_#3F75C61A]'>
          copy
        </button>
      </div>
    </div>
  );
}

export default Quote;
