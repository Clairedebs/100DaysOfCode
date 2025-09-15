# Taskmanager

Taskmanager is a modern Angular application for managing daily tasks. It features a clean UI built with Tailwind CSS and includes:

- **Task List**: View all tasks with title, description, due date, and status.
- **Add Task**: Create new tasks with required details.
- **Edit & Delete**: Update or remove tasks directly from the task card.
- **Stats**: See statistics about your tasks (completed, ongoing, etc.).
- **Responsive Design**: The interface adapts to all screen sizes.
- **Backend Integration**: Connects to a Java Spring Boot API for persistent data storage.

### Technical Stack
- Angular 20+
- Tailwind CSS for styling
- RxJS for reactive programming
- Java Spring Boot backend (API)

### Features Implemented
- Task cards with edit/delete buttons and colored status badges
- Due date formatting and visibility
- CORS configuration for backend API access
- Modular component structure (addtask, header, stats, taskcard)

---
#
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
