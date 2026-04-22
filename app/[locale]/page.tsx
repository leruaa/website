import Experience from "@/app/components/Experience";
import Title from "@/app/components/Title";
import Education from "@/app/components/Education";
import { MapPin, Mail } from "lucide-react";
import { useExtracted, useFormatter, useLocale } from "next-intl";
import SectionTitle from "../components/SectionTitle";

import OpenSourceEn from "@/app/components/en/OpenSource.mdx";
import OpenSourceFr from "@/app/components/fr/OpenSource.mdx";
import SuccinctEn from "@/app/components/en/Succinct.mdx";
import SuccinctFr from "@/app/components/fr/Succinct.mdx";
import EskerEn from "@/app/components/en/Esker.mdx";
import EskerFr from "@/app/components/fr/Esker.mdx";
import SteriaEn from "@/app/components/en/Steria.mdx";
import SteriaFr from "@/app/components/fr/Steria.mdx";
import AricieEn from "@/app/components/en/Aricie.mdx";
import AricieFr from "@/app/components/fr/Aricie.mdx";

export default function Home() {
  const locale = useLocale();
  const t = useExtracted();
  const format = useFormatter();

  const OpenSource = locale === "fr" ? OpenSourceFr : OpenSourceEn;
  const Succinct = locale === "fr" ? SuccinctFr : SuccinctEn;
  const Esker = locale === "fr" ? EskerFr : EskerEn;
  const Steria = locale === "fr" ? SteriaFr : SteriaEn;
  const Aricie = locale === "fr" ? AricieFr : AricieEn;

  return (
    <div className="prose max-w-none dark:prose-invert">
      <main className="mx-auto max-w-5xl">
        {/* Header */}
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Aurélien Catinon
          </h1>
          <p className="mt-0 mb-0 text-lg font-medium text-zinc-500 dark:text-zinc-400">
            {t("Ingénieur Développement Full Stack")}
          </p>
          <ul className="mt-2 pl-0 flex flex-wrap gap-x-6 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400 print:text-zinc-700">
            <li className="flex items-center gap-1.5">
              <MapPin size={13} />
              <span>Lyon, France</span>
            </li>
            <li className="flex items-center gap-1.5">
              <Mail size={13} />
              <span>aurelien.catinon@gmail.com</span>
            </li>
            <li className="flex items-center gap-1.5">
              <GithubIcon />
              <a href="https://github.com/leruaa">https://github.com/leruaa</a>
            </li>
          </ul>
        </header>

        {/* Summary */}
        <section>
          <SectionTitle>{t("Profil")}</SectionTitle>
          <p>
            {t(
              "Ingénieur en développement logiciel avec prés de 20 ans d’expérience dans l’élaboration de solutions innovantes, ma priorité est de m’épanouir dans un environnement propice au travail, sur des projets motivants avec des technologies et des méthodes de travail modernes.",
            )}
          </p>
        </section>

        {/* Compétences */}
        <section>
          <SectionTitle>{t("Compétences")}</SectionTitle>
          <dl>
            <dt>
              <Title>{t("Langages")}</Title>
            </dt>
            <dd>
              {format.list([
                "Rust",
                "TypeScript",
                "Solidity",
                "C#",
                "C++",
                "SQL",
                "HTML",
                "CSS",
              ])}
            </dd>
            <dt>
              <Title>{t("Stack")}</Title>
            </dt>
            <dd>
              {format.list([
                "Tokio",
                "Axum",
                "Tonic",
                "gRPC",
                "SQLx",
                "React",
                "React Native",
                "Microsoft .NET",
                "Microsoft SQL Server",
                "PostgreSQL",
                "Tailwind",
              ])}
            </dd>
            <dt>
              <Title>{t("Infrastructure")}</Title>
            </dt>
            <dd>
              {format.list([
                "Docker",
                "GitHub Actions",
                "AWS",
                "AWS CDK",
                "Terraform",
              ])}
            </dd>
          </dl>
        </section>

        {/* Open Source */}
        <section>
          <SectionTitle>{t("Open Source")}</SectionTitle>
          <OpenSource />
        </section>

        {/* Experience */}
        <section>
          <SectionTitle>{t("Expériences")}</SectionTitle>
          <Experience
            key="succinct"
            name="succinct"
            role={t("Senior Software Engineer")}
            company="Succinct"
            from={"2024-11"}
          >
            <Succinct />
          </Experience>
          <Experience
            key="esker"
            name="esker"
            role={t("Ingénieur Développement Agile")}
            company="Esker"
            from="2015-02"
            to={"2024-11"}
          >
            <Esker />
          </Experience>
          <Experience
            key="steria"
            name="steria"
            role={t("Ingénieur d’études et développement")}
            company="Steria"
            from="2012-11"
            to={"2015-02"}
          >
            <Steria />
          </Experience>
          <Experience
            key="aricie"
            name="aricie"
            role={t("Ingénieur d’études et développement")}
            company="Aricie"
            from="2006-06"
            to={"2012-11"}
          >
            <Aricie />
          </Experience>
        </section>

        {/* Education */}
        <section>
          <SectionTitle>{t("Formation")}</SectionTitle>
          <Education
            school="IUP GMI d’Avignon"
            degree="Master Informatique Traitement Automatique de l’Information Multimédia"
            from="2004"
            to="2006"
          />
          <Education
            school="IUP GMI d’Avignon"
            degree="Licence Informatique"
            from="2003"
            to="2004"
          />
          <Education
            school="IUT de Valence"
            degree="DUT Informatique des Systèmes Industriels"
            from="2001"
            to="2003"
          />
        </section>
      </main>
    </div>
  );
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  );
}
