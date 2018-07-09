'use strict';

/*
 * =================================================================================================
 * CONSTANTS
 * =================================================================================================
 */

// List of stored options properties
const RELEASE = 'release';
const OPEN_NOTES = 'openNotes';
const BUILTIN = 'builtin';
const ALLTABS = 'alltabs';
const ICON = 'icon';
const FOLDER = 'folder';
const TOP = 'top';
const ENABLED = 'enabled';
const INBOX = 'inbox';
const PREVENT_REMOVAL = 'preventRemoval';
const COLOR = 'color';
const SHORTCUT = 'shortcut';
const CONTEXT_MENU = 'contextMenu';

// Miscellaneous
const FOLDER_NONE = 'none';
const FOLDER_LAST_USED = 'last';
const ICON_DEFAULT_COLOR = 'red';
const QUICK_BOOOKMARKING_COMMAND = 'quick-bookmark';

// Default bookmark folders ('unfiled' by default for all versions, 'menu' with shortcut/context menu on stable version)
const FIREFOX_DEFAULT_FOLDERS = ['unfiled_____', 'menu________'];
const FIREFOX_DEFAULT_ALL_TABS_FOLDER_NAME = '[Folder Name]';

// List of status
const ST_BOOKMARKED = 100;
const ST_NOT_BOOKMARKED = 101;
const ST_MULTIPLE_BOOKMARKS = 102;

// List of context menus
const CM_PAGE = 'context_menu_page';
const CM_BOOKMARK = 'context_menu_bookmark';

// Allow to retrieve all stored options at once
const OPTIONS_ARRAY = [RELEASE, BUILTIN, ALLTABS, ICON];

// Icon sizes
const ICON_SIZES = [16, 24, 32, 48, 64, 96, 128, 256, 512, 1024];

/*
 * =================================================================================================
 * GLOBAL VARIABLES
 * =================================================================================================
 */

// eslint-disable-next-line prefer-const
let globalWebPage = null;
// eslint-disable-next-line prefer-const
let globalOptions = null;

let pageContextMenuCreated;
let bookmarkContextMenuCreated;
let lastUsedFolderId;
