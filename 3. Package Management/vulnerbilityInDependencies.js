// **Node Package Security – Notes**

// * Security issues can exist in **any package**.
// * Node packages may have **vulnerabilities**; staying updated is key.

// **1. Security Updates**

// * Example: Axios `0.20` had a critical vulnerability.
// * Update to `0.21.1` to fix it.

// **2. npm Audit**

// * Run `npm audit` to **check for security issues** in dependencies.
// * Reports issues with severity (high, moderate, low).
// * Example: server-side request forgery vulnerability in Axios.

// **3. Fixing Issues**

// * Run `npm audit fix` to automatically **update vulnerable packages**.
// * If no update is available, consider **switching to a safer package**.

// **4. Best Practices**

// * Regularly run `npm audit` in projects.
// * Take audit warnings seriously; update dependencies promptly.
// * Security is ongoing: hackers find issues, developers patch them.

// **Summary**

// * Keep dependencies updated.
// * Use `npm audit` and `npm audit fix`.
// * Security requires vigilance, not just a single check.
