type PreviewSkeletonColumnProps = { cards: number };

export function PreviewSkeletonColumn({ cards }: PreviewSkeletonColumnProps) {
  const placeholders = Array.from(
    { length: cards },
    (_, position) => `card-${position}`,
  );

  return (
    <div className="flex w-60 shrink-0 flex-col gap-2 glass rounded-2xl p-3">
      <span className="h-2 w-16 rounded bg-muted" />
      {placeholders.map((id) => (
        <span key={id} className="h-[72px] rounded-lg bg-muted/50" />
      ))}
    </div>
  );
}
