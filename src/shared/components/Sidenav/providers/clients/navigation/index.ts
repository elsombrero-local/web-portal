
type Route = {
  path: string,
  title: string,
  icon: string,
  active: () => boolean,
}

export const useSidenavNavigation = (path: string) => {

  const ExactMatch = function(this: Route) { return this.path === path; }
  const StartWith = function(this: Route) { return path.startsWith(this.path); }

  return {
    extra: {
      routes: [
        {
          path: '/',
          title: 'Home',
          icon: 'lni-home',
          active: ExactMatch,
        },
        {
          path: '/apps',
          title: 'Apps',
          icon: 'lni-grid-alt',
          active: StartWith,
        },
        {
          path: '/cdn',
          title: 'CDN',
          icon: 'lni-code',
          active: StartWith,
        }, 
        {
          path: '/monitoring',
          title: 'Monitoring',
          icon: 'lni-display',
          active: StartWith,
        },
        {
          path: '/processes',
          title: 'Processes',
          icon: 'lni-control-panel',
          active: StartWith,
        },
        {
          path: '/media',
          title: 'Media',
          icon: 'lni-image',
          active: StartWith,
        },
        {
          path: '/devices',
          title: 'Devices',
          icon: 'lni-bulb',
          active: StartWith,
        }
      ]
    }
  }
}