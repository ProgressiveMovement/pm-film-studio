import type { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import { ChevronRight, Maximize2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ShortcutTooltipLabel } from "@/components/shortcuts/shortcut-tooltip-label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import icons from "@/constants/project-icons";
import useGetProject from "@/hooks/queries/project/use-get-project";
import useGetTask from "@/hooks/queries/task/use-get-task";
import { HeaderIconButton } from "./header-icon-button";
import { TaskHeaderActions } from "./task-header-actions";
import { useTaskCopyActions } from "./use-task-copy-actions";

type TaskSheetHeaderProps = {
  taskId: string;
  projectId: string;
  workspaceId: string;
  deleteHandle: AlertDialogPrimitive.Handle<unknown>;
  onOpenFullPage: () => void;
};

export function TaskSheetHeader({
  taskId,
  projectId,
  workspaceId,
  deleteHandle,
  onOpenFullPage,
}: TaskSheetHeaderProps) {
  const { t } = useTranslation();
  const { data: task } = useGetTask(taskId);
  const { data: project } = useGetProject({ id: projectId, workspaceId });
  const { copyId } = useTaskCopyActions({ taskId, projectId, workspaceId });
  const ProjectIcon =
    icons[project?.icon as keyof typeof icons] || icons.Layout;

  return (
    <div className="flex h-[4.5rem] shrink-0 items-center gap-1 border-border border-b pr-16 pl-5 sm:gap-2">
      <div className="flex min-w-0 flex-1 items-center gap-1.5 max-sm:justify-center sm:gap-2">
        <ProjectIcon
          aria-hidden="true"
          className="size-4 shrink-0 text-muted-foreground max-sm:hidden"
        />
        <span className="truncate font-medium text-[12px] text-[var(--color-faint)]">
          {project?.name}
        </span>
        {project?.slug && task?.number != null && (
          <>
            <ChevronRight
              aria-hidden="true"
              className="size-3 shrink-0 text-muted-foreground/60 max-sm:hidden"
            />
            <span
              aria-hidden="true"
              className="text-[13px] text-muted-foreground/60 sm:hidden"
            >
              /
            </span>
            <Tooltip>
              <TooltipTrigger
                render={
                  <button
                    type="button"
                    onClick={copyId}
                    className="shrink-0 rounded-sm font-medium font-mono text-foreground text-xs outline-none hover:text-foreground/80 focus-visible:ring-2 focus-visible:ring-ring"
                  />
                }
              >
                {project.slug}-{task.number}
              </TooltipTrigger>
              <TooltipContent>
                <ShortcutTooltipLabel
                  label={t("navigation:shortcuts.items.copyTaskId")}
                  shortcutId="copyTaskId"
                />
              </TooltipContent>
            </Tooltip>
          </>
        )}
      </div>
      <TaskHeaderActions
        taskId={taskId}
        projectId={projectId}
        workspaceId={workspaceId}
        deleteHandle={deleteHandle}
      />
      <span
        aria-hidden="true"
        className="mx-0.5 h-4 w-px bg-border max-sm:hidden"
      />
      <HeaderIconButton
        label={t("tasks:detail.openInFullPage")}
        onClick={onOpenFullPage}
        className="max-sm:hidden"
      >
        <Maximize2 />
      </HeaderIconButton>
    </div>
  );
}
