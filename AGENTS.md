# Project instructions for future Codex work

- Preserve user privacy and keep uploaded media private by default.
- Never expose Supabase service-role keys or OpenAI API keys to client-side code.
- Validate all AI outputs with Zod before storing or rendering them.
- Run `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build` before completion.
- Use British English for visible application copy.
- Avoid launch-monitor claims such as exact path, face angle, spin, carry or ball speed.
- Keep coaching outputs focused on one primary priority and no more than one secondary priority.
- Update `README.md` whenever setup, deployment, migration or environment steps change.
- Avoid unnecessary rewrites of working architecture.

## Review priorities

Prioritise authentication bypasses, insecure file access, exposed API keys, broken Row Level Security, deletion failures, unvalidated model output, and uncontrolled API-cost risks.
