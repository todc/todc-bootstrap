# Contributing to TODC Bootstrap

We welcome contributions from *everyone*. While contributing, please follow the project [code of conduct](https://github.com/todc/todc-bootstrap/blob/main/CODE_OF_CONDUCT.md), so that everyone can be included.

Looking to contribute something to TODC Bootstrap? **Here's how you can help.**

Please take a moment to review this document in order to make the contribution
process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of
the developers managing and developing this open source project. In return,
they should reciprocate that respect in addressing your issue or assessing
patches and features.


## Using the issue tracker

The [issue tracker](https://github.com/todc/todc-bootstrap/issues) is
the preferred channel for [bug reports](#bug-reports), [features requests](#feature-requests)
and [submitting pull requests](#pull-requests), but please respect the following
restrictions:

* Please **do not** use the issue tracker for personal support requests.

* Please **do not** derail or troll issues. Keep the discussion on topic and
  respect the opinions of others.

* Please **do not** post comments consisting solely of "+1" or ":thumbsup:".
  Use [GitHub's "reactions" feature](https://blog.github.com/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/)
  instead. We reserve the right to delete comments which violate this rule.

* Please **do not** open issues or pull requests regarding the code in
  [`Bootstrap`](https://github.com/twbs/bootstrap) or [`Normalize`](https://github.com/necolas/normalize.css) (open them in
  their respective repositories).


## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful, so thanks!

Guidelines for bug reports:

0. **[Validate your HTML](https://html5.validator.nu/)** to ensure your
   problem isn't caused by a simple error in your own code.

1. **Use the GitHub issue search** &mdash; check if the issue has already been
   reported.

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the
   latest `main` or development branch in the repository.

3. **Isolate the problem** &mdash; ideally create a [reduced test
   case](https://css-tricks.com/reduced-test-cases/) and a live example.
   [This JS Bin](https://jsbin.com/lefey/1/edit?html,output) is a helpful template.


A good bug report shouldn't leave others needing to chase you up for more
information. Please try to be as detailed as possible in your report. What is
your environment? What steps will reproduce the issue? What browser(s) and OS
experience the problem? Do other browsers show the bug differently? What
would you expect to be the outcome? All these details will help people to fix
any potential bugs.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If
> suitable, include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>
> `<url>` - a link to the reduced test case
>
> Any other information you want to share that is relevant to the issue being
> reported. This might include the lines of code that you have identified as
> causing the bug, and potential solutions (and your opinions on their
> merits).

### Reporting upstream browser bugs

Sometimes bugs reported to us are actually caused by bugs in the browser(s) themselves, not bugs in Bootstrap per se.

| Vendor(s)     | Browser(s)                   | Rendering engine | Bug reporting website(s)                                                              | Notes                                                    |
| ------------- | ---------------------------- | ---------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Mozilla       | Firefox                      | Gecko            | https://bugzilla.mozilla.org/enter_bug.cgi                                            | "Core" is normally the right product option to choose.   |
| Apple         | Safari                       | WebKit           | https://bugs.webkit.org/enter_bug.cgi?product=WebKit <br> https://bugreport.apple.com/ | In Apple's bug reporter, choose "Safari" as the product. |
| Google, Opera | Chrome, Chromium, Opera v15+ | Blink            | https://bugs.chromium.org/p/chromium/issues/list                                      | Click the "New issue" button.                            |
| Microsoft     | Edge                         | EdgeHTML         | https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/                 |                                                          |


## Feature requests

Feature requests are welcome, but please note that they **must target
[TODC Bootstrap v4](https://github.com/todc/todc-bootstrap/tree/v4-dev),** because
TODC Bootstrap v3 is now in maintenance mode and is closed off to new features.
This is so that we can focus our efforts on TODC Bootstrap v5, the future of the
framework.

Before opening a feature request, please take a moment to find out whether your idea
fits with the scope and aims of the project. It's up to *you* to make a strong
case to convince the project's developers of the merits of this feature. Please
provide as much detail and context as possible.


## Pull requests

Good pull requests—patches, improvements, new features—are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant pull request (e.g.
implementing features, refactoring code, porting to a different language),
otherwise you risk spending a lot of time working on something that the
project's developers might not want to merge into the project.

Please adhere to the [coding guidelines](#code-guidelines) used throughout the
project (indentation, accurate comments, etc.) and any other requirements
(such as test coverage).

**Do not edit `todc-bootstrap.css`, or `bootstrap.js`
directly!** Those files are automatically generated. You should edit the
source files in [`/todc-bootstrap/scss/`](https://github.com/todc/todc-bootstrap/tree/main/scss) instead.

Similarly, when contributing to TODC Bootstrap's documentation, you should edit the
documentation source files in
[the `/todc-bootstrap/site/content/docs/` directory of the `main` branch](https://github.com/todc/todc-bootstrap/tree/main/site/content/docs).
**Do not edit the `gh-pages` branch.** That branch is generated from the
documentation source files and is managed separately by the TODC Bootstrap Core Team.

Adhering to the following process is the best way to get your work
included in the project:

1. [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone your fork,
   and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/todc-bootstrap.git
   # Navigate to the newly cloned directory
   cd todc-bootstrap
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/todc/todc-bootstrap.git
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout main
   git pull upstream main
   ```

3. Create a new topic branch (off the main project development branch) to
   contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Commit your changes in logical chunks. Please adhere to these [git commit
   message guidelines](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
   or your code is unlikely to be merged into the main project. Use Git's
   [interactive rebase](https://help.github.com/articles/about-git-rebase)
   feature to tidy up your commits before making them public.

5. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream main
   ```

6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

7. [Open a Pull Request](https://help.github.com/articles/about-pull-requests/)
    with a clear title and description against the `main` branch.

**IMPORTANT**: By submitting a patch, you agree to allow the project owners to
license your work under the terms of the [MIT License](../LICENSE) (if it
includes code changes) and under the terms of the
[Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/)
(if it includes documentation changes).


## Code guidelines

### HTML

[Adhere to the Code Guide.](https://codeguide.co/#html)

- Use tags and elements appropriate for an HTML5 doctype (e.g., self-closing tags).
- Use CDNs and HTTPS for third-party JS when possible. We don't use protocol-relative URLs in this case because they break when viewing the page locally via `file://`.
- Use [WAI-ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) attributes in documentation examples to promote accessibility.

### CSS

[Adhere to the Code Guide.](https://codeguide.co/#css)

- When feasible, default color palettes should comply with [WCAG color contrast guidelines](https://www.w3.org/TR/WCAG20/#visual-audio-contrast).
- Except in rare cases, don't remove default `:focus` styles (via e.g. `outline: none;`) without providing alternative styles. See [this A11Y Project post](www.a11yproject.com/posts/2013-01-25-never-remove-css-outlines/) for more details.

### JS

- No semicolons (in client-side JS)
- 2 spaces (no tabs)
- strict mode
- "Attractive"

### Checking coding style

Run `npm run test` before committing to ensure your changes follow our coding standards.


## License

By contributing your code, you agree to license your contribution under the [MIT License](../LICENSE).
By contributing to the documentation, you agree to license your contribution under the [Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/).



## Release checklist

1. Update version numbers using `npm run change-version old_version new_version`. Review the changes and stage them manually.
2. Run `grunt` one last time.
3. Push to `main` branch.
4. Run grunt prep-release.
5. Merge `main` into `gh-pages`.
6. Create release on GitHub with `/dist/` folder and release notes.
7. Push `gh-pages`.
8. npm publish
