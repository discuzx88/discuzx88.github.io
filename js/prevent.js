  //<![CDATA[
		jQuery(function ($) {
	
	var msg = '尊重著作權，如需轉貼，請先聯系本站，感謝合作';
	
	/*---- prevent ctrl + c */
	$(".entry-title").bind('copy', function() { // for post title element
		
		var highlighted_text = getSelectionText();
		var page_id = '1';
		notify_and_save(highlighted_text);
		
		alert(msg);
		return false;
	});
	$(".entry-content").bind('copy', function() { //  for post content element
		
		var highlighted_text = getSelectionText();
		var page_id = '1';
		notify_and_save(highlighted_text);
		
		alert(msg);
		return false;
	});
	$("div.smart_code_escape").bind('copy', function(event) {
		//alert('copy in keyboard');
		event.stopPropagation();
		return true;
	});

	/*---- right click in mouse */
	$(".entry-title").mousedown(function(e){  // for post title element
		if( e.button == 2 ) { 
		
		var highlighted_text = getSelectionText();
		var page_id = '1';
		notify_and_save(highlighted_text);
		
		alert(msg);
		return false; 
		} 
		return true; 
	}); 
	
	$(".entry-content").mousedown(function(e){ // for post content element
		if( e.button == 2 ) { 
		
		var highlighted_text = getSelectionText();
		var page_id = '1';
		notify_and_save(highlighted_text);
		
		alert(msg);
		return false; 
		} 
		return true; 
	}); 
	
	$("div.smart_code_escape, a").mousedown(function(e){ 
		if( e.button == 2 ) { 
			e.stopPropagation();
			return false; 
		} 
		return true; 
	});
	
	
	/*---- drag text */
	$("body").bind('selectstart dragstart', function(event) {
		event.preventDefault();
		return false;
	});

	$("div.smart_code_escape").bind('selectstart dragstart', function(event) {
		event.stopPropagation();
		return true;
	});

	document.onkeydown = ctrlKeys;
	
});

function ctrlKeys(e) {
	
	var msg = '尊重著作權，如需轉貼，請先聯系本站，感謝合作';
	
	var keycode;
    if (window.event)
        keycode = window.event.keyCode;
    else if (e)
        keycode = e.which;
	
	//alert(keycode); 
	
	if ( (e.ctrlKey) && (keycode == 83) ) { // ctrl + s
		
		var highlighted_text = '';
		notify_and_save(highlighted_text);
		
		alert(msg);
		return false;
	}
	if ( (e.ctrlKey) && (keycode == 65) ) { // ctrl + a
	
		var highlighted_text = '';
		notify_and_save(highlighted_text);
	
		alert(msg);
		return false;
	}
	if ( (e.ctrlKey) && (keycode == 80) ) { // ctrl + p
	
		var highlighted_text = '';
		notify_and_save(highlighted_text);
		
		alert(msg);
		return false;
	}
	
}

function notify_and_save(highlighted_text) {
	// for wordpress version 
	var page_id = $("article").attr('id');
	var highlighted_text = highlighted_text;
	
	var datastring = 'page_id='+ page_id +'&highlighted_text='+ highlighted_text;
	
    // ajax post
	
}

function getSelectionText() { // ei 9, firefox, chrome - tested
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}
	//]]>
