# AngularBindingViewEncapsulation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.4.

Section 5 (Components &amp; Databinding Deep Dive) completion project of [Angular4 - The Complete Guide](https://www.udemy.com/course-dashboard-redirect/?course_id=756150) on www.udemy.com.

https://floresj4.github.io/angular-binding-view-encapsulation/

Three components are created for this exercise: game-controller, odd-container, and even-container.  Game-controller provides two buttons for starting and stopping operations.  A start click event initiates a 1 second interval to increment and emit a number to the parent app.component.  A stop click event clears the interval, but does not reset the number.

Odd-container manages an aliased @Input, data-value, for responding to external data changes.  The odd-container presentation iterates to display the values it is receives as input from the parent app.component.

Even-container contains no @Input as its presentation is handled via ng-content - the presentation of this component is pushed via the parent app.component.

A global .number-block style is provided and applied to the even-container.  Odd-container encapsulates its own style to overwrite this global style.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.