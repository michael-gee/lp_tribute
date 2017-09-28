import Homepage from '@/components/Views/Homepage'

const AlbumList = resolve => {
  require.ensure(['@/components/Albums/Album-List'], () => {
    resolve(require('@/components/Albums/Album-List'));
  }, 'albums');
}
const Album = resolve => {
  require.ensure(['@/components/Albums/Album'], () => {
    resolve(require('@/components/Albums/Album'));
  }, 'albums');
}

const Song = resolve => {
  require.ensure(['@/components/Songs/Song'], () => {
    resolve(require('@/components/Songs/Song'));
  });
}

const Tribute = resolve => {
  require.ensure(['@/components/Views/Tribute'], () => {
    resolve(require('@/components/Views/Tribute'));
  });
}
const Other = resolve => {
  require.ensure(['@/components/Views/Other'], () => {
    resolve(require('@/components/Views/Other'));
  });
}

const View404 = resolve => {
  require.ensure(['@/components/Views/View-404'], () => {
    resolve(require('@/components/Views/View-404'));
  });
}


export const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Homepage
  },
  {
    path: '/tribute',
    name: 'tribute',
    component: Tribute
  },
  {
    path: '/other',
    name: 'other',
    component: Other
  },

  {
    path: '/albums',
    name: 'albums',
    component: AlbumList
  },
  {
    path: '/album/:album',
    name: 'album',
    props: true,
    component: Album
  },

  {
    path: '/song/:song',
    name: 'song',
    props: true,
    component: Song
  },
  {
    path: '/404-route-not-found',
    name: 'view404',
    component: View404
  },

  {
    path: '/*',
    redirect: { name: 'view404'}
  }
];
