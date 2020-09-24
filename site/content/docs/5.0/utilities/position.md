---
layout: docs
title: Position
description: Use these shorthand utilities for quickly configuring the position of an element.
group: utilities
toc: true
---

## Position values

Quick positioning classes are available, though they are not responsive.

{{< highlight html >}}
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
{{< /highlight >}}

## Arrange elements

Arrange elements easily with the edge positioning utilities. The format is `{property}-{position}`.

Where *property* is one of:

- `top` - for the vertical `top` position
- `left` - for the horizontal `left` position
- `bottom` - for the vertical `bottom` position
- `right` - for the horizontal `right` position

Where *position* is one of:

- `0` - for `0` edge position
- `50` - for `50%` edge position
- `100` - for `100%` edge position

(You can add more position values by adding entries to the `$position-values` Sass map variable.)

{{< example class="bd-example-position-utils" >}}
<div class="position-relative">
  <div class="position-absolute top-0 left-0"></div>
  <div class="position-absolute top-0 right-0"></div>
  <div class="position-absolute top-50 left-50"></div>
  <div class="position-absolute bottom-50 right-50"></div>
  <div class="position-absolute bottom-0 left-0"></div>
  <div class="position-absolute bottom-0 right-0"></div>
</div>
{{< /example >}}

## Center elements

In addition, you can also center the elements with the transform utility class `.translate-middle`.

This class applies the transformations `translateX(-50%)` and `translateY(-50%)` to the element which, in combination with the edge positioning utilities, allows you to absolute center an element.

{{< example class="bd-example-position-utils" >}}
<div class="position-relative">
  <div class="position-absolute top-0 left-0 translate-middle"></div>
  <div class="position-absolute top-0 left-50 translate-middle"></div>
  <div class="position-absolute top-0 left-100 translate-middle"></div>
  <div class="position-absolute top-50 left-0 translate-middle"></div>
  <div class="position-absolute top-50 left-50 translate-middle"></div>
  <div class="position-absolute top-50 left-100 translate-middle"></div>
  <div class="position-absolute top-100 left-0 translate-middle"></div>
  <div class="position-absolute top-100 left-50 translate-middle"></div>
  <div class="position-absolute top-100 left-100 translate-middle"></div>
</div>
{{< /example >}}

## Examples

Here are some real life examples of these classes:

{{< example class="bd-example-position-examples d-flex justify-content-around" >}}
<button type="button" class="btn btn-primary position-relative">
  Mails <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-secondary">+99 <span class="visually-hidden">unread messages</span></span>
</button>

<button type="button" class="btn btn-dark position-relative">
  Marker <svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-100 left-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#343a40" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
</button>

<button type="button" class="btn btn-primary position-relative">
  Alerts <span class="position-absolute top-0 left-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span>
</button>
{{< /example >}}

You can use these classes with existing components to create new ones. Remember that you can extend its functionality by adding entries to the `$position-values` variable.

{{< example class="bd-example-position-examples" >}}
<div class="position-relative m-4">
  <div class="progress" style="height: 1px;">
    <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <button type="button" class="position-absolute top-0 left-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">1</button>
  <button type="button" class="position-absolute top-0 left-50 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;">2</button>
  <button type="button" class="position-absolute top-0 left-100 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;">3</button>
</div>
{{< /example >}}

