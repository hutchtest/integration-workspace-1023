const { schemaFields } = require('@app/sdk-types');
test('the portfolio schema exposes title', () => { expect(schemaFields).toContain('title'); });
