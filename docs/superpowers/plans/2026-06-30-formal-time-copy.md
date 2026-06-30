# Formal Time-Saving Copy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the informal “45→8” design commentary with a formal factual sentence and publish only that copy change.

**Architecture:** Modify the existing `<strong>` text inside the `time-guide` aside without changing its HTML structure or CSS. Because the worktree contains unrelated edits, stage the copy change with a one-hunk cached patch rather than staging the full file.

**Tech Stack:** Static HTML, Git, GitHub Pages

---

### Task 1: Replace and verify the copy

**Files:**
- Modify: `index.html:120`

- [ ] **Step 1: Verify the old wording exists**

Run:

```powershell
rg -n "高级感不靠堆图" index.html
```

Expected: one match in the `time-guide` aside.

- [ ] **Step 2: Replace the sentence**

Use this exact markup:

```html
<aside class="ip-guide time-guide reveal-on-scroll"><span>现场改造</span><strong>可摘取式低压刀闸将保险更换时间由45分钟缩短至8分钟，显著提升了抢修效率。</strong></aside>
```

- [ ] **Step 3: Verify the wording**

Run:

```powershell
rg -n "高级感不靠堆图|可摘取式低压刀闸将保险更换时间由45分钟缩短至8分钟" index.html
```

Expected: only the new sentence matches.

### Task 2: Publish only the intended hunk

**Files:**
- Stage: `index.html:120`

- [ ] **Step 1: Create and apply a cached one-hunk patch**

Build a patch against `HEAD:index.html` that replaces only the old sentence, then apply it with:

```powershell
git apply --cached formal-copy.patch
```

Expected: `git diff --cached -- index.html` contains one changed line.

- [ ] **Step 2: Commit and push**

Run:

```powershell
git commit -m "Use formal copy for time-saving result"
git push origin main
```

Expected: `origin/main` advances to the new commit.

- [ ] **Step 3: Verify GitHub Pages**

Wait for the Pages deployment, fetch the published HTML, and assert that the new sentence is present while `高级感不靠堆图` is absent.

Expected: deployment succeeds and both text assertions pass.
