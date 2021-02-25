$('#banner-slides').on('slide.bs.carousel', function () {
	var slidebgs = ["url('https://via.placeholder.com/728x90.png?text=image 1')",
	"url('https://via.placeholder.com/728x90.png?text=image 2')",
	"url('https://via.placeholder.com/728x90.png?text=image 3')",
	"url('https://via.placeholder.com/728x90.png?text=image 4')"
	 ];
	slidebgs.forEach(function slder(item){
		 $('#sfirst').css('background-image', item);
	});
			 
})