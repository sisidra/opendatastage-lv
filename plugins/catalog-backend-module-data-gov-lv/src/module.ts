import { coreServices, createBackendModule } from '@backstage/backend-plugin-api';

export const catalogModuleDataGovLv = createBackendModule({
  pluginId: 'catalog',
  moduleId: 'data-gov-lv',
  register(reg) {
    reg.registerInit({
      deps: { logger: coreServices.logger },
      async init({ logger }) {
        logger.info('Hello World!')
      },
    });
  },
});
