type Highlight = {
  title: string;
  text: string;
};

export function AboutHighlights({ items }: { items: readonly Highlight[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-[1.1rem] bg-white/[0.018] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]"
        >
          <h3 className="text-sm font-semibold text-white/88">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/52">{item.text}</p>
        </article>
      ))}
    </div>
  );
}
