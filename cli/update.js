import { createDirectories, downloadFile, FILES_TO_DOWNLOAD } from './utils.js';

export async function updateCommand() {
  console.log('🔄 Updating o16g-agentic-sdk rules from the central brain...');
  
  await createDirectories();

  for (const file of FILES_TO_DOWNLOAD) {
    // In a real scenario we could check diffs, but for now we just overwrite
    await downloadFile(file.url, file.dest);
  }

  console.log('✅ Update complete. Your policies are now in sync with the central brain.');
}
