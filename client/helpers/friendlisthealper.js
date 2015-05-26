/**
 * Created by root on 26/5/15.
 */
Meteor.subscribe("userList");
Meteor.subscribe("sendimages");
Template.friendsList.helpers({
    friendList : function() {
        return Meteor.users.find({_id : {$ne : Meteor.userId()}}).fetch();

    }
});
Template.friendsList.events({
    'dblclick .friendsList':function(){
        $('.modal')
            .modal('hide');
        Session.set('friendId', event.target.value);
        var imgInfo = ImageList.findOne({ _id: Session.get("imgId") });
        SendImageList.insert({
            sender : Meteor.user().emails[0].address,
            reciver : Session.get("friendId"),
            imgId:Session.get("imgId"),
            name : imgInfo.name,
            imgName : imgInfo.imgName,
            hashTag : imgInfo.hashTag,
            view : false,
        });
    }
})
