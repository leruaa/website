import { useExtracted, useFormatter } from "next-intl";

type ExperienceProps = {
  role: string;
  company: string;
  from: string;
  to?: string;
  children: React.ReactNode;
};

export default function Experience({
  role,
  company,
  from,
  to,
  children,
}: ExperienceProps) {
  const t = useExtracted();
  const format = useFormatter();

  const fromString = format.dateTime(new Date(from), {
    year: "numeric",
    month: "long",
  });
  const toString = to
    ? format.dateTime(new Date(to), {
        year: "numeric",
        month: "long",
      })
    : t("Aujourd'hui");
  return (
    <div>
      <div className="text-lg">
        <span className="font-semibold text-zinc-900 dark:text-zinc-50">
          {role}
        </span>
        <span className="text-zinc-500 dark:text-zinc-400"> · {company}</span>
      </div>
      <span className="text-sm text-zinc-400 dark:text-zinc-500">
        {t("{from} à {to}", { from: fromString, to: toString })}
      </span>
      <div className="mt-2">{children}</div>
    </div>
  );
}
