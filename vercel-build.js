const { execSync } = require("child_process");
const os = require("os");
const path = require("path");

function run(cmd) {
  console.log(`Running: ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

async function main() {
  const denoDir = path.join(process.cwd(), ".deno");
  const denoBin = path.join(denoDir, "deno");
  run(`curl -fsSL https://deno.land/install.sh | sh`);
  process.env.PATH += `:${denoDir}`;
  run(`.deno/bin/deno task build`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
