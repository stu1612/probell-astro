# Probell — UI Refresh Spec

**Status: Ready to build**

---

## What to do

Reference images are saved at:

```
public/images/snippets/section-1/desktop.png
public/images/snippets/section-1/mobile.png
public/images/snippets/section-2/desktop.png
public/images/snippets/section-2/mobile.png
public/images/snippets/section-3/desktop.png
public/images/snippets/section-3/mobile.png
```

Each pair shows a desktop and mobile version of one homepage section.
Look at each image, identify which existing homepage section it's a
new version of, and build a matching component in the playground —
match the reference as closely as possible at both breakpoints.

Use this image for all three, regardless of what's in the reference
screenshots:

```
public/images/lifestyle/athlete-walking.jpg
```

Buttons: ignore any button styling visible in the references. Not in
scope for this task.

Build all three sections in the playground component. Do not touch
production components or import playground code into them.

This work deviates from `design.md` and `coding-standards.md` where
the references call for something different — that's expected, proceed
without flagging the conflicts. Log the deviation and the playground
exception in `progress-tracker.md` when you start.

Once all three are built, stop and let the developer review them
against the live site before anything is swapped into production.
