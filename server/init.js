Meteor.publish('Images', function(){
    return ImageList.find();
});

Meteor.startup(function () {
  UploadServer.init({
      tmpDir: process.env.PWD + '/public/.uploads/tmp',
      uploadDir: process.env.PWD + '/public/.uploads/',
  })
});
Meteor.publish("userList", function () {
    return Meteor.users.find();
});
Meteor.publish('RecivedImages', function(){
    return SendImageList.find();
});
