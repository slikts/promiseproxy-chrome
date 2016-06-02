/* Generated from api.json */
module.exports = {
  bookmarks: {
    get: 1,
    getChildren: 1,
    getRecent: 1,
    getTree: 0,
    getSubTree: 1,
    search: 1,
    create: 1,
    move: 2,
    update: 2,
    remove: 1,
    removeTree: 1
  },
  browserAction: {
    getTitle: 1,
    setIcon: 1,
    getPopup: 1,
    getBadgeText: 1,
    getBadgeBackgroundColor: 1
  },
  browsingData: {
    settings: 0,
    remove: 2,
    removeAppcache: 1,
    removeCache: 1,
    removeCookies: 1,
    removeDownloads: 1,
    removeFileSystems: 1,
    removeFormData: 1,
    removeHistory: 1,
    removeIndexedDB: 1,
    removeLocalStorage: 1,
    removePluginData: 1,
    removePasswords: 1,
    removeWebSQL: 1
  },
  commands: {
    getAll: 0
  },
  contextMenus: {
    create: 1,
    update: 2,
    remove: 1,
    removeAll: 0
  },
  cookies: {
    get: 1,
    getAll: 1,
    set: 1,
    remove: 1,
    getAllCookieStores: 0
  },
  debugger: {
    attach: 2,
    detach: 1,
    sendCommand: 3,
    getTargets: 0
  },
  desktopCapture: {
    chooseDesktopMedia: 2
  },
  devtools: {
    inspectedWindow: {
      eval: 2,
      getResources: 0
    },
    network: {
      getHAR: 0
    },
    panels: {
      create: 3,
      setOpenResourceHandler: 0,
      openResource: 2
    }
  },
  documentScan: {
    scan: 1
  },
  downloads: {
    download: 1,
    search: 1,
    pause: 1,
    resume: 1,
    cancel: 1,
    getFileIcon: 2,
    erase: 1,
    removeFile: 1,
    acceptDanger: 1
  },
  extension: {
    sendRequest: 2,
    isAllowedIncognitoAccess: 0,
    isAllowedFileSchemeAccess: 0
  },
  fontSettings: {
    clearFont: 1,
    getFont: 1,
    setFont: 1,
    getFontList: 0,
    clearDefaultFontSize: 1,
    getDefaultFontSize: 1,
    setDefaultFontSize: 1,
    clearDefaultFixedFontSize: 1,
    getDefaultFixedFontSize: 1,
    setDefaultFixedFontSize: 1,
    clearMinimumFontSize: 1,
    getMinimumFontSize: 1,
    setMinimumFontSize: 1
  },
  gcm: {
    register: 1,
    unregister: 0,
    send: 1
  },
  history: {
    search: 1,
    getVisits: 1,
    addUrl: 1,
    deleteUrl: 1,
    deleteRange: 1,
    deleteAll: 0
  },
  i18n: {
    getAcceptLanguages: 0,
    detectLanguage: 1
  },
  identity: {
    getAccounts: 0,
    getAuthToken: 1,
    getProfileUserInfo: 0,
    removeCachedAuthToken: 1,
    launchWebAuthFlow: 1
  },
  idle: {
    queryState: 1
  },
  input: {
    ime: {
      setComposition: 1,
      clearComposition: 1,
      commitText: 1,
      sendKeyEvents: 1,
      setCandidateWindowProperties: 1,
      setCandidates: 1,
      setCursorPosition: 1,
      setMenuItems: 1,
      updateMenuItems: 1,
      deleteSurroundingText: 1
    }
  },
  management: {
    getAll: 0,
    get: 1,
    getSelf: 0,
    getPermissionWarningsById: 1,
    getPermissionWarningsByManifest: 1,
    setEnabled: 2,
    uninstall: 2,
    uninstallSelf: 1,
    launchApp: 1,
    createAppShortcut: 1,
    setLaunchType: 2,
    generateAppForLink: 2
  },
  notifications: {
    create: 2,
    update: 2,
    clear: 1,
    getAll: 0,
    getPermissionLevel: 0
  },
  pageAction: {
    getTitle: 1,
    setIcon: 1,
    getPopup: 1
  },
  pageCapture: {
    saveAsMHTML: 1
  },
  permissions: {
    getAll: 0,
    contains: 1,
    request: 1,
    remove: 1
  },
  runtime: {
    getBackgroundPage: 0,
    openOptionsPage: 0,
    setUninstallURL: 1,
    requestUpdateCheck: 0,
    sendMessage: 3,
    sendNativeMessage: 2,
    getPlatformInfo: 0,
    getPackageDirectoryEntry: 0
  },
  sessions: {
    getRecentlyClosed: 1,
    getDevices: 1,
    restore: 1
  },
  system: {
    cpu: {
      getInfo: 0
    },
    memory: {
      getInfo: 0
    },
    storage: {
      getInfo: 0,
      ejectDevice: 1,
      getAvailableCapacity: 1
    }
  },
  tabCapture: {
    capture: 1,
    getCapturedTabs: 0
  },
  tabs: {
    get: 1,
    getCurrent: 0,
    sendRequest: 2,
    sendMessage: 3,
    getSelected: 1,
    getAllInWindow: 1,
    create: 1,
    duplicate: 1,
    query: 1,
    highlight: 1,
    update: 2,
    move: 2,
    reload: 2,
    remove: 1,
    detectLanguage: 1,
    captureVisibleTab: 2,
    executeScript: 2,
    insertCSS: 2,
    setZoom: 2,
    getZoom: 1,
    setZoomSettings: 2,
    getZoomSettings: 1
  },
  topSites: {
    get: 0
  },
  tts: {
    speak: 2,
    isSpeaking: 0,
    getVoices: 0
  },
  webNavigation: {
    getFrame: 1,
    getAllFrames: 1
  },
  webRequest: {
    handlerBehaviorChanged: 0
  },
  webstore: {
    install: 1
  },
  windows: {
    get: 2,
    getCurrent: 1,
    getLastFocused: 1,
    getAll: 1,
    create: 1,
    update: 2,
    remove: 1
  },
  alarms: {
    get: 1,
    getAll: 0,
    clear: 1,
    clearAll: 0
  },
  platformKeys: {
    selectClientCertificates: 1,
    getKeyPair: 2,
    verifyTLSServerCertificate: 1
  }
}
