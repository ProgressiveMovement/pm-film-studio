import { format, isSameMonth, isToday } from "date-fns";
import { type JSX, useMemo } from "react";
import { cn } from "@/lib/cn";
import { formatDate } from "@/lib/format";
import CalendarTaskBar, { type CalendarTask } from "./calendar-task-bar";
import DayOverflowPopover from "./day-overflow-popover";
import { packWeekLanes } from "./month-grid-model";

type MonthGridProps = {
  weeks: Date[][];
  tasks: CalendarTask[];
  visibleMonth: Date;
  maxLanes: number;
  projectSlug?: string;
  onOpenTask: (taskId: string) => void;
};

export default function MonthGrid({
  weeks,
  tasks,
  visibleMonth,
  maxLanes,
  projectSlug,
  onOpenTask,
}: MonthGridProps): JSX.Element {
  const weekdayTemplate = weeks[0] ?? [];
  const layouts = useMemo(
    () => weeks.map((week) => packWeekLanes(week, tasks, maxLanes)),
    [weeks, tasks, maxLanes],
  );

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-auto overscroll-x-contain">
      <div className="sticky top-0 z-20 grid grid-cols-7 border-b border-[var(--border)] bg-background/95 backdrop-blur">
        {weekdayTemplate.map((day) => (
          <div
            key={`weekday-${day.toISOString()}`}
            className="border-r border-[var(--border)] px-1 py-2 text-center text-[11px] font-medium uppercase tracking-[.09em] text-[var(--color-faint)]"
          >
            {formatDate(day, { weekday: "short" })}
          </div>
        ))}
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        {weeks.map((week, weekIndex) => {
          const { segments, hiddenCountByDay, tasksByDay } = layouts[weekIndex];

          return (
            <div
              key={`week-${week[0].toISOString()}`}
              className="relative grid min-h-24 flex-1 grid-cols-7 border-b border-[var(--border)] sm:min-h-28"
              style={{
                // Row 1 carries the date numbers, then one row per lane, then a
                // trailing row for the per-day overflow hint.
                gridTemplateRows: `auto repeat(${maxLanes}, min-content) auto`,
              }}
            >
              {week.map((day, dayIndex) => (
                <div
                  key={`cell-${day.toISOString()}`}
                  style={{ gridColumn: dayIndex + 1, gridRow: "1 / -1" }}
                  className={cn(
                    "min-w-0 border-r border-[var(--border)]",
                    isToday(day) && "border-t-2 border-t-primary",
                  )}
                />
              ))}

              {week.map((day, dayIndex) => (
                <div
                  key={`number-${day.toISOString()}`}
                  style={{ gridColumn: dayIndex + 1, gridRow: 1 }}
                  className="z-10 flex justify-end px-1 py-1"
                >
                  <span
                    className={cn(
                      "flex size-6 items-center justify-center rounded-full text-[12.5px] font-medium tabular-nums text-foreground",
                      !isSameMonth(day, visibleMonth) &&
                        "text-[var(--color-faint)] opacity-60",
                      isToday(day) && "font-semibold",
                    )}
                  >
                    {format(day, "d")}
                  </span>
                </div>
              ))}

              {segments.map((segment) => (
                <CalendarTaskBar
                  key={`bar-${segment.task.id}`}
                  segment={segment}
                  projectSlug={projectSlug}
                  onOpenTask={onOpenTask}
                />
              ))}

              {week.map((day, dayIndex) =>
                hiddenCountByDay[dayIndex] > 0 ? (
                  <div
                    key={`overflow-${day.toISOString()}`}
                    style={{ gridColumn: dayIndex + 1, gridRow: maxLanes + 2 }}
                    className="z-10 min-w-0"
                  >
                    <DayOverflowPopover
                      day={day}
                      tasks={tasksByDay[dayIndex]}
                      hiddenCount={hiddenCountByDay[dayIndex]}
                      projectSlug={projectSlug}
                      onOpenTask={onOpenTask}
                    />
                  </div>
                ) : null,
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
