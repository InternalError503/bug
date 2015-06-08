// Copyright (c) 2015 8pecxstudios.com 

if (typeof gBugMe == "undefined") {var gBugMe = {};};
if (!gBugMe) {gBugMe = {};};

var gBugMe = {

		goToBug : function(e) {

	    try{	
			var aNumber = document.commandDispatcher.focusedWindow.getSelection().toString();
			if (aNumber) {	
				var isnum = /^\d+$/.test(aNumber);
					if (isnum && aNumber.length <= 8) {
						var formatedURL = 'https://bugzilla.mozilla.org/show_bug.cgi?id='+aNumber+'';			  
						if (content.location.href === "about:home" ||
								content.location.href === "about:newtab"){
							content.location.href = formatedURL;
						}else{
							gBrowser.selectedTab = openUILinkIn(formatedURL, 'tab');
						}
					}
			}
			
			}catch (e){
				//Catch any nasty errors and output to dialogue and console
				alert("Were sorry but something has gone wrong with 'Bug go to event' " + e);
		}			
	}

}