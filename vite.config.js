import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    // Adicione esta seção 'proxy'
    proxy: {
      // Qualquer requisição que comece com /api será redirecionada
      '/api': {
        // Coloque aqui a URL BASE da sua API local REAL
        // (O endereço que funciona no navegador do seu computador)
        target: 'http://lasensazioneapi.test', // << CONFIRME SE É ESSA A URL BASE
        changeOrigin: true, // Necessário para hosts virtuais como .test
        // Reescreve o caminho: remove o '/api' antes de mandar para o target
        // Ex: /api/json/usuarios -> http://lasensazioneapi.test/json/usuarios
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // Você pode adicionar outros proxies se precisar acessar
      // outras partes do seu servidor local, como uploads:
      // '/wp-content': {
      //   target: 'http://lasensazioneapi.test',
      //   changeOrigin: true,
      // }
    },
    // Opcional: garante que o Vite escute em todas as interfaces
    // host: '0.0.0.0' // Se não quiser usar a flag --host no comando sempre
  },
});
