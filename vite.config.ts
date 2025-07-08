import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.PGHOST': JSON.stringify(env.PGHOST),
        'process.env.PGDATABASE': JSON.stringify(env.PGDATABASE),
        'process.env.PGUSER': JSON.stringify(env.PGUSER),
        'process.env.PGPASSWORD': JSON.stringify(env.PGPASSWORD),
        'process.env.PGSSLMODE': JSON.stringify(env.PGSSLMODE),
        'process.env.PGCHANNELBINDING': JSON.stringify(env.PGCHANNELBINDING)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});