'use client'
import {AddressBook, ArrowBendUpRight, Article, CalendarDots, DownloadSimple, GithubLogo, HouseLine, Info, MapPin, Package, PlayPause, SkipBack, SkipForward} from '@phosphor-icons/react/dist/ssr';
import ThemeSelector from '@/components/ui/ThemeSelector';
import clsx from 'clsx';
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';
import { Link } from "@/i18n/navigation";
import { Tooltip } from "@mui/material";


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
        href: "#projects",
    },
    {
        icon: Article,
        key: 'article',
        href: '#articles',
    },
    {
        icon: AddressBook,
        key: 'contact',
        href: '#contact',
    }
];

const progammingLangLogos = [
    {
        name: 'JavaScript',
        icon: '/assets/logos/javascript.svg'
    },
    {
        name: 'PHP',
        icon: '/assets/logos/php-light.svg'
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
        icon: '/assets/logos/nextjs-light.svg'
    },
    {
        name: 'Tailwind CSS',
        icon: '/assets/logos/tailwindcss.svg'
    },
    {
        name: 'MySQL',
        icon: '/assets/logos/mysql-light.svg'
    },
    {
        name: 'PostgreSQL',
        icon: '/assets/logos/postgresql.svg'
    },
    {
        name: 'Github',
        icon: '/assets/logos/github-light.svg',
    }
];
const educations =  [
    {
        image: '/assets/img/educations/eskasaba.png',
        name: 'SMK Negeri 1 Bangsri',
        learn_date: '2022 - 2025',
    },
    {
        image: '/assets/img/educations/ikhlas_beramal.png',
        name: 'MTs Negeri 2 Jepara',
        learn_date: '2019 - 2022',
    }
];
const projects = [
    {
        title: "Web SMK NEGERI 1 BANGSRI dengan ReactJS dan Laravel",
        excerpt: "Website untuk SMK Negeri 1 Bangsri dengan tech stack ReactJS dan Laravel dengan tampilan yang lebih fresh, responsif, dan memiliki mode tema gelap terang",
        image: '/assets/img/projects/173894010213.Screenshot.png',
        link_preview: 'https://smkn1bangsri.sch.id',
        link_github: 'https://github.com',
        stack: ['laravel', 'react', 'javascript']
    },
    {
        title: "Bogeng Company Landing Page",
        excerpt: "Website ini adalah website yang dubuat untuk tujuan company profile dari perusahaan PT. Bogeng Media Prima. Website ini dibangun dengan teknologi Laravel dan TailwindCSS.",
        image: '/assets/img/projects/172293605649.Screenshot.png',
        link_preview: 'https://bogeng.tripleer.my.id',
        link_github: 'https://github.com',
        stack: ['laravel']
    },
    {
        title: "WhatsappQue - WhatsappAPI for Push Notificaton",
        excerpt: "WhatsappQue is a RestAPI service for sending messages via Whatsapp. This is useful for use as an OTP code from your own apps or other things. Apart from that, WhatsappQue also has other features th...",
        image: '/assets/img/projects/171964839618.66601537841ed.png',
        link_preview: 'https://waque.rifalkom.my.id',
        link_github: 'https://github.com',
        stack: ['express']
    }
];
const sections = navigationButton.map((item) => item.key);

const Home = () => {
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
                                    <li key={index} className={clsx("flex gap-2 items-center w-full mb-2  hover:bg-gray-200 dark:hover:bg-primary-dark  rounded-md p-2 transition-all duration-500 ease-in-out cursor-pointer ", activeSection === item.key && "bg-gray-200 dark:bg-primary-dark dark:text-primary")}>
                                        <item.icon size={20}  />
                                        <Link href={item.href} className="text-sm md:text-lg">{t(`Sidebar.navbar.${item.key}`)}</Link>
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
            <section id="about" className="w-full h-auto pt-4 md:w-full container transition-all duration-500 ease-in-out pb-4 overflow-auto border-b border-primary dark:border-primary-dark">
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
                                <h3 className="font-bold text-sm mt-2">{t('About.medsos.title')}</h3>
                                <ul className="w-full flex flex-wrap gap-2">
                                    {
                                        [
                                            {
                                                name: 'LinkedIn',
                                                icon: '/assets/logos/linkedin.svg',
                                                href: 'https://www.linkedin.com/in/muhammad-rifal-prasetyo-0b1a1b1a3/',
                                                alias: 'Muhammad Rifal Prasetyo',
                                            },
                                            {
                                                name: 'Instagram',
                                                icon: '/assets/logos/instagram.svg',
                                                href: 'https://instagram.com',
                                                alias: '@Rifal_prasetyo76',
                                            },
                                            {
                                                name: 'Github',
                                                icon: '/assets/logos/github.svg',
                                                href: 'https://github.com',
                                                alias: 'Rifal-Prasetyo'
                                            }
                                        ].map((item, index) => (
                                            <li key={index}>
                                                <Link target="_blank" href={item.href} className="px-4 py-2 flex text-xs items-center gap-2 rounded-md bg-primary dark:bg-primary-dark text-primary-dark dark:text-primary hover:opacity-80 ">
                                                    <Image src={item.icon} width={20} height={20} alt={item.name}  />
                                                    {item.alias}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <h3 className="font-bold text-sm mt-2">{t('About.spotify.title')}</h3>
                                <div className="w-full flex flex-col justify-center items-center mt-2">
                                    <iframe className=" rounded-xl" src="https://open.spotify.com/embed/track/0F6nGXMCUbtk8FiXvKi6HK?utm_source=generator" width="100%" height="152"  allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                    <div className="w-full flex flex-col items-center mt-4">
                                        <div className="w-full bg-primary dark:bg-primary-dark rounded-lg p-4 flex flex-col items-center shadow-md">
                                            <div className="w-12 h-12 rounded-md overflow-hidden mb-4">
                                                <Image
                                                    src="/assets/dummy/album-cover.png"
                                                    alt="Album Cover"
                                                    width={96}
                                                    height={96}
                                                    className="object-cover"
                                                />
                                            </div>
                                            <h4 className="text-lg font-bold dark:text-primary text-primary-dark">
                                                Dummy Song Title
                                            </h4>
                                            <p className="text-sm dark:text-secondary text-secondary-dark">
                                                Dummy Artist Name
                                            </p>
                                            <div className="w-full flex items-center mt-4">
                                                <span className="text-xs darktext-secondary text-secondary-dark">0:00</span>
                                                <input
                                                    type="range"
                                                    className="mx-2 w-full accent-secondary dark:accent-secondary-dark"
                                                    min="0"
                                                    max="100"
                                                    value="50"
                                                    readOnly
                                                />
                                                <span className="text-xs dark:text-secondary text-secondary-dark">3:45</span>
                                            </div>
                                            <div className="w-full flex justify-center items-center mt-4 gap-4">
                                                <button className="p-2 rounded-full dark:bg-secondary bg-secondary-dark dark:text-primary-dark text-primary hover:opacity-80">
                                                    <SkipBack size={20}/> 
                                                </button>
                                                <button className="p-3 rounded-full dark:bg-secondary bg-secondary-dark dark:text-primary-dark text-primary hover:opacity-80">
                                                    <PlayPause size={20} />
                                                </button>
                                                <button className="p-2 rounded-full dark:bg-secondary bg-secondary-dark dark:text-primary-dark text-primary hover:opacity-80">
                                                    <SkipForward size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
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
                                <h3 className="font-bold text-sm mt-2">{t('About.education.title')}</h3>
                                <ul className='w-full mt-2'>
                                    {
                                       educations.map((item, index) => (
                                            <li key={index}>
                                                <div className='px-2 py-2 border-2 mb-2 border-secondary dark:border-secondary-dark rounded-md flex gap-4 items-center'>
                                                    <div className='flex items-center justify-center border-r-2 pr-1 border-secondary dark:border-secondary-dark'>
                                                        <Image src={item.image} alt={item.name} width={60} height={60}  />
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <p className='font-bold text-sm md:text-lg'>{item.name}</p>
                                                        <p className='font-light text-xs md:text-sm'>{item.learn_date}</p>
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
            <section className='w-full mt-2' id='project'>
                <header className="w-full">
                    <h1 className="text-lg md:text-xl font-bold flex items-center gap-2">
                        <Package size={20} />
                        {t('Project.title')}
                    </h1>
                    <h2 className="text-sm md:text-lg ">
                        {t('Project.subtitle')}
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-2'>
                        {
                            projects.map((item, index) => (
                                <div className='flex flex-col overflow-hidden rounded-md border-b border-l border-r border-dashed border-primary dark:border-primary-dark' key={index}>
                                    <Image src={item.image} alt={item.title} width={640} height={320} className='aspect-video object-cover' />
                                    <div className='p-2 flex flex-col mb-2  '>
                                        <h5 className='font-bold text-sm md:text-lg'>{item.title}</h5>
                                        <p className='font-light text-xs md:text-sm '>
                                            {item.excerpt}
                                        </p>
                                        <div className='flex gap-2 mt-2'>
                                            {
                                                item.stack.map((item, index) => (
                                                    <Tooltip title={item} key={index}>
                                                        <Image src={`/assets/logos/${item}.svg`}  alt={item} height={20} width={20} />  
                                                    </Tooltip>
                                                ))
                                            }
                                        </div>
                                        <div className='flex gap-2 mt-2'>
                                            <Link target='_blank' href={item.link_preview} className='flex items-center gap-2 p-2 rounded-md border border-dashed border-primary dark:border-primary-dark text-primary dark:text-primary-dark hover:opacity-80'>
                                                <ArrowBendUpRight size={20}/>
                                                {t('Project.link_preview')}
                                            </Link>
                                            <Link target='_blank' href={item.link_github} className='flex items-center gap-2 p-2 rounded-md border border-dashed border-gray-700 dark:border-primary-dark text-gray-700 dark:text-primary-dark hover:opacity-80'>
                                                <GithubLogo size={20}/>
                                                {t('Project.link_github')}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </header>
            </section>
        </div>
        
    </div>
  );
}
export default Home;