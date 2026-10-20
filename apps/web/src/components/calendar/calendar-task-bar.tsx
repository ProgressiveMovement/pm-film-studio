import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/cn";
import { formatDateShort } from "@/lib/format";
import type { PackableTask, WeekSegment } from "./month-grid-model";

export type CalendarTask = PackableTask & {
  title: string;
  number: number | null;
  status: string;
};

// Status in the Dossier tones (Studio 3): to do grey, in progress ink,
// in review orange, done green. Fills are the tone at 15%, edges at 35%.
const tone = (v: string) =>
  `border-[color-mix(in_srgb,${v}_35%,transparent)] bg-[color-mix(in_srgb,${v}_15%,transparent)] hover:border-[color-mix(in_srgb,${v}_50%,transparent)] hover:bg-[color-mix(in_srgb,${v}_20%,transparent)]`;
const STATUS_CLASSES: Record<string, string> = {
  "to-do": tone("var(--muted-foreground)"),
  "in-progress": tone("var(--primary)"),
  "in-review": tone("var(--warning)"),
  done: tone("var(--success)"),
};

export function getCalendarTaskStatusClass(status: string): string {
  return (
    STATUS_CLASSES[status] ??
    "border-primary/25 bg-primary/12 hover:border-primary/40 hover:bg-primary/18"
  );
}

type CalendarTaskBarProps = {
  segment: WeekSegment<CalendarTask>;
  projectSlug?: string;
  onOpenTask: (taskId: string) => void;
};

export default function CalendarTaskBar({
  segment,
  projectSlug,
  onOpenTask,
}: CalendarTaskBarProps): JSX.Element {
  const { t } = useTranslation();
  const {
    task,
    lane,
    columnStart,
    columnEnd,
    continuesBefore,
    continuesAfter,
  } = segment;

  const taskKey =
    projectSlug && task.number != null
      ? `${projectSlug}-${task.number}`
      : undefined;

  const range = `${formatDateShort(task.scheduleStart)} – ${formatDateShort(
    task.scheduleEnd,
  )}`;

  return (
    <button
      type="button"
      style={{
        gridColumn: `${columnStart} / ${columnEnd}`,
        // Row 1 holds the date numbers, so lanes start at row 2.
        gridRow: lane + 2,
      }}
      title={
        taskKey
          ? `${taskKey} · ${task.title} · ${range}`
          : `${task.title} · ${range}`
      }
      aria-label={t("tasks:calendar.taskAriaLabel", {
        title: task.title,
        range,
      })}
      data-task-status={task.status}
      onClick={() => onOpenTask(task.id)}
      className={cn(
        "z-10 mb-0.5 flex h-6 min-w-0 items-center overflow-hidden border px-1.5 text-left text-[11px] font-medium leading-none text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:h-5",
        getCalendarTaskStatusClass(task.status),
        // Bars that run past a week edge lose their cap there so the two halves
        // read as one continuous span across rows.
        continuesBefore ? "rounded-l-none border-l-0" : "ml-1 rounded-l-md",
        continuesAfter ? "rounded-r-none border-r-0" : "mr-1 rounded-r-md",
      )}
    >
      <span className="truncate">{task.title}</span>
    </button>
  );
}
