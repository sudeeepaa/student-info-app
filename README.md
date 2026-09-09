# Student Information System

## Team Members

- Sudeepa Santhanam (Reg. No. 2547252) - Team Lead / Developer
- Akashdeep Dey - UI Developer
- Albin - JavaScript Developer

## Project Description

Student Information System is a simple web application developed to demonstrate a collaborative Git workflow.

The application displays student information such as name, register number, and programme. It also provides a button to display additional student details.

The main purpose of this project is to understand Git and GitHub collaboration using branches, commits, pull requests, merging, and merge conflict resolution.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- Visual Studio Code

## Git Branching Strategy

The project uses a main branch and separate feature branches.

### Main Branch

The `main` branch contains the stable version of the application.

### Feature Branches

The following feature branches were created:

- `feature/ui`
- `feature/javascript`
- `feature/contact`
- `feature/student-name`
- `feature/app-title`

Developers work on feature branches instead of directly modifying the main branch. After completing a feature, a Pull Request is created to merge the changes into the main branch.

## Pull Requests Created

1. `feature/ui` → `main`
2. `feature/javascript` → `main`
3. `feature/contact` → `main`
4. `feature/student-name` → `main`
5. `feature/app-title` → `main`

## Merge Conflict

### What caused the conflict?

A merge conflict was intentionally created when two developers modified the same `<h1>` line in `index.html` differently.

One branch (`feature/student-name`) changed:

```html
<h1>Student Information System</h1>
```

to:

```html
<h1>Student Management System</h1>
```

Another branch (`feature/app-title`) changed the same line to:

```html
<h1>MCA Student Information Portal</h1>
```

When both branches were merged into `main`, Git could not automatically determine which version should be used.

### How was it resolved?

The conflict was resolved manually by combining the two changes:

```html
<h1>Student Management System - MCA</h1>
```

The conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) were removed and the resolved file was committed and pushed to GitHub.

## How to Run the Application

1. Clone the repository.

```bash
git clone https://github.com/sudeepaa/student-info-app.git
```

2. Open the project folder.

```bash
cd student-info-app
```

3. Open `index.html` in a web browser.

No backend or database is required.
