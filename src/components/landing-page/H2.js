const H2 = ({ text, colorText = "", cl }) => {
  return (
    <h2
      className={`text-[32px] ${cl ? "text-[#077997]" : "text-[#333333]"} mb-7`}
    >
      {text}&nbsp;
      <span className={`${cl ? "text-[#333333]" : "text-[#077997]"}`}>
        {colorText}
      </span>
    </h2>
  );
};

export default H2;
