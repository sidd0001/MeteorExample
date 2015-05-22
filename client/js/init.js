Meteor.startup(function() {

	Uploader.finished = function(index, fileInfo, templateContext) {
		var $hasTages = $('#hashTags').val();
		var $hashTagsArray = $hasTages.split(' ');
		console.log($hashTagsArray);
		ImageList.insert({
			name: ( ($('#ImgName').val() == "" ) ? fileInfo.name : $('#ImgName').val() ),
			imgName : fileInfo.name ,
			userID: Meteor.userId(),
			createdAt: new Date(),
			hashTag: $hashTagsArray
		})
	}


})
