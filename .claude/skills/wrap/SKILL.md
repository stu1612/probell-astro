---
name: wrap
description: Close a work session. Moves committed work from the tracker board's Now into the session log, promotes Next, tidies the board, and shows the diff for Stu to review.
disable-model-invocation: true
---

Close the session by updating `src/docs/progress-tracker.md`. This is
the one time to edit it directly. Read only the Board and the most
recent log entry, not the whole file.

1. Run `git log` for this session's commits. Only committed work counts
   as done. Mention any uncommitted changes, but don't log them.
2. Add a new session entry at the top of the log in the same format as
   the last one: date, what was done (with commit hashes), decisions,
   and anything still open.
3. Update the board:
   - Remove finished Now items (they're in the log now).
   - Promote the top Next item to Now if Now is empty.
   - Add new open items or bugs from this session. Move resolved ones
     to Closed.
   - Keep each item to one or two lines.
4. Show Stu the diff (`git diff src/docs/progress-tracker.md`) and a
   one-line summary of each board change. Don't commit. Suggest a
   commit message.
