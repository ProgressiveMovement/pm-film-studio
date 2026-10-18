import { type JSX, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { formatDate, formatDateShort } from "@/lib/format";
import type { CalendarTask } from "./calendar-task-bar";

type DayOverflowPopoverProps = {
  day: Date;
  /** Every task on this day, not just the ones the lane cap hid. */
  tasks: CalendarTask[];
  hiddenCount: number;
  projectSlug?: string;
  onOpenTask: (taskId: string) => void;
};

export default function DayOverflowPopover({
  day,
  tasks,
  hiddenCount,
  projectSlug,
  onOpenTask,
}: DayOverflowPopoverProps): JSX.Element {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const dayLabel = formatDate(day, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const handleSelectTask = (taskId: string) => {
    setOpen(false);
    onOpenTask(taskId);
  };

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger
        aria-label={t("tasks:calendar.dayTasksAriaLabel", { date: dayLabel })}
        className="touch-hitbox relative w-full truncate rounded-sm px-1.5 pb-1 text-left text-[10.5px] leading-tight text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {t("tasks:calendar.moreTasks", { count: hiddenCount })}
      </PopoverTrigger>
      <PopoverContent align="start" className="w-64 p-2">
        <div className="space-y-1">
          <p className="px-2 pb-1 text-[10.5px] font-medium uppercase tracking-[.09em] text-[var(--color-faint)]">
            {dayLabel}
          </p>
          <div className="max-h-64 space-y-0.5 overflow-y-auto">
            {tasks.map((task) => (
              <button
                key={task.id}
                type="button"
                onClick={() => handleSelectTask(task.id)}
                className="row-hover flex min-h-9 w-full min-w-0 flex-col items-start justify-center gap-0.5 rounded-xl px-2.5 py-1 text-left text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {projectSlug && task.number != null ? (
                  <span className="truncate text-[10.5px] text-[var(--color-faint)]">
                    {projectSlug}-{task.number}
                  </span>
                ) : null}
                <span className="w-full truncate text-[13px] font-medium text-foreground">
                  {task.title}
                </span>
                <span className="w-full truncate text-[11px] text-[var(--color-faint)]">
                  {formatDateShort(task.scheduleStart)} –{" "}
                  {formatDateShort(task.scheduleEnd)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
