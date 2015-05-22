Meteor.startup(function() {
  Uploader.finished = function(index, fileInfo, templateContext) {
	  ImageList.insert({
		name: fileInfo.name,
		userID: Meteor.userId(),
		createdAt: new Date()
	  })
  }
})