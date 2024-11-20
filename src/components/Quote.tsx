function Quote() {
  return (
    <div className='items-center w-[474px] space-y-4'>
      {/* Quote */}
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
      </p>
      
      {/* Buttons */}
      <div className="space-x-[5px]">
        <button className="border-2 rounded-lg w-[230px] h-10">generate</button>
        <button className="border-2 rounded-lg w-[230px] h-10 border-[#2F4794]">copy</button>
      </div>
    </div>
  );
}

export default Quote;
