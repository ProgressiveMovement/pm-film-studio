import { Link, useLocation, useParams } from "@tanstack/react-router";
import { CalendarDays, CircleCheck, House, Inbox, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import useGetNotifications from "@/hooks/queries/notification/use-get-notifications";
import useActiveWorkspace from "@/hooks/queries/workspace/use-active-workspace";
import { useIsPhone } from "@/hooks/use-is-mobile";
import { useWorkspacePermission } from "@/hooks/use-workspace-permission";
import { cn } from "@/lib/cn";

const item = "min-h-11 min-w-11 flex-1 justify-center px-0";

// Phone-only bottom bar (< 640 px). The sidebar sheet stays; this is extra.
export function MobileTabBar() {
  const isPhone = useIsPhone();
  const { t } = useTranslation();
  const { data: workspace } = useActiveWorkspace();
  const { data: notifications = [] } = useGetNotifications(workspace?.id);
  const { canCreateTasks } = useWorkspacePermission();
  const projectId = useParams({
    strict: false,
    select: (p) => ("projectId" in p ? (p.projectId as string) : undefined),
  });
  const pathname = useLocation({
    select: (l) => l.pathname.replace(/\/+$/, ""),
  });

  if (!isPhone || !workspace) return null;

  const home = `/dashboard/workspace/${workspace.id}`;
  const hasUnread = notifications.some((n) => !n.isRead);
  const entries = [
    { to: home, label: t("navigation:sidebar.home"), Icon: House },
    {
      to: `${home}/my-tasks`,
      label: t("navigation:sidebar.myTasks"),
      Icon: CircleCheck,
    },
    // The calendar is per project: only offered while a project is open.
    ...(projectId
      ? [
          {
            to: `${home}/project/${projectId}/calendar`,
            label: t("navigation:sidebar.calendar", {
              defaultValue: "Calendar",
            }),
            Icon: CalendarDays,
          },
        ]
      : []),
    {
      to: `${home}/inbox`,
      label: t("navigation:sidebar.inbox"),
      Icon: Inbox,
      dot: hasUnread,
    },
  ];

  return (
    <div className="pointer-events-none fixed inset-x-3 bottom-0 z-40 pb-[env(safe-area-inset-bottom)] sm:hidden">
      <nav
        aria-label="Primary"
        className="glass pillnav pointer-events-auto mb-3 flex w-full justify-between rounded-full"
      >
        {entries.map(({ to, label, Icon, dot }) => {
          const active =
            to === home ? pathname === home : pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              aria-label={label}
              aria-current={active ? "page" : undefined}
              className={cn(
                "pillnav-item",
                item,
                active && "bg-accent text-accent-foreground",
              )}
            >
              <Icon className="size-[18px]" aria-hidden />
              {dot && (
                <span
                  data-testid="inbox-dot"
                  className="size-1.5 rounded-full bg-success"
                />
              )}
            </Link>
          );
        })}
        {canCreateTasks() && (
          <button
            type="button"
            aria-label={t("workspace:home.newTask")}
            // Same path as the "C" shortcut, which the command palette owns.
            onClick={() =>
              document.dispatchEvent(
                new KeyboardEvent("keydown", { key: "c", bubbles: true }),
              )
            }
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
          >
            <Plus className="size-[18px]" aria-hidden />
          </button>
        )}
      </nav>
    </div>
  );
}
