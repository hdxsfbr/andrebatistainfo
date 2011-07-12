function getPageName(){
	var pathArray        = window.location.pathname;
	pathArray            = pathArray.split('/');
	return pathArray[pathArray.length - 1].split('.')[0];
}

function selectCurrentNavMenu(){
	var pageName         = getPageName();
	if(pageName === 'index' || pageName === ''){
		pageName            = 'home';	
	}	

	var $navMenuElements = $(".menu_item");

	$navMenuElements.removeClass("active");

	for(var i            = 0; i < $navMenuElements.length; i++){
		var $menuName       = $($navMenuElements[i]);
		if(pageName === $menuName.text().toLowerCase()){
			$menuName.addClass("active");				
		}
	}
}

function setNavMenuClickEvents(){
	$(".menu_item").click(function(){
		var menuName        = $(this).text().toLowerCase();
		if(menuName === 'home'){
			menuName           = 'index';	
		}
		if(menuName !== 'blog'){
			location.href       = menuName + ".html"; 	
		}else{
			location.href       = "http://blog.andrebatista.info"; 	
		}

	});
}

function initNavMenu(){
	setNavMenuClickEvents();
	selectCurrentNavMenu();	
}

function setSocialLinksEvents(){
	$("#social_links_div img").each(function(){
		var imgElement = $(this);
		imgElement.click(function(){
			var siteName  = imgElement.attr("alt");
			if(siteName === 'twitter'){
				window.open("http://www.twitter.com/hdxsfbr");
			}else if(siteName === 'facebook'){
				window.open("http://www.facebook.com/andrebatista");
			}
			else if(siteName === 'orkut'){
				window.open("http://www.orkut.com/Main#Profile?uid=5203161541711003893");
			}else if(siteName === 'linkedin'){
				window.open("http://www.linkedin.com/in/andrebatistadev");
			}
		});	
	});
}

//OnLoad
$(function(){
	initNavMenu();
	setSocialLinksEvents();
});
