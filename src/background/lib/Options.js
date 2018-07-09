'use strict';

/*
 * ================================================================================
 * EXTENSION OPTIONS
 * ================================================================================
 */

class Options {
    constructor(options) {
        this._options = options;
    }

    set options(options) {
        this._options = options;
    }

    // -------------------------------------------------------------------------------------------------
    // GENERIC
    // -------------------------------------------------------------------------------------------------

    // Indicate if a specific option has been enabled or not
    _isOptionEnabled(optionCategory, optionName) {
        let isEnabled = false;
        if (Object.prototype.hasOwnProperty.call(this._options, optionCategory)) {
            const category = this._options[optionCategory];
            if (
                Object.prototype.hasOwnProperty.call(category, optionName) &&
                category[optionName] === true
            ) {
                isEnabled = true;
            }
        }
        return isEnabled;
    }

    // Indicate if a folder has been set or not for a specific option category
    _isFolderSet(optionCategory) {
        let isSet = false;
        if (Object.prototype.hasOwnProperty.call(this._options, optionCategory)) {
            const category = this._options[optionCategory];
            if (
                Object.prototype.hasOwnProperty.call(category, FOLDER) &&
                category[FOLDER] !== undefined
            ) {
                isSet = true;
            }
        }
        return isSet;
    }

    // Get the folder which has been set for a specific option category
    _getSetFolder(optionCategory) {
        return this._options[optionCategory][FOLDER];
    }

    // -------------------------------------------------------------------------------------------------
    // RELEASE NOTES
    // -------------------------------------------------------------------------------------------------

    isDisplayReleaseNotesEnabled() {
        return this._isOptionEnabled(RELEASE, OPEN_NOTES);
    }

    // -------------------------------------------------------------------------------------------------
    // BUILT-IN BOOKMARKING
    // -------------------------------------------------------------------------------------------------

    isBuiltinFolderSet() {
        return this._isFolderSet(BUILTIN);
    }

    isBuiltinFolderLastUsed() {
        return (this._options[BUILTIN][FOLDER] === FOLDER_LAST_USED);
    }

    getBuiltinFolder() {
        return this._getSetFolder(BUILTIN);
    }

    addBuiltinBookmarksOnTop() {
        return this._isOptionEnabled(BUILTIN, TOP);
    }

    // -------------------------------------------------------------------------------------------------
    // QUICK BOOKMARKING
    // -------------------------------------------------------------------------------------------------

    isIconEnabled() {
        return this._isOptionEnabled(ICON, ENABLED);
    }

    isShortcutEnabled() {
        return this._isOptionEnabled(ICON, SHORTCUT);
    }

    areContextMenusEnabled() {
        return this._isOptionEnabled(ICON, CONTEXT_MENU);
    }

    isQuickFolderSet() {
        return this._isFolderSet(ICON);
    }

    isQuickFolderLastUsed() {
        return (this._options[ICON][FOLDER] === FOLDER_LAST_USED);
    }

    getQuickFolder() {
        return this._getSetFolder(ICON);
    }

    addQuickBookmarksOnTop() {
        return this._isOptionEnabled(ICON, TOP);
    }

    isInboxModeEnabled() {
        return this._isOptionEnabled(ICON, INBOX);
    }

    isRemovalPreventionEnabled() {
        return this._isOptionEnabled(ICON, PREVENT_REMOVAL);
    }

    getIconColor() {
        let color = this._options[ICON][COLOR];
        if (typeof color === 'undefined') color = ICON_DEFAULT_COLOR;
        return color;
    }

    // -------------------------------------------------------------------------------------------------
    // "ALL TABS" BOOKMARKING
    // -------------------------------------------------------------------------------------------------

    isAllTabsFolderSet() {
        return this._isFolderSet(ALLTABS);
    }

    isAllTabsFolderLastUsed() {
        return (this._options[ALLTABS][FOLDER] === FOLDER_LAST_USED);
    }

    getAllTabsFolder() {
        return this._getSetFolder(ALLTABS);
    }

    addAllTabsBookmarksOnTop() {
        return this._isOptionEnabled(ALLTABS, TOP);
    }
}
