'use client'
import type { Metadata } from "next";
import {AddressBook, Article, House, HouseLine, Info, Package} from '@phosphor-icons/react/dist/ssr';
import ThemeSelector from '@/components/ui/ThemeSelector';
import clsx from 'clsx';
import Image from "next/image";
import { useEffect, useState } from "react";


const navigationButton = [
    {
        icon: HouseLine,
        title: "Beranda",
        href: "/home",
    },
    {
        icon: Info,
        title: 'Tentang',
        href: "/about",
    },
    {
        icon: Package,
        title: 'Projek',
        href: "/projects",
    },
    {
        icon: Article,
        title: 'Artikel',
        href: '/articles',
    },
    {
        icon: AddressBook,
        title: 'Kontak',
        href: '/contact',
    }
];
const sections = navigationButton.map((item) => item.href.replace('/', ''));

const Home = () => {
    const [activeSection, setActiveSection] = useState('hero');
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              }
            }
          },
          { rootMargin: '-50% 0px -50% 0px' }
        );
    
        sections.forEach((id) => {
          const el = document.getElementById(id);
          if (el) observer.observe(el);
        });
    
        return () => observer.disconnect();
      }, []);
  return (
    <div className="flex w-full  md:justify-center transition-all duration-500 ease-in-out lg:w-[70rem] lg:transition-all lg:duration-500 lg:ease-in-out border border-black">
        <nav className="w-full border border-red-400 border-b-2 md:border-b-0 p-4 justify-start  items-center flex flex-col transition-all fixed  md:dark:bg-opacity-0 md:relative md:max-w-[15rem] md:pt-[5rem] z-50">
            <div className="flex w-full transition-all md:flex-col">
                <div className="w-full flex-col justify-center items-center">
                    <div className="w-full border border-green-50 rounded-md flex justify-center mb-2">
                        <Image src={'/assets/rifal.webp'} alt="Rifal" width={100} height={100} className="object-cover border border-black rounded-full"/>
                    </div>
                    <h1 className="text-lg font-bold text-center">M Rifal Prasetyo</h1>
                    <div className="w-full flex justify-center border-b border-gray-200">
                        <div className="flex gap-2 justify-center items-center border border-gray-300 px-2 rounded-full mb-4 ">
                            <div className="h-[10px] w-[10px] rounded-full bg-green-400 animate-ping"/>
                            <h2>Hire me</h2>
                        </div>
                    </div>
                    <div className="w-full mt-2">
                        <ul>
                            {
                                navigationButton.map((item, index) => (
                                    <li key={index} className={clsx("flex gap-2 items-center w-full mb-2  hover:bg-gray-200 rounded-md p-2 transition-all duration-500 ease-in-out cursor-pointer ", activeSection === item.href.replace('/', '') && "bg-gray-200")}>
                                        <item.icon size={20} color="#000" />
                                        <a href={item.href} className="text-sm md:text-lg">{item.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div> 
        </nav>
        <main className="h-auto pt-[7rem] md:w-full container transition-all duration-500 ease-in-out pb-8 overflow-auto">
            Ini mencoba dlu
        </main>
    </div>
  );
}
export default Home;
export const metadata: Metadata = {
    title: "Portofolio Muhammad Rifal Prasetyo",
    description: "Portofolio",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};