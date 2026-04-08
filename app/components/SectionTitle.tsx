export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="font-semibold uppercase tracking-widest text-indigo-400 border-b border-b-zinc-300 dark:border-b-zinc-800 mb-1">
      {children}
    </h2>
  );
}
