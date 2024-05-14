import HookCard from "@/components/hook-card";
import { getPopularHooks } from "@/server/db/queries";
import React from "react";

async function PopularHooks(): Promise<React.JSX.Element | undefined> {
  const data = await getPopularHooks();

  if (data && data.length > 0) {
    return (
      <section>
        <div className="mb-4 flex flex-row items-center gap-x-3">
          <span className="text-main text-gradient text-3xl">#</span>
          <h4 className="text-2xl font-extrabold">Popular Hooks</h4>
        </div>
        <div className="grid gap-4 lg:grid-cols-4">
          {[...data].map((hook) => {
            return (
              <HookCard key={hook.hooks.id} hook={hook.hooks} />
              // <HookShow fileSource={hook.source!} />
            );
          })}
        </div>
      </section>
    );
  }
}

export default PopularHooks;
