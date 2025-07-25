const { execSync } = require("child_process");

console.log("📦 Installing Deno...");
execSync("curl -fsSL https://deno.land/install.sh | sh", { stdio: "inherit" });

const home = process.env.HOME || process.env.USERPROFILE;
const denoPath = `${home}/.deno/bin`;

process.env.PATH = `${denoPath}:${process.env.PATH}`;

console.log("🏗️ Building site with Deno...");
execSync("~/.deno/bin/deno task build", { stdio: "inherit" });
