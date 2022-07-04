import Line from "components/Line";
import { usePalette } from "hooks/use-palette";
import expriences from "utils/expriences.json";
import skills from "utils/skills.json";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from 'next/image'

const HomePage = () => {
  const { palette } = usePalette();
  const { t } = useTranslation("common");
  const router = useRouter();
  const renderPaletteRing = () => {
    switch (palette) {
      case "primary":
        return "ring-primary";
      case "red":
        return "ring-red";
      case "yellow":
        return "ring-yellow";
      case "blue":
        return "ring-blue";
      case "green":
        return "ring-green";
      default:
        return "ring-primary";
    }
  };
  const renderPaletteColor = () => {
    switch (palette) {
      case "primary":
        return "text-primary";
      case "red":
        return "text-red";
      case "yellow":
        return "text-yellow";
      case "blue":
        return "text-blue";
      case "green":
        return "text-green";
      default:
        return "text-primary";
    }
  };
  return (
    <div>
      <section className="flex justify-between gap-8 items-center flex-col-reverse xl:flex-row lg:flex-row">
        <div>
          <h2 className="title"> {t("personal-info-title")}</h2>
          <ul className="info-list">
            <li className="flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span>
                <span>{t("birthdate.label")} </span>
                {t("birthdate.value")}
              </span>
            </li>
            <li className="flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="text-zinc-400">
                <span className="text-zinc-300 font-medium">{t("education.label")} </span>
                {t("education.value")}
              </span>
            </li>
            <li className="flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="text-zinc-400">
                <span className="text-zinc-300 font-medium">{t("military-service.label")} </span>
                {t("military-service.value")}
              </span>
            </li>
            <li className="flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="text-zinc-400">
                <span className="text-zinc-300 font-medium">{t("location.label")} </span>
                {t("location.value")}
              </span>
            </li>
            <li className="flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="text-zinc-400">
                <span className="text-zinc-300 font-medium">{t("email.label")} </span>
                {t("email.value")}
              </span>
            </li>
            <li className="flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="text-zinc-400">
                <span className="text-zinc-300 font-medium">{t("mobile.label")} </span>
                {t("mobile.value")}
              </span>
            </li>
          </ul>
        </div>
        <div className={`ring-2 p-1 rounded-sm ${renderPaletteRing()}`}>
          <img src="/profile-3.jpeg" className="object-cover rounded-sm" width="256px" height='320px' loading="lazy" draggable="false" />
        </div>
      </section>
      <Line />
      <h2 className="title">{t("skills-title")}</h2>
      <ul className="flex items-start flex-wrap gap-8 my-8">
        {skills.map((item) => (
          <li className="flex items-center gap-3">
            <div className={renderPaletteColor()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span>
              <span className="font-semibold text-zinc-600 dark:text-zinc-200">
                {item.label}
              </span>{" "}
              <span className="text-sm text-zinc-400 font-light">
                {router.locale === 'en' ? item.en_value : item.fa_value}
              </span>
            </span>
          </li>
        ))}
      </ul>
      <Line />
      <h2 className="title">{t("experience-title")}</h2>
      <ul className={`time-lines ${palette} ${router.locale === 'en' ? 'ltr' : 'rtl'}`}>
        {expriences.map((exprience) => (
          <li className="text-sm">
            <div className="text-zinc-500 dark:text-zinc-400 font-medium pb-1">
              {exprience.date}
            </div>
            <p className="dark:text-zinc-300">
              <span className={`font-medium ${renderPaletteColor()}`}>
                {exprience.name}
              </span>{" "}
              / <span>{exprience.title}</span>
            </p>
          </li>
        ))}
      </ul>
      <Line />
      <h2 className="title">{t("profiles-title")}</h2>
      <ul className="flex flex-col gap-8 my-8">
        <li className="flex items-center gap-4 xl:text-base lg:text-base text-sm">
          <img src="/icons/github.svg" className="w-6 h-6" />
          <span className="font-medium dark:text-zinc-200 text-zinc-600">
            {t("socials.github-title")}
          </span>
          <a
            href="https://github.com/soheilghanbary"
            rel="nofollow sponsored"
            className="cursor-pointer dark:text-teal-400 text-teal-500 underline"
          >
            https://github.com/soheilghanbary
          </a>
        </li>
        <li className="flex items-center gap-4 xl:text-base lg:text-base text-sm">
          <img src="/icons/linkedin.svg" className="w-6 h-6" />
          <span className="font-medium dark:text-zinc-200 text-zinc-600">
            {t("socials.linkedin-title")}
          </span>
          <a
            href="https://www.linkedin.com/in/soli-ghanbary"
            rel="nofollow sponsored"
            className="cursor-pointer dark:text-teal-400 text-teal-500 underline"
          >
            https://www.linkedin.com/in/soli-ghanbary
          </a>
        </li>
        <li className="flex items-center gap-4 xl:text-base lg:text-base text-sm">
          <img src="/icons/twitter.svg" className="w-6 h-6" />
          <span className="font-medium dark:text-zinc-200 text-zinc-600">
            {t("socials.twitter-title")}
          </span>
          <a
            href="https://twitter.com/soli_ghanbary"
            rel="nofollow sponsored"
            className="cursor-pointer dark:text-teal-400 text-teal-500 underline"
          >
            https://twitter.com/soli_ghanbary
          </a>
        </li>
        <li className="flex items-center gap-4 xl:text-base lg:text-base text-sm">
          <img src="/icons/instagram.svg" className="w-6 h-6" />
          <span className="font-medium dark:text-zinc-200 text-zinc-600">
            {t("socials.instagram-title")}
          </span>
          <a
            href="https://www.instagram.com/soheil__ghanbary/"
            rel="nofollow sponsored"
            className="cursor-pointer dark:text-teal-400 text-teal-500 underline"
          >
            https://www.instagram.com/soheil__ghanbary
          </a>
        </li>
      </ul>
    </div>
  );
};

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default HomePage;
