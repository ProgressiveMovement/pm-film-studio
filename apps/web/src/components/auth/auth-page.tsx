import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "../ui/card";
import { AuthLegalFooter } from "./auth-legal-footer";

export function AuthWordmark() {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center gap-2">
      <span
        aria-hidden="true"
        className="size-[7px] rounded-full bg-primary [filter:var(--glow)]"
      />
      <span className="font-semibold text-[17px] tracking-[-0.02em]">
        {t("common:appName")}
      </span>
    </div>
  );
}

type AuthPageProps = {
  title: string;
  description?: ReactNode;
  notice?: ReactNode;
  children?: ReactNode;
};

export function AuthPage({
  title,
  description,
  notice,
  children,
}: AuthPageProps) {
  return (
    <main className="h-svh w-full overflow-y-auto bg-background">
      <div className="flex min-h-full flex-col items-center">
        <div className="flex w-full grow flex-col items-center justify-center px-4 py-12 sm:px-6">
          <div className="flex w-full max-w-sm flex-col gap-4">
            <AuthWordmark />
            <Card className="p-6 sm:p-9">
              <div className="flex flex-col gap-5 pb-8">
                <div className="flex flex-col gap-1.5">
                  <h1 className="font-semibold text-[22px] text-foreground leading-7 tracking-[-0.02em]">
                    {title}
                  </h1>
                  {description ? (
                    <p className="text-muted-foreground text-sm">
                      {description}
                    </p>
                  ) : null}
                </div>
                {notice}
              </div>
              {children}
            </Card>
          </div>
        </div>
        <AuthLegalFooter />
      </div>
    </main>
  );
}
