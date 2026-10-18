import { Link } from "@tanstack/react-router";
import type { SettingsNavGroup as SettingsNavGroupModel } from "@/components/settings/nav/types";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type SettingsNavGroupProps = {
  group: SettingsNavGroupModel;
  pathname: string;
};

export function SettingsNavGroup({ group, pathname }: SettingsNavGroupProps) {
  return (
    <SidebarGroup className="gap-0.5 px-2 py-1.5">
      <SidebarGroupLabel className="h-7 truncate font-semibold text-[10.5px] text-[var(--color-faint)] uppercase tracking-[.09em]">
        {group.label}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className="gap-0.5">
          {group.links.map((link) => (
            <SidebarMenuItem key={link.id}>
              <SidebarMenuButton
                isActive={pathname === link.to}
                className="min-h-9 rounded-xl px-3.5 font-medium text-[13px] data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground"
                render={<Link to={link.to} />}
              >
                <link.icon aria-hidden="true" />
                <span>{link.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
