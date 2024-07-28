/* eslint-disable react/prop-types */
const Nav = ({ setOpen, open }) => {
  return (
    <header className="bg-main sm:flex  relative px-4 sm:py-4 sm:px-5 py-3">
      <div className="wrapper  flex justify-between  items-center">
        <div className="">
          <img
            src="https://cdn.prod.website-files.com/635273ea37c256ef2835d522/63f35d11461fa083cbe695de_Logo%20white.svg"
            alt=""
            className="h-6 sm:h-10"
          />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer   rounded-full w-[40px] sm:hidden aspect-square flex justify-center items-center  bg-neongreen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </div>
      </div>
      <div
        className={`transition-all -z-10 sm:z-0  sm:justify-end absolute sm:relative sm:flex sm:m-0 items-center w-full top-[80%]  bg-main left-0 duration-200 ${
          !open ? "translate-y-[-150%] " : "translate-y-0  "
        } mt-[10px] sm:translate-y-0 pb-3 sm:p-0  `}
      >
        <div className="pt-4 sm:p-0 sm:flex gap-6  sm:m-auto">
          <a
            className=" sm:text-[16px] block hover:text-zinc-300 sm:p-0  transition-colors  p-2  uppercase  text-center font-[700] text-offwhite text-[14px]"
            href="#"
            id=""
          >
            HOW IT WORKS
          </a>
          <a
            className=" sm:text-[16px] block hover:text-zinc-300 sm:p-0  transition-colors  p-2   uppercase text-center font-[700] text-offwhite text-[14px]"
            href="#"
            id=""
          >
            Princing
          </a>
          <a
            className=" sm:text-[16px] block hover:text-zinc-300 sm:p-0  transition-colors  p-2  uppercase text-center  font-[700] text-offwhite text-[14px]"
            href="#"
            id=""
          >
            Blog
          </a>
        </div>

        <div className="sm:flex  sm:gap-6 ">
          <a
            className="block  sm:px-4 sm:py-3  sm:rounded-[10px] sm:border-[1px] sm:border-zinc-300 hover:text-zinc-300 sm:p-0  transition-colors  p-2 uppercase  text-center  font-[700] text-offwhite text-[14px]"
            href="#"
            id=""
          >
            Log in
          </a>
          <a
            className="block sm:border-[4px] sm:text-main sm:border-solid sm:border-transparent sm:px-4 sm:py-[9px] sm:bg-neongreen rounded-[10px] hover:text-zinc-300 sm:hover:text-main sm:p-0  transition-colors  p-2  uppercase text-center  font-[700] text-offwhite text-[14px]"
            href="#"
            id=""
          >
            Get Funding
          </a>
        </div>
      </div>
    </header>
  );
};
export default Nav;
