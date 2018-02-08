---
layout: docs
title: Buttons
description: Use TODC Bootstrap's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
group: todc-bootstrap
toc: true
---

## Flat buttons

In need of a button, but you'd like something flatter? Replace the default modifier classes with the <code>.btn-flat-*</code> ones to remove all background images, borders, and colors on any button.

{% example html %}
{% for color in site.data.theme-colors %}
<button type="button" class="btn btn-flat-{{ color.name }}">{{ color.name | capitalize }}</button>{% endfor %}
{% endexample %}
