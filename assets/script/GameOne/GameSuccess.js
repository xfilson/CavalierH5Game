cc.Class({
    extends: cc.Component,

    properties: {
        gamesuccess:{
            default:null,
            type:cc.Node,
            displayName:'Gamesuccess',
        },
    },

    // use this for initialization
    onLoad: function () {
        this.gamesuccess.active = false;
        this.gamesuccess.on('touchstart',function(){
            event.stopPropagation();
        },this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
