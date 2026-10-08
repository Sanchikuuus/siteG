// BASE_URL містить префікс репозиторію, потрібний для GitHub Pages.
export function sitePath(path: string = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const route = path.replace(/^\/+|\/+$/g, '');
  return `${base}/${route}${route ? '/' : ''}`;
}
