import "./style.css";

const Navbar = () => {
    return ( 
        <div className="w-screen flex justify-between items-center px-72 py-6 text-white fixed">
            <span className="text-3xl font-bold">
                BgVideo
            </span>
            <ul className="flex h-full space-x-4">
                <li className="cursor-pointer hover:text-purple-500 duration-200">
                    Wellington
                </li>
                <li className="cursor-pointer hover:text-purple-500 duration-200">
                    Nepean
                </li>
                <li className="cursor-pointer hover:text-purple-500 duration-200">
                    Almonte
                </li>
                <li>
                    <div className="w-[1px] h-full bg-white"></div>
                </li>
                <li className="cursor-pointer hover:text-purple-500 duration-200">
                    Reservations
                </li>
            </ul>
        </div>
     );
}
 
export default Navbar;
