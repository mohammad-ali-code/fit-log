"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavbarRoutesLinkPropsTypes {
    routeName: string;
    routePath: string;
}

const NavbarRoutesLink = ({
    routeName,
    routePath,
}: NavbarRoutesLinkPropsTypes) => {
    const pathname = usePathname();

    return (
        <>
            <li>
                <Link
                    href={routePath}
                    className={`rounded-full ${routePath === pathname ? "font-semibold text-[#C2F800] bg-[#1A2312]  px-4 py-1.5" : "font-medium text-[#9CA3AF] hover:text-[#C2F800] hover:font-semibold"}`}>
                    {routeName}
                </Link>
            </li>
        </>
    );
};

export default NavbarRoutesLink;
