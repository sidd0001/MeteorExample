Meteor.publish('Images', function(){
    var currentUserId = this.userId;
    return ImagesList.find({createdBy: currentUserId})
});

Meteor.startup(function () {
  UploadServer.init({
    tmpDir: process.env.PWD + '/.uploads/tmp',
    uploadDir: process.env.PWD + '/.uploads/',
    checkCreateDirectories: true //create the directories for you
  })
});