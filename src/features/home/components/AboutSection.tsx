import { CalendarDots, Info, MapPin } from '@phosphor-icons/react/dist/ssr';
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Link } from "@/i18n/navigation";
import { Tooltip } from "@mui/material";
import SpotifyPlaying from './About/SpotifyPLaying';
import MusicPlayer from './About/MusicPlayer';
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
const educations = [
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
const medsos = [
    {
        name: 'LinkedIn',
        icon: '/assets/logos/linkedin.svg',
        href: 'https://www.linkedin.com/in/muhammad-rifal-prasetyo-0b1a1b1a3/',
        alias: 'Muhammad Rifal Prasetyo',
    },
    {
        name: 'Instagram',
        icon: '/assets/logos/instagram.svg',
        href: 'https://instagram.com/rifal_prasetyo76',
        alias: '@Rifal_prasetyo76',
    },
    {
        name: 'Github',
        icon: '/assets/logos/github.svg',
        href: 'https://github.com/rifal-prasetyo',
        alias: 'Rifal-Prasetyo'
    }
];
const AboutSection = () => {
    const t = useTranslations();
    return (
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
                        <h3 className="font-bold text-sm mt-4 md:mt-2">{t('About.medsos.title')}</h3>
                        <ul className="w-full flex flex-wrap gap-2">
                            {
                                medsos.map((item, index) => (
                                    <li key={index}>
                                        <Link target="_blank" href={item.href} className="px-4 py-2 flex text-xs items-center gap-2 rounded-md bg-primary dark:bg-primary-dark text-primary-dark dark:text-primary hover:opacity-80 ">
                                            <Image src={item.icon} width={20} height={20} alt={item.name} />
                                            {item.alias}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <h3 className="font-bold text-sm mt-4 md:mt-2">{t('About.spotify.title')}</h3>
                        <div className="w-full flex flex-col justify-center items-center mt-2">
                            <SpotifyPlaying />
                            <MusicPlayer />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h3 className="font-bold text-sm mt-4 md:mt-0">{t('About.experience.title')}</h3>
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
                        <h3 className="font-bold text-sm mt-4 md:mt-2">{t('About.education.title')}</h3>
                        <ul className='w-full mt-2'>
                            {
                                educations.map((item, index) => (
                                    <li key={index}>
                                        <div className='px-2 py-2 border-2 mb-2 border-secondary dark:border-secondary-dark rounded-md flex gap-4 items-center'>
                                            <div className='flex items-center justify-center border-r-2 pr-1 border-secondary dark:border-secondary-dark'>
                                                <Image src={item.image} alt={item.name} width={60} height={60} />
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
    )
}
export default AboutSection;