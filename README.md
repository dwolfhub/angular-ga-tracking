angular-ga-tracking
===================

Angular Directives for Google Analytics Tracking

## Usage

### Including the module

```javascript
var app = angular.module("app", ["ga.tracker"]);
```

### Use the directives

#### Tracking Page Views

When the directive is used, it registers a page view at the current $location.path();. I like to add it once in each of my templates.

```html
<div class="home-template" ga-pageview tracking-id="XX-XXXXXXXX-XX">
```

#### Tracking Events (clicks)

When you add the diretive to an HTML element and that element is clicked, the event will be registered with GA.

```html
<a href="/#/prizes" ga-event event-name="some event" event-value="some value" tracking-id="XX-XXXXXXXX-XX">View Prizes</a>
```
