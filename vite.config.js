import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: true,
        port: process.env.VITE_APP_PORT || 5173,
        hmr: {
            host: process.env.VITE_APP_HOST || 'localhost',
        },
        watch: {
            usePolling: true,
        },
    },
});
