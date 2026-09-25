import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

const Footer = () => {
    return (
        <footer className="border-t border-[#1C1F26] px-6 py-12">
            <div className="flex justify-between items-center max-w-7xl w-full mx-auto">
                <Link href="/" className="flex items-center gap-2.5">
                    <Image src={logo} alt="Fit Log logo"></Image>
                    <span className="text-white font-black text-lg">
                        FITLOG
                    </span>
                </Link>
                <span className="text-[#6B7280]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
