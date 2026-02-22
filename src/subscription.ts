import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 996,
  name: 'GKD-Subscription',
  version: 0,
  author: 'dlh',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/dlh996/gkd-subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
