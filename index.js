/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function (global) {

    var buttons = require('sdk/ui/button/action').ActionButton;
    var contextmenus = require("sdk/context-menu");
    var _l10n = require("sdk/l10n").get;
    var selection = require("sdk/selection");
    var self = require("sdk/self");

    function contextHelper(aNumber) {
        if (aNumber) {
            var isnum = /^\d+$/.test(aNumber);
            if (isnum && aNumber.length <= 8) {
                var formatedURL = 'https://bugzilla.mozilla.org/show_bug.cgi?id=' + aNumber + '';
                var { getMostRecentBrowserWindow } = require('sdk/window/utils');
                var browser = getMostRecentBrowserWindow().gBrowser;
                // Open formatedURL tab next to current tab.
                browser.selectedTab = browser.loadOneTab(formatedURL, { relatedToCurrent: true });
            }
        }
    };

    // Create toolbar button, button_toolbar_bug.
    var button_toolbar_bug = buttons({
        id: "button_toolbar_bug",
        label: _l10n("button_toolbar_bug"),
        icon: {
            "16": "./images/button-icon-16.png",
            "32": "./images/button-icon-32.png",
            "64": "./images/button-icon-64.png"
        },
        onClick: function () {
            /*
              Does user have the bug number selected text on the web page.
              The contextHelper fucntion ensures only numbers to a length of 8 can be added to the bugzilla url.
            */
            if (selection.text) {
                contextHelper(selection.text.trim());
            }
        }
    });



    /*
      Create context menu item for bug.
      Notes: Check if AMO review valid, Snippet from https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/context-menu
    */
    var context_menu_bug = contextmenus.Item({
        label: _l10n("button_toolbar_bug"),
        image: self.data.url("./images/button-icon-16.png"),
        context: contextmenus.SelectionContext(),
        contentScript: 'self.on("click", function () {' +
        '  var text = window.getSelection().toString();' +
        '  self.postMessage(text);' +
        '});',
        onMessage: function (selectionText) {
            contextHelper(selectionText.trim());
        },
        accessKey: _l10n("bug_access_key")
    });


} (this));