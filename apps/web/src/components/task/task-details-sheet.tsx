import { useNavigate } from "@tanstack/react-router";
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";
import { AlertDialogCreateHandle } from "@/components/ui/alert-dialog";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useIsPhone } from "@/hooks/use-is-mobile";
import { TaskSheetHeader } from "./header/task-sheet-header";
import { PropertiesRail } from "./properties/properties-rail";
import TaskDeleteDialog from "./task-delete-dialog";
import TaskDetailsContent from "./task-details-content";
import { TaskShortcuts } from "./task-shortcuts";

type TaskDetailsSheetProps = {
  taskId: string | undefined;
  projectId: string;
  workspaceId: string;
  onClose: () => void;
};

export default function TaskDetailsSheet({
  taskId,
  projectId,
  workspaceId,
  onClose,
}: TaskDetailsSheetProps) {
  const navigate = useNavigate();
  const isPhone = useIsPhone();
  const [currentTaskId, setCurrentTaskId] = useState<string | undefined>(
    taskId,
  );
  const [deleteHandle] = useState(() => AlertDialogCreateHandle());
  const shownTaskId = useDeferredValue(currentTaskId);

  const lastTaskIdRef = useRef(taskId);

  useEffect(() => {
    if (taskId) {
      lastTaskIdRef.current = taskId;
      // Update taskId immediately without closing/reopening
      setCurrentTaskId(taskId);
    } else {
      // Delay clearing to allow exit animation
      const timer = setTimeout(() => {
        setCurrentTaskId(undefined);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [taskId]);

  const popupRef = useRef<HTMLDivElement>(null);

  const handleOpenFullPage = useCallback(() => {
    if (!shownTaskId) return;
    navigate({
      to: "/dashboard/workspace/$workspaceId/project/$projectId/task/$taskId",
      params: {
        workspaceId,
        projectId,
        taskId: shownTaskId,
      },
    });
  }, [navigate, workspaceId, projectId, shownTaskId]);

  return (
    <Sheet open={!!taskId} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side={isPhone ? "bottom" : "right"}
        data-task-view
        data-shortcuts="allow"
        ref={popupRef}
        className="max-h-[90vh] gap-0 p-0"
        // Focusing the first control would pop a tooltip over the actions
        // every time the sheet opens on touch; focus the popup itself.
        initialFocus={popupRef}
        finalFocus={() =>
          document.querySelector<HTMLElement>(
            `[data-task-id="${lastTaskIdRef.current}"]`,
          ) ?? true
        }
      >
        {shownTaskId && (
          <TaskSheetHeader
            taskId={shownTaskId}
            projectId={projectId}
            workspaceId={workspaceId}
            deleteHandle={deleteHandle}
            onOpenFullPage={handleOpenFullPage}
          />
        )}

        {shownTaskId && (
          <TaskShortcuts
            taskId={shownTaskId}
            projectId={projectId}
            workspaceId={workspaceId}
            enabled={Boolean(taskId)}
          />
        )}
        {shownTaskId && (
          <TaskDeleteDialog
            handle={deleteHandle}
            taskId={shownTaskId}
            onDeleted={onClose}
            shortcutEnabled={Boolean(taskId)}
          />
        )}
        {shownTaskId && (
          <div key={shownTaskId} className="min-h-0 flex-1 overflow-y-auto">
            <TaskDetailsContent
              taskId={shownTaskId}
              projectId={projectId}
              workspaceId={workspaceId}
              className="px-5 pt-5 pb-10 sm:px-9"
              properties={
                <PropertiesRail
                  taskId={shownTaskId}
                  projectId={projectId}
                  workspaceId={workspaceId}
                  className="px-0 pt-0 pb-5 sm:[&_dl]:grid sm:[&_dl]:grid-cols-2 sm:[&_dl]:gap-x-4"
                />
              }
            />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
