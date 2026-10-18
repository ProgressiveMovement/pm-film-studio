import { cleanup, render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, describe, expect, it, vi } from "vite-plus/test";
import { MobileTabBar } from "./mobile-tab-bar";

vi.mock("@tanstack/react-router", () => ({
  useLocation: () => "/dashboard/workspace/w1/inbox",
  useParams: () => "p1",
  Link: ({
    children,
    to,
    ...rest
  }: { children: ReactNode; to: string } & Record<string, unknown>) => (
    <a href={to} {...rest}>
      {children}
    </a>
  ),
}));
vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));
vi.mock("@/hooks/use-is-mobile", () => ({ useIsPhone: () => true }));
vi.mock("@/hooks/queries/workspace/use-active-workspace", () => ({
  default: () => ({ data: { id: "w1" } }),
}));
vi.mock("@/hooks/queries/notification/use-get-notifications", () => ({
  default: () => ({ data: [{ isRead: false }] }),
}));
vi.mock("@/hooks/use-workspace-permission", () => ({
  useWorkspacePermission: () => ({ canCreateTasks: () => true }),
}));

afterEach(cleanup);

describe("MobileTabBar", () => {
  it("renders five entries, marks the active one and shows the unread dot", () => {
    render(<MobileTabBar />);
    expect(screen.getAllByRole("link")).toHaveLength(4);
    expect(screen.getAllByRole("button")).toHaveLength(1);
    expect(
      screen.getByLabelText("navigation:sidebar.inbox").className,
    ).toContain("bg-accent");
    expect(
      screen.getByLabelText("navigation:sidebar.home").className,
    ).not.toContain("bg-accent");
    expect(screen.getByTestId("inbox-dot")).toBeTruthy();
  });
});
