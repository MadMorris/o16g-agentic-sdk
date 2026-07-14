import fs from 'fs/promises';

export async function verifyCommand() {
  console.log('🔍 Verifying o16g framework compliance...');

  let compliant = true;

  try {
    await fs.access('.o16g_state.md');
    console.log('✅ .o16g_state.md (REASONS Canvas) exists.');
  } catch {
    console.error('❌ .o16g_state.md is missing. SDD is violated.');
    compliant = false;
  }

  try {
    await fs.access('.o16g/core_axioms.md');
    console.log('✅ core_axioms.md exists.');
  } catch {
    console.error('❌ .o16g/core_axioms.md is missing. Run "o16g update".');
    compliant = false;
  }

  if (compliant) {
    console.log('🎉 Project is compliant with o16g rules.');
  } else {
    console.error('🚨 Project has DRIFTED or is not initialized properly. [BLOCKED_DRIFT]');
    process.exit(1);
  }
}
