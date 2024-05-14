import HookCard from "@/components/hook-card";
import { getHooksByIds } from "@/server/db/queries";
import { cookies } from "next/headers";
import React from "react";

async function RecentlyUsedHooks(): Promise<React.JSX.Element | undefined> {
  const data = await getHooksByIds(JSON.parse(cookies().get("hooks")?.value ?? "[]") as number[]);

  if (data && data.length > 0) {
    return (
      <section>
        <div className="mb-4 flex flex-row items-center gap-x-3">
          <span className="text-main text-gradient text-3xl">#</span>
          <h4 className="text-2xl font-extrabold">Recently Used Hooks</h4>
        </div>
        <div className="grid gap-4 lg:grid-cols-4">
          {[...data].map((hook) => {
            return <HookCard key={hook.id} hook={hook} />;
          })}
        </div>
      </section>
    );
  }
}

export default RecentlyUsedHooks;
