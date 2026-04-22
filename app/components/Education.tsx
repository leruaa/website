import { useExtracted } from "next-intl";

type EducationProps = {
  school: string;
  degree: string;
  from: string;
  to: string;
  stack?: string[];
};

export default function Education({
  school,
  degree,
  from,
  to,
}: EducationProps) {
  const t = useExtracted();

  return (
    <div key={school} className="flex flex-row gap-4 mb-2 break-inside-avoid">
      <span className="text-sm text-zinc-400 dark:text-zinc-500 shrink-0 w-24 p-0.5">
        {t("{from} à {to}", { from, to })}
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="font-semibold text-zinc-900 dark:text-zinc-50">
          {degree}
        </span>
        <span className="text-zinc-500 dark:text-zinc-400">{school}</span>
      </div>
    </div>
  );
}
