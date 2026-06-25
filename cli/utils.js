import fs from 'fs/promises';
import path from 'path';

export const O16G_BASE_URL = 'https://raw.githubusercontent.com/MadMorris/o16g-agentic-sdk/main';

export async function downloadFile(url, destPath) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
    const text = await res.text();
    await fs.mkdir(path.dirname(destPath), { recursive: true });
    await fs.writeFile(destPath, text, 'utf-8');
    console.log(`✅ Downloaded: ${destPath}`);
  } catch (err) {
    console.error(`❌ Error downloading ${url}:`, err.message);
  }
}

export async function createDirectories() {
  const dirs = ['.o16g/policies', '.o16g/prompts', 'scripts'];
  for (const dir of dirs) {
    await fs.mkdir(dir, { recursive: true });
    console.log(`📁 Ensured directory: ${dir}`);
  }
}

export const FILES_TO_DOWNLOAD = [
  { url: `${O16G_BASE_URL}/AGENTS.md`, dest: 'AGENTS.md' },
  { url: `${O16G_BASE_URL}/core/core_axioms.md`, dest: '.o16g/core_axioms.md' },
  { url: `${O16G_BASE_URL}/core/business_rules.yaml`, dest: '.o16g/policies/business_rules.yaml' },
  { url: `${O16G_BASE_URL}/core/reviewer.prompt`, dest: '.o16g/prompts/reviewer.prompt' },
  { url: `${O16G_BASE_URL}/scripts/bootstrap.sh`, dest: 'scripts/bootstrap.sh' }
];
