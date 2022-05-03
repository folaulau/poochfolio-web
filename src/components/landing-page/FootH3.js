const FootH3 = ({ text }) => {
  return (
    <>
      <h3 className="font-Museo-Sans-Rounded-700 text-[#ffffff] text-xl uppercase relative mb-11 mt-14">
        <span className="absolute -bottom-3 h-1 w-12 bg-[#95e8f7]"></span>
        {text}
      </h3>
    </>
  );
};
export default FootH3;
