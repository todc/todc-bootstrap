<!-- stylelint-disable -->

TODO

## Config
  - Make sure sitemap.xml only contains https links

## General
  - Configure BrowserStack
  - Use transitions mixin
  - Use box-shadow mixin

## Colors
  - Red/Danger - maybe use red-700 #d32f2f
  - Orange/Warning - maybe use orange-400 #ffa726?

## Alerts
  - Done

## Badge
  - Done

## Breadcrumb
  - ~~Change the seperator and adjust the spacing~~
    - ~~https://github.com/twbs/bootstrap/pull/25581~~

## Buttons
  - Revist Buttons. Bootstrap changed the way they do things. Try to eliminate
    as much custom stuff as possible
  - Update the :hover, :active, :focus styles for btn-* and btn-outline-*
    - Add transitions
    - ~~Work on button-variant :focus/.focus~~
    - Work on button-variant :active/.active
    - Work on button-variant :disabled/.disabled
  - Add a Legacy Gmail style button as the default
  - Add variables for different button types, like btn-pill?
  - ~~The icon and FAB buttons should use a button-circle-variant mixin~~
  - ~~The button active background should be 20% darker than the background~~
  - ~~Create Floating Action Buttons.~~
  - ~~Create the Icon button.~~
  - ~~Rename `.btn-flat` to `.btn-text`?~~
  - ~~Use `.btn-flat` for a button without a shadow. Or create `.btn-raised` and
    make the default buttons flat.~~
  - ~~Check the color for the Seconday, Warning, and Light buttons~~
  - ~~Adjust the style for the button variants~~
  - ~~Adjust the style for the outline buttons~~

  ### Icon/FAB
  - Add dropdowns/dropups

## Button Group
  - Done

## Card
  - Done

## Carousel
  - Take a look at https://drive.google.com/u/1/settings/storage?hl=en

## Collapse
  - Done

## Dropdowns
  - Style for Icon/FAB

## Forms
  - Revist Forms. Bootstrap changed the way they do things
  - Add an input style like Google Calendar
    - `.custom-form-control`. make sure it works with different input types:
      - input - text, password, color, date, datetime, datetime-local,
        month, week, time, email, number, range, search, tel, url
      - select
      - checkbox
      - radio buttons
      - textarea
    - need a class for adding/changing the checked background color for
      checkboxes and radio buttons. `bg-gray-600`. Perhaps I should add
      `bg-gray-*` to Utilities/Colors/Background color... `bg-checked-gray-*`

  - Fix the regular checkbox/radio label alignment
    - https://github.com/twbs/bootstrap/issues/25794
  - ~~Fix the custom Radio button~~
  - Range
    - ~~Do not display the focus circle (box-shadow) when active & focus~~

## Input group
  - Done

## Jumbotron
  - Done

## List group
  - Done
  - Maybe add *Linked list group using list items* from previous version. Should
    it be added to List group or Navs? Can use existing styles to reproduce.
    Maybe create an Example page with TODC specific examples

## Modal
  - Done

## Navs
  - Done

## Navbar
  - Done
  - ~~Fix the height of the navbar when a form is included. Check all 3 sizes~~

## Pagination
  - Done

## Popovers
  - Done
  - Should custom docs be added that show how to remove the arrow?
  - ~~Remove the arrow~~

## Progress
  - Done

## Scrollspy
  - Done

## Shadows
  - Done
  - ~~Create classes under Utilities~~
  - ~~Create documentation~~

## Switches
  - To do

## Tooltips
  - Done
  - Should custom docs be added that show how to remove the arrow?

<!-- stylelint-enable -->
