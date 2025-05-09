const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="w-full h-screen dark:bg-background-dark  border-black transition-all duration-500 ease-in-out lg:flex lg:justify-center">
        <div className="flex w-full  md:justify-center transition-all duration-500 ease-in-out lg:w-[70rem] lg:transition-all lg:duration-500 lg:ease-in-out">
          <div className="flex w-full text-primary dark:text-primary-dark  md:justify-center transition-all duration-500 ease-in-out lg:w-[70rem] lg:transition-all lg:duration-500 lg:ease-in-out">
          {children}
          </div>
        </div>
      </div>
    );
  }
  
 export default HomeLayout;
