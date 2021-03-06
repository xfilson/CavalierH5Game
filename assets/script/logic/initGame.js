cc.Class({
    extends: cc.Component,

    properties: {
        bgAudio:{
            default:null,
            url:cc.AudioClip,
        }
    },
    ajax: function () {
        
        var openid = $('#openid').val();
        $.post("api.php", {
            act: 'edit',
            openid: openid,
            gold: localStorage.gold,
        }, function (data) {
            if(data.code == 200){
                cc.log('initGame');
            }
        }, 'json');
    },
    // use this for initialization
    onLoad: function () {
    
        cc.sys.localStorage.clear();
        cc.sys.localStorage.game = 0;
        cc.sys.localStorage.gold = 50;
        cc.audioEngine.playMusic(this.bgAudio,true);
        cc.audioEngine.setVolume(this.bgAudio,0.5);
        this.ajax();
    },

     
});
