const textInput = ({ label, placeHolder, className, value, setValue }) => {
  return (
    <div className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}>
      <label htmlFor={label} className="font-semibold">
        {label}
      </label>
      <input
        type="password"
        placeholder={placeHolder}
        className="p-3 border border-gray-300 border-solid rounded placeholder-gray-500"
        id={label}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default textInput;
