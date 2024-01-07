import Container from "./components/Container";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import images from "../src/assets/images";
import HeroContent from "./components/HeroContent";
import Features from "./components/Features";
import FeaturesContent from "./components/FeaturesContent";
import FeaturesDescription from "./components/FeaturesDescription";
import FeaturesDetails from "./components/FeaturesDetails";
import FeaturesImage from "./components/FeaturesImage";
import BestFeatures from "./components/BestFeatures";
import BestFeaturesCardContainer from "./components/BestFeaturesCardContainer";
import BestFeaturesCard from "./components/BestFeaturesCard";
import HowItWorks from "./components/HowItWorks";
import HowItWorksImage from "./components/HowItWorksImage";
import HowItWorksDetails from "./components/HowItWorksDetails";
import HowItWorksSteps from "./components/HowItWorksSteps";
import Stats from "./components/Stats";
import StatsContent from "./components/StatsContent";
import ScreenShot from "./components/ScreenShot";
import ScreenShotSlider from "./components/ScreenShotSlider";
import DownloadPlatforms from "./components/DownloadPlatforms";
import PricePlanning from "./components/PricePlanning";
import InformationBanner from "./components/InformationBanner";
import LovelyTeamMembers from "./components/LovelyTeamMembers";

const App = () => {
  return (
    <Container>
      <Hero images={images}>
        <Navbar images={images} />
        <HeroContent />
      </Hero>
      <Features>
        <FeaturesContent images={images} />
      </Features>
      <FeaturesDescription>
        <FeaturesDetails />
        <FeaturesImage images={images} />
      </FeaturesDescription>
      <BestFeatures>
        <BestFeaturesCardContainer>
          <BestFeaturesCard />
        </BestFeaturesCardContainer>
      </BestFeatures>
      <HowItWorks>
        <HowItWorksImage images={images} />
        <HowItWorksDetails>
          <HowItWorksSteps />
        </HowItWorksDetails>
      </HowItWorks>
      <Stats images={images}>
        <StatsContent />
      </Stats>
      <ScreenShot>
        <ScreenShotSlider images={images} />
      </ScreenShot>
      <DownloadPlatforms />
      <PricePlanning />
      <InformationBanner />
      <LovelyTeamMembers images={images} />
    </Container>
  );
};

export default App;
