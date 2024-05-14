import { db } from ".";
import { eq } from "drizzle-orm";
import { hooks, hooksStatistics } from "./schema";

export async function getAllHooks() {
  return await db.query.hooks.findMany();
}

export async function getPopularHooks() {
  return await db
    .select()
    .from(hooks)
    .leftJoin(hooksStatistics, eq(hooks.id, hooksStatistics.id))
    .orderBy(hooksStatistics.copyCount)
    .limit(4);
}

export async function getHooksByIds(ids: number[]) {
  if (ids.length === 0) {
    return [];
  }

  return await db.query.hooks.findMany({
    where: (hooks, { inArray }) => inArray(hooks.id, ids)
  });
}

export async function getHookById(id: number) {
  return await db.query.hooks.findMany({
    where: (hooks, { eq }) => eq(hooks.id, id)
  });
}

export async function getHookByName(name: string) {
  return await db.query.hooks.findFirst({
    columns: {
      id: true
    },
    where: (hooks, { eq }) => eq(hooks.name, name)
  });
}

export async function incrementHookCopyCount(id: number) {
  const currentCount = await db.query.hooksStatistics.findFirst({
    where: (hooksStatistics, { eq }) => eq(hooksStatistics.hookId, id)
  });

  if (currentCount && currentCount.copyCount !== null) {
    return await db
      .update(hooksStatistics)
      .set({ copyCount: currentCount.copyCount + 1 })
      .where(eq(hooksStatistics.id, id));
  }
}

export async function incrementHookUsefullCount(id: number) {
  const currentCount = await db.query.hooksStatistics.findFirst({
    where: (hooksStatistics, { eq }) => eq(hooksStatistics.hookId, id)
  });

  if (currentCount && currentCount.usefullCount !== null) {
    return await db
      .update(hooksStatistics)
      .set({ usefullCount: currentCount.usefullCount + 1 })
      .where(eq(hooksStatistics.id, id));
  }
}

export async function incrementHookUselessCount(id: number) {
  const currentCount = await db.query.hooksStatistics.findFirst({
    where: (hooksStatistics, { eq }) => eq(hooksStatistics.hookId, id)
  });

  if (currentCount && currentCount.uselessCount !== null) {
    return await db
      .update(hooksStatistics)
      .set({ uselessCount: currentCount.uselessCount + 1 })
      .where(eq(hooksStatistics.id, id));
  }
}

export async function incrementHookClickCount(id: number) {
  const currentCount = await db.query.hooksStatistics.findFirst({
    where: (hooksStatistics, { eq }) => eq(hooksStatistics.hookId, id)
  });

  if (currentCount && currentCount.clickCount !== null) {
    return await db
      .update(hooksStatistics)
      .set({ clickCount: currentCount.clickCount + 1 })
      .where(eq(hooksStatistics.id, id));
  }
}
