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
3. Reply with:
   - Three lines of status: where things stand, what's next, and any
     blocker or open item that touches the topic.
   - Up to three ideas or questions worth raising (risks, a better
     approach, or a doc that disagrees with the code).
4. Stop and wait for Stu. Don't start work.
