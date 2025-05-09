import NavigationBarHome from '../components/NavigationBar';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import MotivationSection from '../components/MotivationSection';
import ArticleSectionRev from '../components/ArticleSectionRev';

const Home = () => {
  return (
    <>
        <NavigationBarHome />
        <div  className="h-auto pt-[7rem] md:w-full container transition-all duration-500 ease-in-out pb-8 overflow-auto px-4 md:px-0">
            <HomeSection />
            <AboutSection/>
            <ProjectSection/>
            <ArticleSectionRev />
            <ContactSection />
            <MotivationSection/>
        </div>    
    </>
  );
}
export default Home;