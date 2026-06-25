#!/usr/bin/env node

import { Command } from 'commander';
import { initCommand } from '../cli/init.js';
import { updateCommand } from '../cli/update.js';
import { verifyCommand } from '../cli/verify.js';

const program = new Command();

program
  .name('o16g')
  .description('CLI for o16g-agentic-sdk')
  .version('1.3.0');

program
  .command('init')
  .description('Initialize o16g framework in the current project')
  .action(initCommand);

program
  .command('update')
  .description('Update o16g rules from the central brain')
  .action(updateCommand);

program
  .command('verify')
  .description('Verify that the project is compliant with o16g rules and SDD')
  .action(verifyCommand);

program.parse();
