import {AddressBook, Envelope} from '@phosphor-icons/react/dist/ssr';
import { useTranslations } from 'next-intl';
import { Link } from "@/i18n/navigation";
const ContactSection  = () => {
    const t = useTranslations();
    return (
                    <section className='w-full h-auto pt-4 md:w-full container transition-all duration-500 ease-in-out pb-4 overflow-auto border-b border-primary dark:border-primary-dark mt-2' id='contact'>
                        <header className="w-full">
                            <h1 className="text-lg md:text-xl font-bold flex items-center gap-2">
                                <AddressBook size={20} />
                                {t('Contact.title')}
                            </h1>
                            <h2 className="text-sm md:text-lg ">
                                {t('Contact.subtitle')}
                            </h2>
                            <div className='mt-2'>
                                <Link target="_blank" href={'mailto:hrdsdms765@gmail.com'} className="px-4 py-2 w-fit flex text-xs items-center gap-2 rounded-md bg-primary dark:bg-primary-dark text-primary-dark dark:text-primary hover:opacity-80 ">
                                    <Envelope size={20} />
                                    {t('Contact.contact_mail')}
                                </Link>
                            </div>
                        </header>
                    </section>
    )
}
export default ContactSection;