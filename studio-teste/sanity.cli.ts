import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'uim8fqcn',
    dataset: 'production'
  },
  deployment: {
    // Studio publicado em https://teste-r2.sanity.studio
    appId: 'hkc66goqqjbawg1v7i561m5f',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
