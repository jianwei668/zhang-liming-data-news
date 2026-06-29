# Community Gallery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the community photo trio into a filled 2+1 collage with a full-width, longer bottom image at every supported viewport.

**Architecture:** Give the community trio a dedicated class so its layout can be changed without affecting the other shared media grids. Add final, narrowly scoped CSS rules that override the older responsive cascade and verify the resulting card geometry in a real browser.

**Tech Stack:** Static HTML, CSS Grid, Playwright browser verification, GitHub Pages

---

### Task 1: Add a dedicated community gallery hook

**Files:**
- Modify: `index.html:167`

- [ ] **Step 1: Record the current geometry**

Run a local static server and use Playwright at a 390px-wide viewport to evaluate the three gallery cards. Record each card's `x`, `y`, `width`, and `height`.

Expected: the third card does not consume the full usable row width in the current screenshot state.

- [ ] **Step 2: Add the gallery class**

Change the opening element to:

```html
<div class="compact-media-grid three community-gallery reveal-on-scroll">
```

- [ ] **Step 3: Confirm the hook is unique**

Run:

```powershell
rg -n "community-gallery" index.html
```

Expected: exactly one HTML match.

### Task 2: Implement the filled 2+1 collage

**Files:**
- Modify: `styles.css`

- [ ] **Step 1: Add the scoped grid rules**

Append:

```css
/* Community photo trio: a filled 2+1 collage with no unused grid cell. */
.community-gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  overflow: hidden;
  border-radius: 18px;
}

.community-gallery .photo-card {
  min-width: 0;
  min-height: 0;
  aspect-ratio: 4 / 3;
  border: 0;
  border-radius: 0;
  box-shadow: none;
}

.community-gallery .photo-card:nth-child(3) {
  grid-column: 1 / -1;
  aspect-ratio: 2 / 1;
}

.community-gallery .photo-card:nth-child(3) img {
  object-position: center 36%;
}
```

- [ ] **Step 2: Verify the CSS cascade**

Use browser-computed styles to assert that the third card spans from the gallery's left edge to its right edge and that the grid gap is `0px`.

Expected: left and right edge differences are no more than 1px.

### Task 3: Verify and publish

**Files:**
- Verify: `index.html`
- Verify: `styles.css`

- [ ] **Step 1: Run HTML and asset checks**

Run the repository's existing validation script or a focused static-asset check.

Expected: exit code 0 and no missing referenced assets.

- [ ] **Step 2: Run visual browser checks**

Check 390×844 and 1280×900 viewports. Confirm the 2+1 layout, full-width bottom card, no horizontal overflow, loaded images, and no console errors.

Expected: every assertion passes.

- [ ] **Step 3: Review the intended diff**

Run:

```powershell
git diff -- index.html styles.css
```

Expected: the new class hook and scoped CSS are present without unrelated gallery changes.

- [ ] **Step 4: Commit and push the publishable site**

Stage only the site files and assets required by the current page, commit with a concise message, and push `main` to `origin`.

Expected: the remote branch advances successfully.

- [ ] **Step 5: Verify GitHub Pages**

Open the published URL and confirm the deployed commit serves the full-width third image.

Expected: the public page reproduces the verified local layout.
