import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

const Navbar = () => {
    const links = (
        <>
            <li>
                <Link
                    href={"/"}
                    className="font-semibold text-[#C2F800] bg-[#1A2312] rounded-full px-4 py-1.5">
                    Workouts
                </Link>
            </li>
            <li>
                <Link
                    href={"/my-plans"}
                    className="font-medium text-[#9CA3AF] hover:text-[#C2F800] rounded-full hover:font-semibold">
                    My Plan
                </Link>
            </li>
        </>
    );

    return (
        <nav className="border-b border-[#1C1F26]  px-6 ">
            <div className="navbar max-w-7xl w-full mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden">
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link href="/" className="flex items-center gap-2.5">
                        <Image src={logo} alt="Fit Log logo"></Image>
                        <span className="text-white font-black text-lg">
                            FITLOG
                        </span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>
                <div className="navbar-end space-x-6">
                    <Link href={"/my-plans"} className="space-x-2">
                        <span className="font-medium text-[#D1D5DB]">Plan</span>
                        <span className="text-black bg-[#C2F800] rounded-full font-bold px-2 pb-px">
                            0
                        </span>
                    </Link>
                    <Link href={"/my-plans"} className="space-x-2">
                        <span className="font-medium text-[#9CA3AF]">
                            Saved
                        </span>
                        <span className="border-3 border-[#2D313B] rounded-full font-bold px-2 pb-px">
                            0
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
