---
name: start
description: Open a work session. Gets the current board from tracker-historian, reads the one doc that fits the topic, and reports status before any work starts.
argument-hint: "[topic]"
disable-model-invocation: true
---

Open a session on: $ARGUMENTS (if empty, use the board's Now item).

1. Ask the `tracker-historian` agent for the board's Now and Next, plus
   any Open items or Known bugs related to the topic. Don't read
   `progress-tracker.md` yourself.
2. Read the one doc from the "Where to look" map in CLAUDE.md that fits
   the topic. Read none if nothing fits. Then look at the code involved.
3. Reply with exactly these four lines:
   - **Now:** the task that needs doing now, as an action. If finished
     work is still listed as current, the real Now is the first task
     not yet done. Never report work that's already complete.
   - **Next:** the next task after Now.
   - **Open:** open items or blockers that touch the topic. If there
     are none, write "There are no open tasks."
   - **Worth raising:** only issues, security problems or bugs that
     could affect how the Now task is done. Don't suggest work that
     comes after Now. If there's nothing, write "Nothing affects how
     <Now task> is done."
4. Keep every line consistent with Now. If you find leftover cleanup
   (an item that should already be deleted), don't report it. Mention
   it only if it blocks Now.
5. Stop and wait for Stu. Don't start work.
