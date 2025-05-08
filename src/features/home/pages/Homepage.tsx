'use client'
import type { Metadata } from "next";
import {AddressBook, Article, CalendarDots, DownloadSimple, HouseLine, Info, MapPin, Package} from '@phosphor-icons/react/dist/ssr';
import ThemeSelector from '@/components/ui/ThemeSelector';
import clsx from 'clsx';
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';
import { Link, usePathname } from "@/i18n/navigation";
import { Tooltip } from "@mui/material";


const navigationButton = [
    {
        icon: HouseLine,
        key: "home",
        href: "/#home",
    },
    {
        icon: Info,
        key: 'about',
        href: "/#about",
    },
    {
        icon: Package,
        key: 'project',
        href: "/#projects",
    },
    {
        icon: Article,
        key: 'article',
        href: '/#articles',
    },
    {
        icon: AddressBook,
        key: 'contact',
        href: '/#contact',
    }
];

const progammingLangLogos = [
    {
        name: 'JavaScript',
        icon: '/assets/logos/javascript.svg'
    },
    {
        name: 'PHP',
        icon: '/assets/logos/php.svg'
    },
    {
        name: 'React JS', 
        icon: '/assets/logos/react.svg'
    },
    {
        name: 'Laravel',
        icon: '/assets/logos/laravel.svg'
    },
    {
        name: 'Next JS',
        icon: '/assets/logos/nextjs.svg'
    },
    {
        name: 'Tailwind CSS',
        icon: '/assets/logos/tailwindcss.svg'
    },
    {
        name: 'MySQL',
        icon: '/assets/logos/mysql.svg'
    },
    {
        name: 'PostgreSQL',
        icon: '/assets/logos/postgresql.svg'
    },
    {
        name: 'Github',
        icon: '/assets/logos/github.svg'
    }
];
const sections = navigationButton.map((item) => item.href.replace('/', ''));

const Home = () => {
    const [activeSection, setActiveSection] = useState('home');
    const pathName = usePathname();
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
      const t = useTranslations();
  return (
    <div className="flex w-full text-primary dark:text-primary-dark  md:justify-center transition-all duration-500 ease-in-out lg:w-[70rem] lg:transition-all lg:duration-500 lg:ease-in-out border border-black dark:bg-background-dark">
        <nav className="w-full border border-red-400 border-b-2 md:border-b-0 p-4 justify-start  items-center flex flex-col transition-all fixed  md:dark:bg-opacity-0 md:relative md:max-w-[15rem] md:pt-[5rem] z-50">
            <div className="flex w-full transition-all md:flex-col">
                <div className="w-full flex-col justify-center items-center">
                    <div className="w-full rounded-md flex justify-center mb-2">
                        <Image src={'/assets/rifal.webp'} alt="Rifal" width={100} height={100} className="object-cover border border-black rounded-full"/>
                    </div>
                    <h1 className="text-lg font-bold text-center">{t('Sidebar.name')}</h1>
                    <div className="w-full flex justify-center border-b border-gray-200">
                        <div className="flex gap-2 justify-center items-center border border-gray-300 px-2 rounded-full mb-4 ">
                            <div className="h-[10px] w-[10px] rounded-full bg-green-400 animate-ping"/>
                            <h2>{t('Sidebar.hire_me')}</h2>
                        </div>
                    </div>
                    <div className="w-full mt-2 border-b border-gray-200 mb-2">
                        <ul>
                            {
                                navigationButton.map((item, index) => (
                                    <li key={index} className={clsx("flex gap-2 items-center w-full mb-2  hover:bg-gray-200 dark:hover:bg-primary-dark  rounded-md p-2 transition-all duration-500 ease-in-out cursor-pointer ", activeSection === item.href.replace('/', '') && "bg-gray-200 dark:bg-primary-dark dark:text-primary")}>
                                        <item.icon size={20}  />
                                        <Link href={pathName + item.href} className="text-sm md:text-lg">{t(`Sidebar.navbar.${item.key}`)}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="w-full">
                        <h3 className="text-sm text-center md:text-lg">Rifal | {new Date().getFullYear()}</h3>
                    </div>
                </div>
            </div> 
        </nav>
        <div  className="h-auto pt-[7rem] md:w-full container transition-all duration-500 ease-in-out pb-8 overflow-auto ">
            <main id="home" className="border-b border-secondary dark:border-primary-dark">
                <header className="w-full flex justify-between items-center">
                    <h1 className="text-2xl font-bold">
                        {t('Home.name', { name: 'Rifal' })}
                    </h1>
                    <div>
                        <ThemeSelector/>
                    </div>
                </header>
                <div className="mt-2 w-full">
                    <ul className="decoration-clone list-disc md:gap-4 pl-5">
                        <li>{t('Home.job.fullstack')}</li>
                    </ul>
                </div>
                <div className="w-full mt-2">
                    <p className="leading-loose text-sm md:text-base">
                        {t('Home.description')}
                    </p>
                </div>
                <div className="w-full my-2">
                    <Link href={'/cv'} className="w-fit flex gap-2 items-center bg-secondary dark:bg-secondary-dark text-primary-dark dark:text-primary rounded-md px-4 py-2 hover:bg-secondary-dark dark:hover:bg-secondary transition-all duration-500 ease-in-out">
                        <DownloadSimple size={20} />
                        <h2 className="text-sm md:text-base">{t('Home.download_cv')}</h2>
                    </Link>
                </div>
            </main>
            <section id="about" className="w-full h-auto pt-4 md:w-full container transition-all duration-500 ease-in-out pb-8 overflow-auto">
                <header className="w-full">
                    <h1 className="text-lg md:text-xl font-bold flex items-center gap-2">
                        <Info size={20} />
                        {t('About.title')}
                    </h1>
                    <h2 className="text-sm md:text-lg ">
                        {t('About.subtitle')}
                    </h2>
                </header>
                <div className="w-full mt-2">
                    <div className="w-full flex space-x-2 md:space-x-4 flex-col md:flex-row">
                            <div className="w-full md:w-1/2">
                                <h3 className="font-bold text-sm">{t('About.skills.title')}</h3>
                                <ul className="grid grid-cols-4 gap-2 mt-2 md:border-r border-primary dark:border-primary-dark">
                                    {
                                        progammingLangLogos.map((item, index) => (
                                            <li key={index} className="flex items-center">
                                                <Tooltip title={item.name} placement="top" arrow>
                                                    <Image src={item.icon} alt={item.name} width={30} height={30} className="object-cover text-white" />
                                                </Tooltip>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <h3 className="font-bold text-sm mt-2">{t('About.spotify.title')}</h3>
                                <div className="w-full flex justify-center items-center mt-2">
                                    <iframe className=" rounded-xl" src="https://open.spotify.com/embed/track/0F6nGXMCUbtk8FiXvKi6HK?utm_source=generator" width="100%" height="152"  allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h3 className="font-bold text-sm">{t('About.experience.title')}</h3>
                                <ul className="flex flex-col gap-4 md:gap-8 mt-2">
                                        {
                                            [
                                                {
                                                    date_from: '2024',
                                                    date_to: '2024',
                                                    title: t('About.experience.job1.title'),
                                                    description: t('About.experience.job1.description'),
                                                    location: t('About.experience.job1.location'),
                                                    target_date: t('About.experience.job1.target_date')
                                                },
                                                {
                                                    date_from: '2024',
                                                    date_to: '2024',
                                                    title: t('About.experience.job2.title'),
                                                    description: t('About.experience.job2.description'),
                                                    location: t('About.experience.job2.location'),
                                                    target_date: t('About.experience.job2.target_date')
                                                }
                                            ].map((item, index) => (
                                                <li className="flex flex-col mr-2 text-primary dark:text-primary-dark" key={index}>
                                                    <div className="relative mb-3">
                                                        <div className="bg-primary dark:bg-primary-dark text-primary-foreground px-3 py-2 rounded-full z-10 w-fit">
                                                            <p className="text-sm font-bold text-secondary-dark dark:text-secondary">{item.date_from.toUpperCase()}</p>
                                                        </div>
                                                        <hr className="h-[2px] w-full bg-primary absolute top-1/2 left-1/2 transform -z-20 -translate-x-1/2 -translate-y-1/2" />
                                                    </div>
                                                    <div className="flex gap-2 items-center mb-2">
                                                        <MapPin className="text-primary" size={20}></MapPin>
                                                        <p className="font-thin text-xs md:text-sm ">{item.location}</p>
                                                    </div>
                                                    <p className="font-bold text-sm md:text-lg  ">{item.title}</p>
                                                    <p className="font-light text-xs md:text-sm ">{item.description}</p>
                                                    <div className="flex gap-2 mt-2 items-center">
                                                        <div className="flex gap-2 bg-primary dark:bg-primary-dark items-center px-1 ">
                                                            <CalendarDots size="10" className="text-primary-dark dark:text-primary"></CalendarDots>
                                                            <p className="text-primary-foreground text-xs md:text-sm font-thin md:font-light text-primary-dark dark:text-primary    ">{item.target_date}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                </ul>
                            </div>
                    </div>
                </div>
            </section>
        </div>
        
    </div>
  );
}
export default Home;
export const metadata: Metadata = {
    title: "Portofolio Muhammad Rifal Prasetyo",
    description: "Portofolio",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};