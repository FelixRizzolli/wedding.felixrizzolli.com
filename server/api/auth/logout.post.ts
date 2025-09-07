import { defineEventHandler } from 'h3';
import { clearUserSession } from '#imports';

export default defineEventHandler(async (event) => {
  await clearUserSession(event);
  return { ok: true };
});
