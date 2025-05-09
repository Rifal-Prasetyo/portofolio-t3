import { ArrowBendUpRight, GithubLogo, Package} from '@phosphor-icons/react/dist/ssr';
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Link } from "@/i18n/navigation";
import { Tooltip } from "@mui/material";

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
const ProjectSection = () => {
    const t = useTranslations();
    return (
        <section className='w-full mt-2 h-auto pt-4 md:w-full container transition-all duration-500 ease-in-out pb-4 overflow-auto border-b border-primary dark:border-primary-dark' id='project'>
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
    )
}
export default ProjectSection;