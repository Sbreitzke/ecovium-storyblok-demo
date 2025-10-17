import "../styles/globals.css";
import "../styles/styleguide.css";
import "../styles/hp-design.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { LanguageProvider } from "../context/LanguageContext";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import HeroSection from "../components/HeroSection";
import CustomerCard from "../components/CustomerCard";
import ServiceCategory from "../components/ServiceCategory";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  hero_section: HeroSection,
  customer_card: CustomerCard,
  service_category: ServiceCategory,
};

storyblokInit({
  accessToken: "6lMkFYbpzLjY6HAOlz5yUQtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: 'eu'
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
