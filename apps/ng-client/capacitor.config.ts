import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'NGClientApp',
  webDir: '../../dist/apps/ng-client',
  bundledWebRuntime: false,
  plugins: {
    CapacitorCookies: {
      enabled: true,
    },
  }
};

export default config;
