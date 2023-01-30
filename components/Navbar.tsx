import Link from "next/link";
import React from "react";
import GitHubLogo from "@/components/icons/GitHubLogo";
import VKLogo from "@/components/icons/VKLogo";
import ThemeCheckbox from "@/components/ThemeCheckbox";
import {appName, GitHubLink, shortAppName, TelegramLink, VKLink} from "@/constants/constants";
import TelegramLogo from "@/components/icons/TelegramLogo";
import Image from "next/image";
import MNNavigator from "@/components/icons/MNNavigator";

const iconSize = "w-7 h-7";

const links: { link: string, icon: JSX.Element }[] = [
    {link: VKLink, icon: <VKLogo className={iconSize}/>},
    {link: TelegramLink, icon: <TelegramLogo className={iconSize}/>},
    {link: GitHubLink, icon: <GitHubLogo className={iconSize}/>},
]

export default function Navbar() {

    return (
        <div className="navbar bg-base-200 shadow-md rounded-md">
            <div className="navbar-start">
                <Link href="/" className="btn btn-ghost normal-case text-xl content-center">
                    <MNNavigator className="w-12 h-12 pr-1"/>
                    <div className="visible md:invisible md:w-0 md:h-0">{shortAppName}</div>
                    <div className="invisible w-0 h-0 md:visible md:w-fit md:h-fit">{appName}</div>
                </Link>
            </div>
            <div className="navbar-center"/>
            <div className="navbar-end">
                <ThemeCheckbox iconSize={iconSize}/>
                {links.map(({link, icon}, index) => {
                    return (
                        <Link href={link} key={index}
                              target="_blank"
                              className="btn btn-square btn-ghost">
                            {icon}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}