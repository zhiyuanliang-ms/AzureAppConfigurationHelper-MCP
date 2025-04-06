import { program } from 'commander';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createServer } from './server.js';

const packageJSON = require('../package.json');

program
    .version('Version ' + packageJSON.version)
    .name(packageJSON.name)
    .action(async () => {
        const server = createServer();
        await server.connect(new StdioServerTransport());
    });

program.parse(process.argv);
