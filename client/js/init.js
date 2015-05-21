Meteor.startup(function() {
  Uploader.finished = function(index, fileInfo, templateContext) {
	  ImageList.insert({
		name: fileInfo.name,
		createdAt: new Date()
	  })
  }
})