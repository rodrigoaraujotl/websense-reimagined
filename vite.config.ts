import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePluginRadar } from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    VitePluginRadar({
      /**
       * enable or disable scripts injection in development
       * default: false
       */
      enableDev: false,

      // Google Analytics (multiple tag can be set with an array)
      analytics: [
        {
          /**
           * Measurement id
           */
          id: 'G-DR05T7MJQY',
          consentDefaults: {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            wait_for_update: 500
          }
        }
      ],

      // Google Tag Manager (multiple tag can be set with an array)
      gtm: [
        {
          id: 'GTM-T588SR73'
        }
      ],
      posthog: {
        enabled: true, // or false
        token: 'phc_jr6lReeFF8bVNHjXHFi40vRFN0tebVBdMhisRfQiABB', // Find this on https://us.posthog.com/project/settings/project-details#variables
        api_host: 'https://us.i.posthog.com',
      },
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
