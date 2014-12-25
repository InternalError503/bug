// Copyright (c) 2014 8pecxstudios.com 

if (typeof gBugMe == "undefined") {var gBugMe = {};};
if (!gBugMe) {gBugMe = {};};

var gBugMe = {

		//Copies current tab url to clipboard	
		goToBug : function(e) {

	    try{	
		
			var _is_Transient = Cc["@mozilla.org/widget/transferable;1"].createInstance(Ci.nsITransferable);
			_is_Transient.addDataFlavor("text/unicode");
			Services.clipboard.getData(_is_Transient, Services.clipboard.kGlobalClipboard);

			var clipboard_str = {};
			var clipboard_strLength = {};

			_is_Transient.getTransferData("text/unicode", clipboard_str, clipboard_strLength);	
			
			if (clipboard_str) {
				var pastetext = clipboard_str.value.QueryInterface(Ci.nsISupportsString).data;
				var isnum = /^\d+$/.test(pastetext);
					if (isnum && pastetext.length <= 8) {
						let formatedURL = 'https://bugzilla.mozilla.org/show_bug.cgi?id='+pastetext+'';
						console.log(formatedURL + " " + pastetext.length);			  
					gBrowser.selectedTab = openUILinkIn(formatedURL, 'tab');
					}
			}
			
			}catch (e){
				//Catch any nasty errors and output to dialogue and console
				alert("Were sorry but something has gone wrong with 'Bug' " + e);
		}			
	}

}