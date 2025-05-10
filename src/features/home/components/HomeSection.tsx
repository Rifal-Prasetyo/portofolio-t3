import {DownloadSimple} from '@phosphor-icons/react/dist/ssr';
import ThemeSelector from '@/components/ui/ThemeSelector';
import { useTranslations } from 'next-intl';
import { Link } from "@/i18n/navigation";
import LinkNext from 'next/link'
const HomeSection = () => {
    const t = useTranslations();
    return (
        <main id="home" className="border-b border-secondary dark:border-primary-dark">
                <header className="w-full flex justify-between items-center">
                    <h1 className="text-2xl font-bold">
                        {t('Home.name', { name: 'Rifal' })}
                    </h1>
                    <div>
                        <div className='hidden md:block'>
                            <ThemeSelector/>
                        </div>
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
                    <LinkNext target='_blank' href={'/assets/documents/CV_Muhammad-Rifal-Prasetyo.pdf'} className="w-fit flex gap-2 items-center bg-secondary dark:bg-secondary-dark text-primary-dark dark:text-primary rounded-md px-4 py-2 hover:bg-secondary-dark dark:hover:bg-secondary transition-all duration-500 ease-in-out">
                        <DownloadSimple size={20} />
                        <h2 className="text-sm md:text-base">{t('Home.download_cv')}</h2>
                    </LinkNext>
                </div>
            </main>
    )
}

export default HomeSection;