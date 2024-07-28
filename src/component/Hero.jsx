const Hero = () => {
  return (
    <main className="flex  bg-main flex-col justify-between items-center px-[20px] py-[15px]">
      <div className="  flex flex-col justify-between gap-6 items-center ">
        <div>
          <h1 className="text-[14vw] lg:leading-[8vw] lg:text-[10vw]  text-center  tracking-tight leading-[11vw] bg-clip-text text-transparent bg-gradient-to-r from-neongreen via-emerald-500 to-green-800 font-Roboto font-[1000] uppercase ">
            financing
          </h1>
          <h1 className="text-[14vw] lg:leading-[8vw] lg:text-[10vw]  text-center  tracking-tight leading-[11vw] bg-clip-text text-transparent bg-gradient-to-r from-neongreen via-emerald-500 to-green-800 font-Roboto font-[1000] uppercase ">
            the future
          </h1>
        </div>
        <div className="flex flex-col  max-w-[69vw] lg:max-w-[38vw] items-center gap-3 font-sans">
          <p className=" text-center text-offwhite font-[600] text-[16px] leading-[140%]">
            Pay suppliers faster, manage invoices, and extend cash for longer.
            Get access to funding without giving up equity, so that you can
            focus on growing your company.
          </p>
          <a
            className="block border-[4px] text-main border-solid border-transparent px-6 py-3 bg-neongreen rounded-[10px]    uppercase text-center mt-2 font-[700] text-sm"
            href="#"
            id=""
          >
            Get Funding
          </a>
        </div>
      </div>
    </main>
  );
};
export default Hero;
