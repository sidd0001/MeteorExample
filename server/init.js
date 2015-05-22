Meteor.publish('Images', function(){
    var currentUserId = this.userId;
    return ImageList.find({userID:currentUserId});
});

Meteor.startup(function () {
  UploadServer.init({
      tmpDir: process.env.PWD + '/public/.uploads/tmp',
      uploadDir: process.env.PWD + '/public/.uploads/',
  })
});
