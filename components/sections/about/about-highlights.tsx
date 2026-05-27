type Highlight = {
  title: string;
  text: string;
};

export function AboutHighlights({ items }: { items: readonly Highlight[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-[1.1rem] border border-white/10 bg-white/[0.018] p-4"
        >
          <h3 className="text-sm font-semibold text-white/88">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/52">{item.text}</p>
        </article>
      ))}
    </div>
  );
}
