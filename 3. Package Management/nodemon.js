// **Using npm Tools – Notes**

// **1. Local vs Global Packages**

// * **Local install:** Packages are saved in `node_modules` of the project.

//   * Can share project with `package.json`.
//   * Run `npm install` to restore dependencies.
// * **Global install:** Packages available anywhere on your machine.

//   * Use `npm install -g <package>`
//   * Useful for tools used across projects.
//   * Example: `nodemon`.

// **2. Nodemon**

// * Automatically **restarts Node apps** when source code changes.
// * Install locally: `npm install nodemon`
// * Run in script: `"dev": "nodemon <file>"` → `npm run dev`
// * Detects syntax errors immediately and shows feedback.

// **3. Running Executables**

// * Local install: Executable in `./node_modules/.bin/`

//   * Can run using full path: `./node_modules/.bin/nodemon <file>`
// * Global install: Can run directly in terminal: `nodemon <file>`

// **4. Pros and Cons of Global Install**

// * **Pros:** Saves space, convenient for multiple projects.
// * **Cons:** Makes `package.json` less self-contained.

//   * Source code may depend on external tools not listed in `package.json`.
// * **Recommendation:** Prefer local installs for project consistency.

// **Summary:**

// * Use **nodemon** for automatic restarts during development.
// * Keep dependencies local unless a tool is needed globally.
// * Local installs ensure your project is self-contained and reproducible.
