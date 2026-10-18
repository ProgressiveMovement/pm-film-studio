import { cn } from "@/lib/cn";

const invitedColors = [
  "bg-accent text-accent-foreground",
  "bg-muted text-foreground",
  "bg-primary text-primary-foreground",
];

type PreviewAvatarsProps = {
  ownerInitial: string;
  invitedInitials: string[];
  emptySeats: number;
};

export function PreviewAvatars({
  ownerInitial,
  invitedInitials,
  emptySeats,
}: PreviewAvatarsProps) {
  const invited = invitedInitials.map((initial, position) => ({
    id: `invited-${position}`,
    initial,
    color: invitedColors[position % invitedColors.length],
  }));
  const seats = Array.from({ length: emptySeats }, (_, position) => ({
    id: `seat-${position}`,
  }));
  const avatar =
    "-ms-1.5 flex size-4 items-center justify-center rounded-full border-[1.5px] border-sidebar font-semibold text-[7px] first:ms-0";

  return (
    <span className="ms-auto flex" aria-hidden="true">
      <span className={cn(avatar, "bg-foreground text-background")}>
        {ownerInitial}
      </span>
      {invited.map((person) => (
        <span key={person.id} className={cn(avatar, person.color)}>
          {person.initial}
        </span>
      ))}
      {seats.map((seat) => (
        <span key={seat.id} className={cn(avatar, "bg-muted-foreground/30")} />
      ))}
    </span>
  );
}
