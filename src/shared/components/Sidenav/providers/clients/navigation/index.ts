import { FliptFlag } from "../../../../../../type/flipt";
import { useFeature } from "../../../../../hooks/features";

type Route = {
  path: string,
  title: string,
  icon: string,
  active: () => boolean,
}

export const useSidenavNavigation = (path: string, flags: FliptFlag[]) => {

  const ExactMatch = function(this: Route) { return this.path === path; }
  const StartWith = function(this: Route) { return path.startsWith(this.path); }
  const validate = useFeature(flags)

  return {
    extra: {
      routes: [
        {
          path: '/',
          title: 'Home',
          icon: 'lni-home',
          active: ExactMatch,
          enabled: validate('home'),
        },
        {
          path: '/apps',
          title: 'Apps',
          icon: 'lni-grid-alt',
          active: StartWith,
          enabled: validate('apps'),
        },
        {
          path: '/cdn',
          title: 'CDN',
          icon: 'lni-code',
          active: StartWith,
          enabled: validate('cdn'),
        }, 
        {
          path: '/monitoring',
          title: 'Monitoring',
          icon: 'lni-display',
          active: StartWith,
          enabled: validate('monitoring'),
        },
        {
          path: '/processes',
          title: 'Processes',
          icon: 'lni-control-panel',
          active: StartWith,
          enabled: validate('processes'),
        },
        {
          path: '/media',
          title: 'Media',
          icon: 'lni-image',
          active: StartWith,
          enabled: validate('media'),
        },
        {
          path: '/devices',
          title: 'Devices',
          icon: 'lni-bulb',
          active: StartWith,
          enabled: validate('devices'),
        }
      ]
    }
  }
}