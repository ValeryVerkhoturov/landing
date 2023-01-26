import Head from "next/head";
import Navbar from "@/components/navbar";
import {useEffect} from "react";
import * as console from "console";
import {useTheme} from "@/context/theme-context";
import {getSystemTheme} from "@/utils/get-system-theme";

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {

    const {toggleTheme} = useTheme();

    useEffect(() => {
        toggleTheme(getSystemTheme())
    });

    return (
        <>
            <Head>
                <title>Mirea Ninja</title>
                <meta name="description" content="Наши проекты и идеи"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-7xl">
                <Navbar/>
                {props.children}
            </main>
        </>
    )
}