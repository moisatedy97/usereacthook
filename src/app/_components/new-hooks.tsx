import HookCard from "@/components/hook-card";
import { getAllHooks } from "@/server/db/queries";
import React from "react";
import { hooks as contentHooks } from "#site/content";

async function NewHooks(): Promise<React.JSX.Element | undefined> {
  const data = await getAllHooks();

  if (data && data.length > 0) {
    const newHooks = data.filter((hook) =>
      contentHooks.some((contentHook) => contentHook.title === hook.name && contentHook.new === true)
    );

    if (newHooks.length > 0) {
      return (
        <section>
          <div className="mb-4 flex flex-row items-center gap-x-3">
            <span className="text-main text-gradient text-3xl">#</span>
            <h4 className="text-2xl font-extrabold">New Hooks</h4>
          </div>
          <div className="grid gap-4 lg:grid-cols-4">
            {newHooks.slice(0, 4).map((hook) => {
              return <HookCard key={hook.id} hook={hook} />;
            })}
          </div>
        </section>
      );
    }
  }
}

export default NewHooks;
