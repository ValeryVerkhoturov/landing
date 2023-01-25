import Link from "next/link";
import Image from "next/image";
import React from "react";
import {MoonIcon, SunIcon} from "@heroicons/react/24/outline";
import {useTheme} from "@/context/theme-context";
import {lightTheme, darkTheme} from "@/context/theme-context";

export default function Navbar() {

    const {toggleTheme} = useTheme();

    return (
        <div className="navbar bg-base-200 shadow-md rounded-md">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost hower:btn-gost normal-case text-xl">Mirea Ninja</Link>
            </div>
            <div className="flex-none">
                <label className="btn btn-square btn-ghost hower:btn-gost swap swap-rotate">
                    <input type="checkbox"
                           onChange={(event) => toggleTheme(event.currentTarget.checked ? darkTheme : lightTheme)}/>
                    <SunIcon className="swap-off fill-current w-7 h-7"/>
                    <MoonIcon className="swap-on fill-current w-7 h-7"/>
                </label>
                <Link href="https://github.com/mirea-ninja"
                      className="btn btn-square btn-ghost hower:btn-gost">
                    <Image className="fill-currentColor" src="/github-mark.svg" width={24} height={24}
                           alt="GitHub Logo"/>
                </Link>
            </div>
        </div>
    )
}