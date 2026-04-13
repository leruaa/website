import Experience from "@/app/components/Experience";
import Title from "@/app/components/Title";
import Education from "@/app/components/Education";
import { MapPin, Mail } from "lucide-react";
import Project from "../components/Project";
import { useExtracted, useFormatter } from "next-intl";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  const t = useExtracted();
  const format = useFormatter();

  return (
    <div className="min-h-screen text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-950 py-12 px-4 print:bg-white print:p-0">
      <main className="mx-auto max-w-4xl bg-white dark:bg-zinc-900 shadow-sm rounded-xl overflow-hidden print:shadow-none print:rounded-none print:max-w-none">
        {/* Header */}
        <header className="px-8 pt-10 pb-4">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Aurélien Catinon
          </h1>
          <p className="mt-1 text-lg font-medium text-zinc-500 dark:text-zinc-400">
            {t("Ingénieur Développement Full Stack")}
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400 print:text-zinc-700">
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

        <div className="px-8 py-4 print-block">
          <div className="space-y-10">
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
                <dd className="ml-4">
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
                <dd className="ml-4">
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
                <dd className="ml-4">
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
              <ul className="list-disc list-inside ml-4">
                <li>
                  {t.rich(
                    "Nombreuses contributions aux projets Open Source <reth>Reth</reth>, <revm>Revm</revm> et <alloy>Alloy</alloy>.",
                    {
                      reth: (chunks) => (
                        <a href="https://github.com/paradigmxyz/reth/pulls?q=is%3Apr+author%3Aleruaa+is%3Aclosed">
                          {chunks}
                        </a>
                      ),
                      revm: (chunks) => (
                        <a href="https://github.com/bluealloy/revm/pulls?q=is%3Apr+is%3Aclosed+author%3Aleruaa">
                          {chunks}
                        </a>
                      ),
                      alloy: (chunks) => (
                        <a href="https://github.com/alloy-rs/alloy/pulls?q=is%3Apr+is%3Aclosed+author%3Aleruaa">
                          {chunks}
                        </a>
                      ),
                    },
                  )}
                </li>
                <li>
                  {t.rich(
                    "Création et maintenance des crates Rust <erc20>alloy-erc20</erc20> et <mev>alloy-mev</mev>.",
                    {
                      erc20: (chunks) => (
                        <a href="https://github.com/leruaa/alloy-erc20">
                          {chunks}
                        </a>
                      ),
                      mev: (chunks) => (
                        <a href="https://github.com/leruaa/alloy-mev">
                          {chunks}
                        </a>
                      ),
                    },
                  )}
                </li>
              </ul>
            </section>

            {/* Experience */}
            <section>
              <SectionTitle>{t("Expériences")}</SectionTitle>
              <Experience
                key={t("Succinct")}
                role={t("Senior Software Engineer")}
                company={t("Succinct")}
                from={"2024-11"}
              >
                <Project
                  title={t(
                    "Intégration de la machine virtuelle SP1 à plusieurs projets",
                  )}
                  stack={["Rust", "Solidity", "CI/CD (GitHub Actions)"]}
                >
                  <ul className="list-disc ml-4">
                    <li>
                      {t(
                        "Implémentation de systèmes permettant de générer des preuves ZK pour différents clients, dans le cadre de migration vers SP1.",
                      )}
                    </li>
                    <li>
                      {t.rich(
                        "Ajout de fonctionnalités et maintenance de différents projets Open Source utilisant SP1, comme <rsp>RSP</rsp> et <cc>SP1 Contract Call</cc>.",
                        {
                          rsp: (chunks) => (
                            <a href="https://github.com/succinctlabs/rsp">
                              {chunks}
                            </a>
                          ),
                          cc: (chunks) => (
                            <a href="https://github.com/succinctlabs/sp1-contract-call">
                              {chunks}
                            </a>
                          ),
                        },
                      )}
                    </li>
                  </ul>
                </Project>
                <Project
                  title={t(
                    "Développement de la fonctionnalité operator fee pour Optimism",
                  )}
                  stack={["Rust", "Go"]}
                >
                  <ul className="list-disc ml-4">
                    <li>{t("Collaboration avec OPLabs")}</li>
                    <li>
                      {t(
                        "Prise en charge du projet de bout en bout, de la rédaction des specs jusqu'à l'implémentation et les tests.",
                      )}
                    </li>
                  </ul>
                </Project>
                <Project
                  title={t(
                    "Développement de la fonctionnalité private proving pour SP1",
                  )}
                  stack={["Rust", "gRPC", "Docker", "AWS CDK"]}
                >
                  <ul className="list-disc ml-4">
                    <li>
                      {t(
                        "Génération rapide de preuves sur GPUs sans révéler les inputs à un tiers, grâce à l’utilisation de Trusted Execution Environments (TEEs).",
                      )}
                    </li>
                    <li>
                      {t(
                        "Mise en place d’un système distribué avec gRPC permettant d’envoyer des requêtes de génération de preuves à des GPUs situés dans des TEEs.",
                      )}
                    </li>
                  </ul>
                </Project>
                <Project
                  title={t(
                    "Développement d’un SDK pour vérifier la provenance de photos",
                  )}
                  stack={[
                    "Rust",
                    "TypeScript",
                    "React",
                    "React Native",
                    "Terraform",
                  ]}
                >
                  <ul className="list-disc ml-4">
                    <li>
                      {t(
                        "Utilisation de SP1 pour prouver qu’une photo est authentique (non générée par IA), en tirant partie des fonctionnalités the iOS et Android pour certifier que la photo provient d’un capteur photo.",
                      )}
                    </li>
                    <li>
                      {t(
                        "Création d’un SDK en React Native permettant d’intégrer les preuve dans les meta data des photos en utilisant le protocole C2PA.",
                      )}
                    </li>
                  </ul>
                </Project>
              </Experience>
              <Experience
                key={t("Esker")}
                role={t("Ingénieur Développement Agile")}
                company={t("Esker")}
                from="2015-02"
                to={"2024-11"}
              >
                <Project
                  title={t(
                    "Développement de fonctionnalités pour une plateforme SaaS",
                  )}
                  stack={["ASP.NET", "C#", "C++", "TypeScript"]}
                >
                  <ul className="list-disc ml-4">
                    <li>
                      {t(
                        "Developpement au sien d'une équipe agile avec la métodologie Scrum",
                      )}
                    </li>
                    <li>
                      {t(
                        "Contribution au front-end et au back-end, avec rédaction de tests unitaires et automatisés pour garantir la qualité du code.",
                      )}
                    </li>
                    <li>
                      {t(
                        "Participation aux choix de conception technique en collaboration avec le Product Owner.",
                      )}
                    </li>
                  </ul>
                </Project>
              </Experience>
              <Experience
                key={t("Steria")}
                role={t("Ingénieur d’études et développement")}
                company={t("Steria")}
                from="2012-11"
                to={"2015-02"}
              >
                <Project
                  title={t("TMA pour la Région Rhône-Alpes")}
                  stack={[
                    "ASP.NET",
                    "C#",
                    "Oracle",
                    "SSRS 2008",
                    "SharePoint 2007",
                  ]}
                >
                  <ul className="list-disc ml-4">
                    <li>
                      {t(
                        "Référent technique .NET au sein d'une équipe de 20 personnes, avec encadrement de développeurs juniors.",
                      )}
                    </li>
                    <li>
                      {t(
                        "Pilotage de projets de bout en bout : analyse du besoin, rédaction de spécifications (évolutions de 20 à 100 jours), maintenance et évolutions des intranets .NET et SharePoint 2007 du domaine Subventions, sur des applications à forte complexité fonctionnelle.",
                      )}
                    </li>
                  </ul>
                </Project>
              </Experience>
              <Experience
                key={t("Aricie")}
                role={t("Ingénieur d’études et développement")}
                company={t("Aricie")}
                from="2006-06"
                to={"2012-11"}
              >
                <Project
                  title={t(
                    "Développement full-stack de sites et applications web",
                  )}
                  stack={[
                    "ASP.NET",
                    "C#",
                    "VB.NET",
                    "SQL Server",
                    "CMS DotNetNuke",
                  ]}
                >
                  <ul className="list-disc ml-4">
                    <li>
                      {t(
                        "Pour des clients variés (Eurosport, Citigroup, Pfizer, FFB…) au sein d'équipes de 2 à 10 personnes",
                      )}
                    </li>
                    <li>
                      {t(
                        "Référent technique sur plusieurs missions (architecture, best practices, déploiement en production, transfert de compétences).",
                      )}
                    </li>
                    <li>
                      {t(
                        "Participation aux phases de cadrage et de spécifications, gestion de projets en mode forfait et régie. Expérience agile sur plusieurs projets en méthodologie Scrum, avec mise en place de tests unitaires.",
                      )}
                    </li>
                  </ul>
                </Project>
              </Experience>
            </section>

            {/* Education */}
            <section className="break-before-page">
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
          </div>
        </div>
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
