const Input = ({ labelText, placeholderText, type }) => {
    return (
        <div className="mb-5">
           <label htmlFor={type} className="text-[15px] text-[#666666] ml-2 font-Museo-Sans-Rounded-700">
                {labelText}
            </label>
            <div className="mt-3.5">
                <input type={type} name={type} id={type} className="shadow-sm block w-full p-3 rounded-full w-80 text-[15px] text-[#a1a1a1] font-Museo-Sans-Rounded-500 bg-red-[#f1f7ff]" placeholder={placeholderText} style={{ border: '1px solid #85d8e7' }} />
            </div>
        </div>
    )
}

export default Input;