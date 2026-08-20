import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex h-full w-full flex-col bg-gradient-to-b from-[#4E54C8] to-[#A8C0FF] p-[32px] max-md:pb-[32px] max-md:pl-[20px] max-md:pr-[20px] max-md:pt-[32px]">
      <div className="text-[26px] text-white max-md:text-[22px]">
        {t("common.appName")}
      </div>
      <div className="flex h-full flex-1 flex-col items-center justify-center">
        <div className="text-center text-[48px] text-white max-md:text-[26px]">
          {t("home.hero.title")}
        </div>
        <div className="text-center text-[24px] text-white max-md:text-[16px]">
          {t("home.hero.subtitle")}
        </div>
      </div>
import Hero from "@/components/book/Hero";
      import Hero from "@/components/book/Hero";
import BookSynopsis from "@/components/book/BookSynopsis";
import CatalogEntry from "@/components/book/CatalogEntry";
import AuthorProfile from "@/components/book/AuthorProfile";
import LegacySection from "@/components/book/LegacySection";
import SiteFooter from "@/components/book/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background">
      <Hero />
      <BookSynopsis />
      <CatalogEntry />
      <AuthorProfile />
      <LegacySection />
      <SiteFooter />
      </div>
  );
};

export default Index;
