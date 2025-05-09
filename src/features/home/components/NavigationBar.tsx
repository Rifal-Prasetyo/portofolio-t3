'use client'
import {AddressBook, Article, HouseLine, Info, List, Package} from '@phosphor-icons/react/dist/ssr';
import ThemeSelector from '@/components/ui/ThemeSelector';
import clsx from 'clsx';
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';
import { Link } from "@/i18n/navigation";

const navigationButton = [
    {
        icon: HouseLine,
        key: "home",
        href: "#home",
    },
    {
        icon: Info,
        key: 'about',
        href: "#about",
    },
    {
        icon: Package,
        key: 'project',
        href: "#project",
    },
    {
        icon: Article,
        key: 'article',
        href: '#article',
    },
    {
        icon: AddressBook,
        key: 'contact',
        href: '#contact',
    }
];

const sections = navigationButton.map((item) => item.key);
 const NavigationBarHome = () => {
    const [activeSection, setActiveSection] = useState('home');
        // useEffect(() => {
    
        //     console.log(activeSection);
        // }, [activeSection]);
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
    const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
    const handleSidebarButton = () => {
      if(isOpenSidebar) {
          return setIsOpenSidebar(false);
      }
      return setIsOpenSidebar(true);
    };
    return (
        <nav className={clsx("w-full  border-b-2 md:border-b-0 p-4 justify-start  items-center flex flex-col transition-all ease-in-out duration-700 fixed  md:dark:bg-opacity-0 md:relative md:max-w-[15rem] md:pt-[5rem] z-50 bg-primary-dark/65 md:bg-primary-dark/0 backdrop-blur-lg overflow-hidden", !isOpenSidebar && 'min-h-0', isOpenSidebar && 'min-h-screen')}>
            <div className="flex w-full transition-all md:flex-col justify-between md:justify-center ">
                    <div className='flex justify-start items-center md:flex-col md:justify-center gap-2 md:gap-0'>
                        <Image src={'/assets/rifal.webp'} alt="Rifal" width={100} height={100} className={clsx("object-cover border border-black rounded-full w-[40px] md:w-auto transition-all duration-200 ", isOpenSidebar && 'scale-125')}/>
                        <h1 className="text-sm md:text-lg font-bold text-left md:text-center">{t('Sidebar.name')}</h1>
                    </div>
                    <div className='flex md:hidden gap-2 items-center '>
                        <ThemeSelector/>
                        <button type='button' className={clsx('bg-primary-dark dark:bg-secondary text-gray-900 dark:text-gray-100 p-2 rounded-md shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300 ease-in-out', isOpenSidebar && 'rotate-90')} onClick={() => handleSidebarButton()}>
                            <List/>
                        </button>
                    </div>
                    <div className="hidden w-full md:flex justify-center border-b border-gray-200 ">
                        <div className="flex gap-2 justify-center items-center border border-gray-300 px-2 rounded-full mb-4 ">
                            <div className="h-[10px] w-[10px] rounded-full bg-green-400 animate-ping"/>
                            <h2>{t('Sidebar.hire_me')}</h2>
                        </div>
                    </div>
                    <div className="w-full mt-2 border-b border-gray-200 mb-2 hidden md:block">
                        <ul>
                            {
                                navigationButton.map((item, index) => (
                                    <li key={index} className={clsx("flex gap-2 items-center w-full mb-2  hover:bg-gray-200 dark:hover:bg-primary-dark  rounded-md p-2 transition-all duration-500 ease-in-out cursor-pointer ", activeSection === item.key && "bg-gray-200 dark:bg-primary-dark dark:text-primary")}>
                                        <item.icon size={20}  />
                                        <Link href={item.href} className="text-sm md:text-lg">{t(`Sidebar.navbar.${item.key}`)}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="w-full hidden md:block">
                        <h3 className="text-sm text-center md:text-lg">Rifal | {new Date().getFullYear()}</h3>
                    </div>
            </div> 
            <div className={clsx("w-full mt-5 border-b border-gray-200 overflow-hidden transition-all duration-1000 ease-in-out", !isOpenSidebar && ' hidden opacity-0', isOpenSidebar && 'block opacity-100')}>
                        <ul>
                            {
                                navigationButton.map((item, index) => (
                                    <li key={index} className={clsx("flex gap-2 items-center w-full mb-2  hover:bg-gray-200 dark:hover:bg-primary-dark  rounded-md p-2 transition-all duration-500 ease-in-out cursor-pointer ", activeSection === item.key && "bg-gray-200 dark:bg-primary-dark dark:text-primary")}>
                                        <item.icon size={20}  />
                                        <Link href={item.href} className="text-sm md:text-lg" onClick={() => handleSidebarButton()}>{t(`Sidebar.navbar.${item.key}`)}</Link>
                                    </li>
                                ))
                            }
                        </ul>
            </div>
        </nav>
    )
}

export default NavigationBarHome;