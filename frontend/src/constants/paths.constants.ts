import {
  GoSignOut,
  GoBookmark,
  GoFileDirectory,
  GoFileSubmodule,
  GoFile,
  GoGist,
  GoFileCode,
  GoTelescope,
  GoPrimitiveSquare,
  GoPrimitiveDot,
  GoDiffAdded,
} from 'react-icons/go';

export const PATHS = [
  { label: 'Collections', path: '/collections' },
  { label: 'Faves', path: '/faves' },
  { label: 'Explore', path: '/explore' },
  { label: 'Add', path: '/explore/add' },
];

export const ACTIONS = [
  {
    label: 'Collections',
    path: '/collections',
    icon: GoFileDirectory,
  },
  { label: 'Faves', path: '/faves', icon: GoBookmark },
  { label: 'Explore', path: '/explore', icon: GoTelescope },
  { label: 'Add', path: '/explore/add', icon: GoDiffAdded },

  { label: 'Sign Out', path: '/logout', icon: GoSignOut },
];
