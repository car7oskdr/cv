// Une el `base` de Astro con la ruta de un asset de /public garantizando
// exactamente una barra. Funciona tanto para Project Page (base '/cv') como
// para User Page (base '/'), sin importar si BASE_URL trae barra final o no.
const raw = import.meta.env.BASE_URL;
export const BASE = raw.endsWith('/') ? raw : raw + '/';

export const asset = (path: string): string => BASE + path.replace(/^\//, '');
