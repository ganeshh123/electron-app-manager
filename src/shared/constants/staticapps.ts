import { AppInfo } from 'shared/types'

export const StaticApps: AppInfo[] = [
  {
    name: `discord`,
    displayName: `Discord`,
    process: `Discord.exe`,
    icon: `https://www.svgrepo.com/show/353655/discord-icon.svg`,
    cache: {
      win32: {
        appData: [
          'roaming/discord/Cache',
          'roaming/discord/Code Cache',
          'roaming/discord/GPUCache',
        ],
      },
    },
    userData: {
      win32: {
        appData: ['roaming/discord'],
      },
    },
    install: {
      win32: {
        appData: ['local/Discord'],
      },
    },
    boot: {
      win32: {
        appData: ['local/Discord/update.exe'],
      },
    },
  },
  {
    name: `spotify`,
    displayName: `Spotify`,
    process: `spotify.exe`,
    icon: `https://www.svgrepo.com/show/355256/spotify.svg`,
    cache: {
      win32: {
        appData: [
          'local/Spotify/Browser/Cache',
          'local/Spotify/Browser/Code Cache',
          'local/Spotify/Browser/GPUCache',
        ],
      },
    },
    userData: {
      win32: {
        appData: ['local/Spotify'],
      },
    },
    install: {
      win32: {
        appData: ['roaming/Spotify'],
      },
    },
    boot: {
      win32: {
        appData: ['roaming/Spotify/Spotify.exe'],
      },
    },
  },
]
