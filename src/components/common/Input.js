const Input = ({
  labelText,
  placeholderText,
  type,
  name,
  handleChange,
  value,
  required = false,
}) => {
  return (
    <div className="mb-5">
      <label htmlFor={type} className="text-[15px] text-[#666666] ml-2 font-Museo-Sans-Rounded-700">
        {labelText}
      </label>
      <div className="mt-3.5">
        <input
          type={type}
          name={name}
          id={type}
          value={value}
          onChange={handleChange}
          required={required ? true : false}
          className="shadow-sm block w-full py-3 px-4 rounded-full text-[15px] text-[#a1a1a1] font-Museo-Sans-Rounded-500 bg-red-[#f1f7ff] text-black"
          placeholder={placeholderText}
          style={{ border: '2px solid #85d8e7', width: '348.29px', height: '56.3px' }}
        />
      </div>
    </div>
  );
};

export default Input;
