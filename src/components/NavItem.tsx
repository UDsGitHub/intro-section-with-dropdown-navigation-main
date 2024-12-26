import { useState } from "react";

interface LinkType {
  label: string;
  icon?: React.ReactNode;
}

type Props = {
  label: string;
  links?: LinkType[];
};

const NavItem = ({ label, links }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="relative group cursor-pointer">
      <div
        className="flex items-center gap-4 md:gap-2"
        onClick={toggleDropdown}
      >
        <span className="duration-300 hover:text-black">{label}</span>
        {links && (
          <svg
            width="10"
            height="6"
            xmlns="http://www.w3.org/2000/svg"
            className={
              "md:rotate-0 duration-300" + `${isOpen && " rotate-180"}`
            }
          >
            <path
              stroke="#686868"
              strokeWidth="1.5"
              fill="none"
              d="m1 1 4 4 4-4"
            />
          </svg>
        )}
      </div>

      {links && (
        <ul
          className={
            `md:absolute md:top-full md:right-0 w-max md:bg-white drop-shadow-2xl rounded-xl [&>li]:mb-3 [&>li]:md:mb-4 origin-top duration-300 md:duration-300 overflow-hidden max-h-0 pointer-events-none md:opacity-0 md:origin-top-right md:group-hover:p-8 md:group-hover:opacity-100 md:group-hover:max-h-80 md:group-hover:pointer-events-auto` +
            `${
              isOpen
                ? " p-6 pb-0 max-h-80 pointer-events-auto opacity-100"
                : " p-0"
            }`
          }
        >
          {links.map((link) => (
            <li className="last-of-type:mb-0 duration-300 hover:bg-gray-100/75 hover:text-black">
              <div className="flex gap-4">
                {link?.icon}
                <span>{link.label}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavItem;
