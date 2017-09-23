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

const SongList = resolve => {
  require.ensure(['@/components/Songs/Song-List'], () => {
    resolve(require('@/components/Songs/Song-List'));
  }, 'songs');
}
const Song = resolve => {
  require.ensure(['@/components/Songs/Song'], () => {
    resolve(require('@/components/Songs/Song'));
  }, 'songs');
}

const Tribute = resolve => {
  require.ensure(['@/components/Views/Tribute'], () => {
    resolve(require('@/components/Views/Tribute'));
  });
}
const Feedback = resolve => {
  require.ensure(['@/components/Views/Feedback'], () => {
    resolve(require('@/components/Views/Feedback'));
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
    path: '/feedback',
    name: 'feedback',
    component: Feedback
  },

  {
    path: '/albums',
    name: 'albums',
    component: AlbumList
  },
  {
    path: '/albums/:album',
    name: 'album',
    component: Album
  },

  {
    path: '/songs',
    name: 'songs',
    component: SongList
  },
  {
    path: '/song/:song',
    name: 'song',
    component: Song
  }
];
