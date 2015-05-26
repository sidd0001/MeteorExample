Meteor.subscribe("images");
Meteor.subscribe("userList");
Meteor.subscribe("sendimages");
Meteor.subscribe("RecivedImages");
Template.Page2.helpers({
    images: function() {
        if (Session.get("text")) {
            return ImageList.find({userID: Meteor.userId() , hashTag : Session.get("text") });
        } else {
            return ImageList.find({userID: Meteor.userId()});
        }
    },
    recivedImages : function () {
        return SendImageList.find({reciver: Meteor.userId() , view : false } );
    }
});
Template.Page2.events({
    'click #search':function() {
        var $text = $('#textSearch').val();
        Session.set('text' , $text);
    },
    'click .btnSend':function(){
        $('.modal')
            .modal('setting', 'transition', 'horizontal flip')
            .modal('setting', 'closable', false )
            .modal('setting', 'closable', false )
            .modal('show');
        Session.set('imgId' ,event.target.value);
    },
    'click .reciveImg': function(){

        //ImageList.update( { _id : this._id }, { $set: { view : true } });
            SendImageList.remove(this._id);

    }

})
