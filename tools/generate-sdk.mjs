import { mkdirSync, writeFileSync } from 'node:fs';
const revision = process.env.SCHEMA_REVISION || 'one';
const fields = revision === 'one' ? ['id', 'title'] : ['id', 'heading'];
mkdirSync('frontend/libs/sdk-types/src/generated', { recursive: true });
writeFileSync('frontend/libs/sdk-types/src/generated/schema.cjs', 'module.exports = ' + JSON.stringify({ schemaFields: fields }) + ';\n');
