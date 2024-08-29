import { main } from './criteria-elastic-search';

describe('CriteriaElasticSearch Integration Tests', () => {
  it('should learn criteria pattern', async () => {
    await main();
  }, 6000000);
});
