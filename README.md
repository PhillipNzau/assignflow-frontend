# AssignFlow

**AssignFlow** is a front-end platform designed to streamline the creation, distribution, and submission of assignments for lecturers and students. The platform enables lecturers to upload assignment PDFs, set submission deadlines, generate shareable links, and track submissions (including revenue per submission). Students can download assignments, complete them, and submit their work back as PDFs—with an automatic cost calculation based on page count.

## Features

- **User Authentication:**

  - Registration and login for both lecturers and students.

- **Lecturer Dashboard:**

  - Create assignments with PDF uploads and deadline settings.
  - Auto-generated shareable assignment links.
  - View all created assignments, submission counts, and revenue summaries.
  - Download submitted assignments.

- **Student Portal:**

  - View and download available assignments.
  - Submit completed assignments as PDFs.
  - Automatic page count of submitted PDFs with printing cost calculation .
  - Track submission history and view payment statuses.

- **Deadline Enforcement:**
  - UI disables submission options once the assignment deadline has passed.

## Tech Stack

- **Framework:** Angular
- **Styling:** CSS/SCSS Tailwind CSS
- **Routing:** Angular Routing
- **State Management:** NgRx
- **PDF Handling:** Library to count pages in PDFs (e.g., [pdf.js](https://mozilla.github.io/pdf.js/))
- **Testing:** Jest, Cypress

## Installation & Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/assignflow-frontend.git
   cd assignflow-frontend
   ```

2. **Install Dependencies:**

   ```bash
   npm install or yarn install or bun install
   ```

3. **Run the Development Server:**

   ```bash
   npm start or yarn start or bun start
   ```

4. **Build for Production:**

   ```bash
   npm run build or yarn build or bun run build
   ```
