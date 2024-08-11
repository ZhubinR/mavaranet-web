
import PageTitle from "./layouts/PageTitle";
import ScrollDown from "./layouts/ScrollDown";

const HeroSection = () => {
  return (
    <section className="section hero">
      <div className="hero_effect">
        <PageTitle
          title={`آژانس برندینگ ماورانت`}
          subTitle={`در کنارتان میمانیم`}
        />
        <ScrollDown />
      </div>
    </section>
  );
};
export default HeroSection;
