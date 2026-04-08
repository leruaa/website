export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-zinc-900 dark:text-zinc-50 underline mb-1">
      {children}
    </h4>
  );
}
