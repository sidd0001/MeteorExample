Meteor.startup(function() {
  Uploader.finished = function(index, fileInfo, templateContext) {
	  ImagesList.insert({
		name: fileInfo.name,
		createdAt: new Date()
	  })
  }
})