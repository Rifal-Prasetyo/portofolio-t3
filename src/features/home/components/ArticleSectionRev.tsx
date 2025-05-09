import { Article, ArrowBendUpRight } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

const ArticleSectionRev  = () => {
    const t = useTranslations();
    return (
    <section className='w-full h-auto pt-4 md:w-full container transition-all duration-500 ease-in-out pb-4 overflow-auto border-b border-primary dark:border-primary-dark mt-2' id='article'>
                <header className="w-full">
                    <h1 className="text-lg md:text-xl font-bold flex items-center gap-2">
                        <Article size={20} />
                        {t('Article.title')}
                    </h1>
                    <h2 className="text-sm md:text-lg ">
                        {t('Article.subtitle')}
                    </h2>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-2 mt-2'>
                        {
                            [
                                {
                                    image: '/assets/img/articles/img1.jpg',
                                    title: 'Aku NPC bisa apa',
                                    excerpt: 'Katanya masa SMA paling banyak kenangannya, tapi tidak disaya. dahlah :(',
                                    slug: 'aku_npc_bisa_apa',
                                },
                                {
                                    image: '/assets/img/articles/img2.jpg',
                                    title: 'Ngedit Dulu',
                                    excerpt: 'Katanya masa SMA paling banyak kenangannya, tapi tidak disaya. dahlah :(',
                                    slug: 'ngedit_dulu',
                                }
                            ].map((item, index) => (
                                <div className='flex p-2 gap-3 items-center overflow-hidden rounded-md border border-dashed border-primary dark:border-primary-dark' key={index}>
                                    <Image src={item.image} alt={item.title} width={100} height={100} className='aspect-square object-cover rounded-md'/>
                                    <div className='flex flex-col '>
                                        <h5 className='font-bold text-sm md:text-lg'>{item.title}</h5>
                                        <p className='font-light text-xs md:text-sm '>
                                            {item.excerpt}
                                        </p>
                                        <Link  href={"/articles" + item.slug} className='flex items-center gap-2 p-2 rounded-md border border-dashed border-primary dark:border-primary-dark text-primary dark:text-primary-dark hover:opacity-80'>
                                                <ArrowBendUpRight size={20}/>
                                                {t('Article.link')}
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </header>
            </section>
    )
}

export default ArticleSectionRev;