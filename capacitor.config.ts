import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'test.app',
  appName: 'test-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
