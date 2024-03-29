const atomKeys = {
  AUTH: 'auth',
  AUDIO_RESOURCE: 'audioResource',
  AUDIO_RESOURCE_AUTO_SET_PERMISSION: 'audioResourceAutoSetPermission',
  AUDIO_CONTROL: 'audioControl',
  AUDIO_AUTOPLAY: 'audioAutoplay',
} as const;

const selectorKeys = {
  AUTH: 'auth',
} as const;

export { atomKeys, selectorKeys };
