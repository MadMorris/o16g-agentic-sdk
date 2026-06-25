import { createDirectories, downloadFile, FILES_TO_DOWNLOAD } from './utils.js';

export async function initCommand() {
  console.log('🚀 Initializing o16g-agentic-sdk...');
  
  await createDirectories();

  for (const file of FILES_TO_DOWNLOAD) {
    await downloadFile(file.url, file.dest);
  }

  console.log('🎉 Initialization complete!');
  console.log('💡 You can now run "bash scripts/bootstrap.sh" or let your agent run it to generate the State Canvas.');
}
