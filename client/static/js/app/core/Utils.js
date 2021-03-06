define([
    'cryptojs.sha1'
], function (SHA1) {
    return {

        getSubjectId: function(){
            var a = Math.random().toString();
            var b = (new Date()).getTime().toString();
            var id = SHA1(a + b).toString();
            return id;
        },

        getImgSize: function (imgSrc, cb) {
            var newImg = new Image();
            newImg.onload = function() {
                var height = newImg.height;
                var width = newImg.width;
                cb({width: width, height: height});
            };
            newImg.src = imgSrc;
        },

        cleanInstruction: function(instruction){
            var trim = function(s){return s.replace(/^\s+|\s+$/g, '');};
            var ltrim = function(s){return s.replace(/^\s+/,'');};
            var rtrim = function(s){return s.replace(/\s+$/,'');};
            var fulltrim = function(s){return s.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ');};

            var trimNum = function(s){return s.replace(/([0-9]+\.)/g, '');};

            return trim(trimNum(instruction));
        }

    };
});
