$(document).ready(function (){
	
	function mLink(text, linkTo){
		//Wraps a link
		return '<a href="'+linkTo+'">'+text+'</a>';
	}
	function mImg(linkTo){
		return '<img src="'+linkTo+'"/>';
	}
	function mVideo(vid, placeholder){
		//Creates a video (only takes in .mov)
		var nuvid = '<video autoplay loop muted poster="'+placeholder+'" id="bgvid">'
			, extent = ['mov','wav','mp4']
			, vidpop = vid.split('.')[0];
		for(var i=0; i<extent.length; i++){
			nuvid += '<source src="'+vidpop+'.'+extent[i]+'" type="video/'+extent[i]+'">';
		}
		return nuvid+'</video>';
	}
	function mEl(text, type){
		//Wraps an element of type
		return '<'+type+'>'+text+'</'+type+'>';
	}
	function mElextra(text, type, extra){
		//Wraps an element of type with extra content (so insert ids, classes, etc)
		return '<'+type+' '+extra+'>'+text+'</'+type+'>';
	}
	function mId(name){
		//Returns id string (with space after for convenience)
		return 'id="'+name+'" ';
	}
	function mClass(name){
		//Returns class string (with space after for convenience)
		return 'class="'+name+'" ';
	}
	function mImgWithScale(linkTo, scale){
		//Returns image with adjusted size to scale (fun fact: you can use floats like scale=1.5)
		return '<img src="'+linkTo+'" style="width:'+(scale*4)+'em;"/>'
	}
	function compareScale(a,b) {
		//Sorts list based on "scale" field in JSON obj
		if (a.scale < b.scale)
		 return 1;
		if (a.scale > b.scale)
		return -1;
		return 0;
	}
	
	//NAVBAR - inserts navigation (absolute positioned)
	$('body').prepend(function(){
		var nav = '', 
			data = content.NAVBAR;
		for(var d=0; d < data.length; d++){
			if(data[d].name == 'LOGO'){
				//Add the logo in as an image
				nav += mEl(mLink(mImg('imgs/logo.png'), data[d].link), 'li');
			} else {
				//Add link as list item
				nav += mEl(mLink(data[d].name, data[d].link), 'li');
			}
		}
		return mElextra(mEl(nav,'ul'),'nav', mId('navigation'));
	});

	function setNavBg(){
		//Sets backgound of navigation to a random image from index page
		$('nav').prepend(function(){
			var randimg = content.INDEXSLIDE.slideContent[Math.floor(content.INDEXSLIDE.slideContent.length * Math.random())].bgimg;
			return '<div style="background:url('+randimg+') no-repeat center center fixed; background-size:cover;"></div>';
		});
	}
	if(!$('#index-page').length){
		//Add background on any page not the home page
		setNavBg();
	}
	
	/***
	INDEX PAGE - #index-page
	***/
	if($('#index-page').length){
		//If on the index page
		//COVER SLIDESHOW - Inserts the slide show
		$('#splash').append(function(){
			var slider = '',
				cRight = '<a href="#" class="next">'+mElextra('','div',mClass('next-overlay'))+mElextra('','span',mClass('next-button'))+'</a>',
				cLeft = '<a href="#" class="prev">'+mElextra('','div',mClass('prev-overlay'))+mElextra('','span',mClass('prev-button'))+'</a>',
				controls = mElextra(cRight, 'div', mClass("slides-navigation nav-next"))+mElextra(cLeft, 'div', mClass("slides-navigation nav-prev")),  //Naviation through slider
				data = content.INDEXSLIDE.slideContent,
				bgvideo = (content.INDEXSLIDE.bgtype == 'video')? mVideo(content.INDEXSLIDE.video, content.INDEXSLIDE.vidplaceholder): '';
			for(var d=0; d < data.length; d++){
				//Add background image (if background in 'image' mode, not 'video') and content to list
				var button = (data[d].buttontxt != '' && data[d].buttonlink != '')? mLink(mEl(data[d].buttontxt,'button'), data[d].buttonlink) : '',
					text = mEl(mEl(data[d].title, 'h1') + mEl(data[d].blurb, 'h2')  + button, 'div'),
					textContent = ((content.INDEXSLIDE.bgtype == 'image')? mImg(data[d].bgimg) : '') + mElextra(text, 'div', mClass('slide-content'));
				slider += mEl(textContent,'li');
			}
			//Wrap list in ul.slides-container in div#slide
			return mElextra(bgvideo + mElextra(slider,'ul', mClass('slides-container'))+controls, 'div', mId('slides'));
		});
		$('#slides').superslides({
			'play': 10000
		}); //Start the slideshow
		//If video mode, need to make position adjustment for overlaying arrows
		if(content.INDEXSLIDE.bgtype == 'video'){
			$('div.next-overlay, div.prev-overlay').css('top','-46%');
		}
	}


	//ABOUT - Inserts about page content
	if($('#about-page').length){
	}
	
	//VEHICLES - Inserts info about vehicles
	if($('#vehicles-page').length){
		$('#splash').append(function(){
			//Make clickable carousel which correlates with divs
			// I.E. click on image, then div appears below
			var carousel = '',
				cRight = '<a href="#" class="next">'+mElextra('','div',mClass('next-overlay'))+mElextra('','span',mClass('next-button'))+'</a>',
				cLeft = '<a href="#" class="prev">'+mElextra('','div',mClass('prev-overlay'))+mElextra('','span',mClass('prev-button'))+'</a>',
				controls = mElextra(cRight, 'div', mClass("carousel-navigation nav-next"))+mElextra(cLeft, 'div', mClass("carousel-navigation nav-prev")),
				clickContents = '',
				data = content.VEHICLES.vehicles;
			for(var d=0; d < data.length; d++){
				carousel += mElextra(mImg(data[d].thumb), 'div', mId(data[d].link.replace('#',''))+mClass('carousel-content-button'));
				var title = mEl(data[d].title, 'h1'),
					blurb = mEl(data[d].blurb, 'p'),
					bgImg = mImg(data[d].bgimg);
				clickContents += mElextra(bgImg + mEl(title+blurb,'div'), 'div', mId(data[d].link.replace('#','')+'-content') +mClass('vehicle-info-wrapper'));
			}

			return mElextra(mElextra(carousel, 'div', mId('vehicle-carousel')+mClass('owl-carousel owl-theme'))+controls, 'div', mClass('vehicle-carousel-wrapper'))+clickContents;
		});
		//Hide vehicles divs (only appear when their anchor is clicked)
		$('.vehicle-info-wrapper').hide();
		//Click on carousel image to display larger content div
		$('.carousel-content-button').click(function(){
			$('.vehicle-info-wrapper').hide();
			$('.vehicle-info-wrapper > div').css('right','-1000px');
			$('.vehicle-info-wrapper img').css('left','-1000px');
			$('#'+this.id+'-content').show();
			$('#'+this.id+'-content img').animate({
			    left: "0"
			  }, { duration: 500, queue: false });
			$('#'+this.id+'-content div').animate({
			    right: "5em"
			  }, { duration: 500, queue: false });
		});

		//Activate carousel
		var owl = $("#vehicle-carousel");
		owl.owlCarousel({
			autoPlay: 3000, //Set AutoPlay to 3 seconds
      		items : 5,
      		itemsDesktop : [1199,3],
      		itemsDesktopSmall : [979,3],
      		lazyLoad : true
		});
		 
		// Custom Navigation Events
		$(".next").click(function(){
			owl.trigger('owl.next');
		});
		$(".prev").click(function(){
			owl.trigger('owl.prev');
		});
	}
	
	//TEAM - Inserts team page and members
	function imgLinkStretch(jarr){
		//Makes a div of images in a row overlayed w/ table from list of json objs
		var row = '';
		for(var i=0; i<jarr.length; i++){
			row += mLink(mEl(mImg(jarr[i].bgimg)+mEl(jarr[i].title, 'h2'), 'div'), '#'+jarr[i].linkTo);
		}
		return mElextra(row, 'div', mClass('row-span'));
	}
	function imgStretch(jarr){
		//Makes a div of images in a row overlayed w/ table from list of json objs
		var row = '';
		for(var i=0; i<jarr.length; i++){
			row += mEl(mImg(jarr[i].bgimg)+mEl(jarr[i].title, 'h2'), 'div');
		}
		return mElextra(row, 'div', mClass('row-span'));
	}

	if($('#team-page').length){
		$("#splash").append(function(){
			var parg = mEl(content.TEAM.title, 'h1') + mEl(content.TEAM.blurb, 'p');
			return imgLinkStretch(content.TEAM.subteamHeader)+ mElextra(parg, 'div', mClass('text-block'));
		});

		//Append other sections
		var subteams = content.TEAM.subteamContent,
			secs = '';
		for(var team=0; team<subteams.length; team++){
			var teamData = subteams[team];
			var anchor = '<a '+mId(teamData.anchorname)+'></a>',
				imgRow = imgStretch(teamData.header),
				parg = mEl(teamData.title, 'h1') + mEl(teamData.blurb, 'p')
				textContet = mElextra(parg, 'div', mClass('text-block'));
			secs += mElextra(anchor+imgRow+textContet, 'section', mId(teamData.anchorname));
		}

		//Append People of REVO section
		var people = content.TEAM.members,
			title = mEl(people.title, 'h1'),
			peoplges = '';
		for(var i=0; i<people.all.length; i++){
			peoplges += mImg(people.all[i]);
		}
		secs += mElextra( mElextra(title+ mElextra(peoplges, 'div', mClass('img-block') ), 'div', mClass('text-block')), 'section', mId('people'));

		$('#team-page').append(secs);
	}
	
	/***
	SPONSERS PAGE - #sponsors-page
	***/
	if($('#sponsors-page').length){
		$('#splash').append(function(){
			//Make the list/logos of sponsors
			var sponslist = '',
				scaleTrack = 1000,	//Random number bigger than any to be used
				data = content.SPONSORS.sponsors;
			data.sort(compareScale);    //Sort based on scale (greatest to least)
			for(var d=0; d < data.length; d++){
				if(scaleTrack > data[d].scale){
					//If scale size is shrinking, put on new row
					scaleTrack = data[d].scale;
					sponslist += '<br>'
				}
				//Add the sponsor logo or sponsor name if none
				sponslist += (data[d].img != '')? mImgWithScale(data[d].img, data[d].scale) : mEl(data[d].name, 'span');
			}

			//Adding anything you want to say about them
			var dataText = content.SPONSORS,
				title = mEl(dataText.title,'h1','text-header'),
				parg = mEl(dataText.blurb, 'p');

			return mElextra(sponslist, 'div', mClass('sponsor-list')) + mElextra(title + parg, 'div', mClass('text-block'));
		});
	}

	
	//FOOTER - inserts footer (regular positioned)
	$('body').append(function(){
		return mEl(content.FOOTER,'footer');
	});

});