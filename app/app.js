enyo.kind({
	name: "ImageCarousel",
	components: [
		{
		 kind: "onyx.Toolbar", 
		 classes: "toolbar",
		 style:"text-align:center;", 
		 components: [
			{kind: "onyx.Button", content:"&larr;", allowHtml: true, ontap:"previous"},
			{kind: "onyx.Button", content:"&rarr;", allowHtml: true, ontap:"next"},
			{kind: "onyx.Button", content:"Random", allowHtml: true, ontap:"getRandomIndex"},
		]},
		{ //thumbnail 1
			name:"carousel", 
			kind:"ImageCarousel", 
			classes: "carousel", 
			fit:false, 
			onload:"load", 
			onZoom:"zoom", 
			onerror:"error", 
			onTransitionStart: "transitionStart", 
			onTransitionFinish: "transitionFinish",
			ontap: "ontap",
			disableZoom:true
		},
		{ //thumbnail 2
			name:"carousel2", 
			kind:"ImageCarousel", 
			classes: "carousel", 
			fit:false, 
			onload:"load", 
			onZoom:"zoom", 
			onerror:"error", 
			onTransitionStart: "transitionStart", 
			onTransitionFinish: "transitionFinish",
			ontap: "ontap",
			disableZoom:true
		},
		{ //thumbnail 3
			name:"carousel3", 
			kind:"ImageCarousel", 
			classes: "carousel", 
			fit:false, 
			onload:"load", 
			onZoom:"zoom", 
			onerror:"error", 
			onTransitionStart: "transitionStart", 
			onTransitionFinish: "transitionFinish",
			ontap: "ontap",
			disableZoom:true
		},
		{ //thumbnail 4
			name:"carousel4", 
			kind:"ImageCarousel", 
			classes: "carousel", 
			fit:false, 
			onload:"load", 
			onZoom:"zoom", 
			onerror:"error", 
			onTransitionStart: "transitionStart", 
			onTransitionFinish: "transitionFinish",
			ontap: "ontap",
			disableZoom:true
		},
		{ //thumbnail 5
			name:"carousel5", 
			kind:"ImageCarousel", 
			classes: "carousel", 
			fit:false, 
			onload:"load", 
			onZoom:"zoom", 
			onerror:"error", 
			onTransitionStart: "transitionStart", 
			onTransitionFinish: "transitionFinish",
			ontap: "ontap",
			disableZoom:true
		},
		{ //image display
			name:"carousel6", 
			kind:"ImageCarousel", 
			classes: "image", 
			fit:false, 
			onload:"load", 
			onZoom:"zoom", 
			onerror:"error", 
			onTransitionStart: "transitionStart", 
			onTransitionFinish: "transitionFinish",
			ontap: "ontap",
			disableZoom:false
		}
	],
	create: function() {
		this.inherited(arguments);
		this.urls = [ //image urls
			"http://s3-ec.buzzfed.com/static/enhanced/web04/2012/4/27/17/enhanced-buzz-wide-30679-1335562313-2.jpg",
			"http://s3-ec.buzzfed.com/static/enhanced/web04/2012/4/27/17/enhanced-buzz-wide-30647-1335562892-5.jpg",
			"http://s3-ec.buzzfed.com/static/enhanced/terminal05/2012/5/7/20/enhanced-buzz-wide-5988-1336437280-8.jpg",
			"http://s3-ec.buzzfed.com/static/enhanced/web04/2012/5/7/17/enhanced-buzz-wide-10369-1336425559-20.jpg",
			"http://s3-ec.buzzfed.com/static/enhanced/web03/2012/5/7/17/enhanced-buzz-wide-20713-1336426884-6.jpg",
			"http://s3-ec.buzzfed.com/static/enhanced/web03/2012/5/7/18/enhanced-buzz-wide-4949-1336429930-2.jpg",
			"http://s3-ec.buzzfed.com/static/enhanced/web05/2012/5/7/19/enhanced-buzz-wide-14756-1336433115-2.jpg",
			"http://s3-ec.buzzfed.com/static/enhanced/web03/2012/5/7/20/enhanced-buzz-wide-19341-1336435502-2.jpg",
			"http://s3-ec.buzzfed.com/static/enhanced/terminal05/2012/5/10/10/enhanced-buzz-wide-22177-1336659410-11.jpg",
			"http://s3-ec.buzzfed.com/static/enhanced/web05/2012/5/7/20/enhanced-buzz-wide-20497-1336436730-8.jpg"
		];
		//slice the images across the carousels to display 5 images
		this.$.carousel.setImages(this.urls.slice(0,6));
		this.$.carousel2.setImages(this.urls.slice(1,7));
		this.$.carousel3.setImages(this.urls.slice(2,8));
		this.$.carousel4.setImages(this.urls.slice(3,9));
		this.$.carousel5.setImages(this.urls.slice(4));
		
		this.$.carousel6.setImages(this.urls); //all images for display
	},
	load: function(inSender, inEvent) {},
	zoom: function(inSender, inEvent) {},
	error: function(inSender, inEvent) {},
	transitionStart: function(inSender, inEvent) {},
	transitionFinish: function(inSender, inEvent) {
		if (this.$.carouselIndexInput) {
			this.$.carouselIndexInput.setValue(inEvent.toIndex);
		}
	},
	previous: function(inSender, inEvent) {
		this.$.carousel.index--;
		
		this.$.carousel.setIndex(parseInt(this.$.carousel.index, 10));
		this.$.carousel2.setIndex(parseInt(this.$.carousel.index, 10));
		this.$.carousel3.setIndex(parseInt(this.$.carousel.index, 10));
		this.$.carousel4.setIndex(parseInt(this.$.carousel.index, 10));
		this.$.carousel5.setIndex(parseInt(this.$.carousel.index, 10));
	},
	next: function(inSender, inEvent) {
		this.$.carousel.index++;
		
		this.$.carousel.setIndex(parseInt(this.$.carousel.index, 10));
		this.$.carousel2.setIndex(parseInt(this.$.carousel.index, 10));
		this.$.carousel3.setIndex(parseInt(this.$.carousel.index, 10));
		this.$.carousel4.setIndex(parseInt(this.$.carousel.index, 10));
		this.$.carousel5.setIndex(parseInt(this.$.carousel.index, 10));
	},
	getRandomIndex: function() {
		var i = Math.floor(Math.random()*this.$.carousel6.images.length);
		while(i==this.$.carousel6.index) { //make sure it isn't the active index
			i = Math.floor(Math.random()*this.$.carousel6.images.length);
		}
		this.$.carousel6.setIndex(parseInt(i, 10));
	},
	updateIndex: function(inSender, inEvent) {
		var index = this.trimWhitespace(this.$.carouselIndexInput.getValue());
		if(index === "" || isNaN(index)) {
			return;
		}
		this.$.carousel.setIndex(parseInt(index, 10));
	},
	trimWhitespace: function(inString) {
		return inString.replace(/^\s+|\s+$/g,"");
	},
	ontap: function(inSender, inEvent) {
		var src = inSender.images[inSender.index];
		var index = 0;
		for(var i=0; i < this.$.carousel6.images.length; i++) {
			if(this.$.carousel6.images[i] == src) {
				index = i;
			} 
		}
		this.$.carousel6.setIndex(index);
	}
});