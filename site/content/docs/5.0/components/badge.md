---
layout: docs
title: Badges
description: Documentation and examples for badges, our small count and labeling component.
group: components
toc: true
---

## Example

Badges scale to match the size of the immediate parent element by using relative font sizing and `em` units. As of v5, badges no longer have focus or hover styles for links.

{{< example >}}
<h1>Example heading <span class="badge bg-secondary">New</span></h1>
<h2>Example heading <span class="badge bg-secondary">New</span></h2>
<h3>Example heading <span class="badge bg-secondary">New</span></h3>
<h4>Example heading <span class="badge bg-secondary">New</span></h4>
<h5>Example heading <span class="badge bg-secondary">New</span></h5>
<h6>Example heading <span class="badge bg-secondary">New</span></h6>
{{< /example >}}

Badges can be used as part of links or buttons to provide a counter.

{{< example >}}
<button type="button" class="btn btn-primary">
  Notifications <span class="badge bg-secondary">4</span>
</button>
{{< /example >}}

Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.

Unless the context is clear (as with the "Notifications" example, where it is understood that the "4" is the number of notifications), consider including additional context with a visually hidden piece of additional text.

{{< example >}}
<button type="button" class="btn btn-primary">
  Profile <span class="badge bg-secondary">9</span>
  <span class="visually-hidden">unread messages</span>
</button>
{{< /example >}}

## Background colors

Use our background utility classes to quickly change the appearance of a badge. Please note that when using Bootstrap's default `.bg-light`, you'll likely need a text color utility like `.text-dark` for proper styling. This is because background utilities do not set anything but `background-color`.

{{< example >}}
{{< badge.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="badge bg-{{ .name }}{{ if or (eq .name "light") (eq .name "warning") (eq .name "info") }} text-dark{{ end }}">{{ .name | title }}</span>{{- end -}}
{{< /badge.inline >}}
{{< /example >}}

{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Pill badges

Use the `.rounded-pill` utility class to make badges more rounded with a larger `border-radius`.

{{< example >}}
{{< badge.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="badge rounded-pill bg-{{ .name }}{{ if or (eq .name "light") (eq .name "warning") (eq .name "info") }} text-dark{{ end }}">{{ .name | title }}</span>{{- end -}}
{{< /badge.inline >}}
{{< /example >}}
