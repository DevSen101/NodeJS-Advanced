// **Package-lock.json – Notes**

// * The `package-lock.json` file is automatically created when npm modifies `node_modules` or `package.json`.
// * It provides an exact record of the dependency tree — including versions, source URLs, and integrity checks.
// * Ensures all developers on a project install the **same dependency versions**.

// **Purpose**

// * Helps teams avoid bugs caused by version differences.
// * Guarantees consistency between different environments or machines.
// * Should always be shared with source code (unlike `node_modules`).

// **Details Stored**

// * Exact versions of every dependency and sub-dependency.
// * Source location (like npm registry).
// * Integrity hash to verify the package is not corrupted.

// **Semantic Versioning**

// * `^` (caret) allows updates that do **not** change the major version.

//   * Example: `^1.2.0` → matches 1.2.x, 1.3.x but not 2.0.0.
// * Special rule: if version < 1.0.0, then **minor version acts as major** (since early versions change often).
// * `~` (tilde) allows only **patch updates**.

//   * Example: `~4.16.0` → matches 4.16.x only, not 4.17.x.

// **Why It Matters**

// * `package.json` gives a version *range*, but `package-lock.json` locks the **exact** version used.
// * Prevents issues where one developer gets a newer version that introduces breaking changes.
// * Example: If you had Axios 0.21.0 and your teammate installs 0.21.1 (due to caret `^`), behavior might differ.
// * With `package-lock.json`, everyone installs the same version — no version mismatch bugs.

// **Best Practices**

// * Commit `package-lock.json` to your repository.
// * Never edit it manually; npm manages it.
// * Do not share `node_modules`; always regenerate it using `npm install`.

// **Summary**

// * `package-lock.json` locks exact dependency versions.
// * Ensures consistent builds across machines.
// * Prevents bugs from unintentional updates.
// * Should always be included in version control for stability.
