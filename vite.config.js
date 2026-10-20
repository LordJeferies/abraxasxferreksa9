import {defineConfig} from 'vite';
export default defineConfig({base:'/abraxasxferreksa9/',build:{rollupOptions:{output:{manualChunks(id){if(id.includes('/node_modules/three/')||id.includes('/node_modules/@react-three/'))return 'scene';}}}}});
