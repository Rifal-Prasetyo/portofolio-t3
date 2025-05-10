import NavigationBarHome from '../components/NavigationBar';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import MotivationSection from '../components/MotivationSection';
import ArticleSectionRev from '../components/ArticleSectionRev';

const Home = () => {
  return (
    <div className="w-full h-screen dark:bg-background-dark  border-black transition-all duration-500 ease-in-out lg:flex lg:justify-center">
      <div className="flex w-full  md:justify-center transition-all duration-500 ease-in-out lg:w-[70rem] lg:transition-all lg:duration-500 lg:ease-in-out">
        <div className="flex w-full text-primary dark:text-primary-dark  md:justify-center transition-all duration-500 ease-in-out lg:w-[70rem] lg:transition-all lg:duration-500 lg:ease-in-out">
          <NavigationBarHome />
          <div className="h-auto pt-[7rem] md:w-full container transition-all duration-500 ease-in-out pb-8 overflow-auto px-4 md:px-0">
            <HomeSection />
            <AboutSection />
            <ProjectSection />
            <ArticleSectionRev />
            <ContactSection />
            <MotivationSection />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;