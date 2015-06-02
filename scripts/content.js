var content = {
	NAVBAR: [{
		name: 'About',
		link: 'about.htm'
	},{
		name: 'Vehicles',
		link: 'vehicles.htm'
	},{
		name: 'LOGO',			//NOTE: Special name (case sensitive), will turn into logo.png
		link: 'index.htm'		//Links to home page/root
	},{
		name: 'Team',
		link: 'team.htm'
	},{
		name: 'Sponsors',
		link: 'sponsors.htm'
	}],
	INDEXSLIDE: {
		bgtype: 'video',					//Types: 'video'(video + vidplaceholder), 'image'(slidecontent)
		video: 'imgs/bg_video.mov',			//Takes mov,wav,or mp4 - keep file size small (Less than 5MB, preferably 500KB)
		vidplaceholder: 'imgs/vidplaceholder.jpg',	//Alternative image to display when loading video or on mobile; DO NOT CHANGE THIS
		slideContent: [{
			title: 'Trike Bike',			//Title/main header
			blurb: 'Lorein ipsum',			//Sub-title
			bgimg: 'imgs/replace_1.jpg',	//Background image; use gifs if you want multiple move images or something
			buttontxt: 'Look at me!',		//If this is left empty string, will be ignored/skipped
			buttonlink: 'about.htm'			// ^^^ Ditto
		},{
			title: 'Trike 2!',
			blurb: 'Lorein ipsum bla bla bla',
			bgimg: 'imgs/replace_2.jpg',
			buttontxt: 'Buttons',
			buttonlink: 'about.htm'
	}]},
	ABOUT: [{
		header: 'Hello world!',
		subheader: 'Boop',
		content: 'ladida'
	},{
		header: 'Hello world!',
		subheader: '',
		content: 'ladida'
	}],
	VEHICLES: {
		vehicles: [{
			title: 'Majestic Majesty',
			blurb: 'I think this belongs in the other Olin club?',
			link: '#replace1',		//Makes clickable thumnail, must be unique and no spaces (and include the hash as this becomes an anchor link)
			thumb: 'imgs/vehicles/replace_1.jpg',	//Option for small image to ease load time
			bgimg: 'imgs/vehicles/replace_1.jpg'	//Large image for information/expanded div
		},{
			title: 'Majestic Majesty',
			blurb: 'I think this belongs in the other Olin club?',
			link: '#replace2',
			thumb: 'imgs/vehicles/replace_2.jpg',
			bgimg: 'imgs/vehicles/replace_2.jpg'
		},{
			title: 'Majestic Majesty',
			blurb: 'Hey look, a NOT bike!',
			link: '#replace3',
			thumb: 'imgs/vehicles/replace_3.jpg',
			bgimg: 'imgs/vehicles/replace_3.jpg'
		},{
			title: 'Majestic Majesty',
			blurb: 'Dem wheels',
			link: '#replace4',
			thumb: 'imgs/vehicles/replace_4.jpg',
			bgimg: 'imgs/vehicles/replace_4.jpg'
		},{
			title: 'Majestic Majesty',
			blurb: 'Dem wheels',
			link: '#replace4',
			thumb: 'imgs/vehicles/replace_4.jpg',
			bgimg: 'imgs/vehicles/replace_4.jpg'
		}]
	},
	SPONSORS: {
		title: 'We love our sponsors',
		blurb: 'We are so thankful to our sponsors. With their help we were able to build our first electric vehicle and submarine which enabled us to discover Atlantis and become super rich that we may/may not need sponsors anymore, bla bla bla',
		sponsors: [{
			name: 'Sponsor',				//Only displays if no logo - primarily for reference
			img: 'imgs/sponsors/advanced_circuits.png',	//Logo or relevant image
			scale: 3						//Larger number = larger logo; also sorted so larger logos appear first (4em per scale point, you can use floats so 2.5 => 10em)
		},{
			name: 'Sponsor',				
			img: 'imgs/sponsors/advanced_circuits.png',
			scale: 3
		},{
			name: 'Sponsor',				
			img: 'imgs/sponsors/advanced_circuits.png',
			scale: 3
		}]
	},
	TEAM : {
		title: 'Subteams',
		blurb: "Biodiesel art party roof party. Tonx keffiyeh fashion axe whatever skateboard beard McSweeney's kogi Odd Future fixie VHS. Deep v polaroid Carles, you probably haven't heard of them hella meh sustainable XOXO keffiyeh distillery Marfa organic irony. Post-ironic cray iPhone Intelligentsia. Pinterest gentrify lomo bitters, biodiesel synth cornhole food truck Wes Anderson asymmetrical hashtag American Apparel. Keytar Cosby sweater slow-carb paleo PBR quinoa. Keffiyeh Pinterest brunch, chambray chillwave before they sold out American Apparel banh mi PBR&B forage Intelligentsia Portland retro Austin cred.",
		subteamHeader: [{
			title: 'Chassis',
			bgimg: 'imgs/subteams/re_chassis.jpg',
			linkTo: 'chassis'
		},{
			title: 'Powertrain',
			bgimg: 'imgs/subteams/re_powertrain.jpg',
			linkTo: 'powertrain'
		},{
			title: 'Sensing',
			bgimg: 'imgs/subteams/re_sensing.jpg',
			linkTo: 'sensing',

		},{
			title: 'External',
			bgimg: 'imgs/subteams/re_external.jpg',
			linkTo: 'external'
		}],
		subteamContent: [{
			anchorname: 'chassis',
			title: 'Chassis',
			blurb: 'Are you saying coconuts migrate?',
			header: [{
				title: 'Design',
				bgimg: 'imgs/subteams/re_design.jpg'
			},{
				title: 'Fabricate',
				bgimg: 'imgs/subteams/re_fabricate.jpg'
			},{
				title: 'Innovate',
				bgimg: 'imgs/subteams/re_innovate.jpg'
			}]
		}, {
			anchorname: 'powertrain',
			title: 'Powertrain',
			blurb: 'Are you saying coconuts migrate?',
			header: [{
				title: 'Motor Controller',
				bgimg: 'imgs/subteams/re_motor-controller.jpg'
			},{
				title: 'Batteries',
				bgimg: 'imgs/subteams/re_batteries.jpg'
			},{
				title: 'Transmission',
				bgimg: 'imgs/subteams/re_transmission.jpg'
			}]
		},{
			anchorname: 'sensing',
			title: 'Sensing',
			blurb: 'Are you saying coconuts migrate?',
			header: [{
				title: 'Electronics',
				bgimg: 'imgs/subteams/re_electronics.jpg'
			},{
				title: 'Analysis',
				bgimg: 'imgs/subteams/re_analysis.jpg'
			},{
				title: 'User Interface',
				bgimg: 'imgs/subteams/re_interface.jpg'
			}]
		},{
			anchorname: 'external',
			title: 'External',
			blurb: 'Are you saying coconuts migrate?',
			header: [{
				title: 'Design',
				bgimg: 'imgs/subteams/re_design1.jpg'
			},{
				title: 'Presentation',
				bgimg: 'imgs/subteams/re_presentation.jpg'
			},{
				title: 'Outreach',
				bgimg: 'imgs/subteams/re_outreach.jpg'
			}]
		}],
		members: {
			title: 'People of REVO',
			all: [
				'imgs/people/me1.jpg',
				'imgs/people/me2.jpg',
				'imgs/people/me3.jpg'
			]
		}
	},
	FOOTER: "&copy;2015 REVO &bull; Olin College of Engineering &bull; Site created by Kai Austin, '15"
}
