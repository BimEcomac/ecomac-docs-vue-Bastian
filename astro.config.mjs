import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Transformación Digital',
    logo: {
      light: 'src/assets/LogoEcomac.png',
      dark: 'src/assets/LogoEcomac.png',
      // Reemplazo de titulo por el logo
      replacesTitle: true
    },
    social: {},
    sidebar: [{
      label: 'Local',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Vagrant',
        slug: 'local/vagrant'
      }, {
        label: 'Homestead',
        slug: 'local/homestead'
      }, {
        label: 'Instalación Tecnologias',
        slug: 'local/tecnologias'
      }]
    }, {
      label: 'Desarrollo',
      items: [{
        label: 'Bulma',
        slug: 'desarrollo/bulma'
      }, {
        label: 'Odin',
        slug: 'desarrollo/odin'
      }, {
        label: 'Batman',
        slug: 'desarrollo/batman'
      }]
    }, {
      label: 'Producción',
      autogenerate: {
        directory: 'produccion'
      }
    }, {
      label: 'Base de Datos',
      items: [{
        label: 'Asgard',
        slug: 'db/asgard'
      }, {
        label: 'Somos-Ecomac',
        slug: 'db/somosecomac'
      }]
    }],
    customCss: ['./src/tailwind.css']
  }), tailwind({
    applyBaseStyles: false
  }), vue()]
});