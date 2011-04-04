(function(){ 
    var create = function(element) {
        return document.createElement(element);
    };    
    var append = function(a, b) {
        a.appendChild(b);
    };    
    var videos = document.body.getElementsByTagName("video");
    var strip = create("div");
    var stripStyle = 'display:block;background:#333;border-bottom:1px solid #fff;padding:10px;position:fixed;left:0px;bottom:0px;z-index:1337;';
        
    strip.setAttribute("style", stripStyle);
    
    for (var i = 0; i < videos.length; i++) {
        var vid = videos[i];
        if (vid.hasOwnProperty("paused")) {            
            var ca = create("canvas");
            ca.height = vid.offsetHeight;
            ca.width = document.body.offsetWidth - 20;
            
            var co = ca.getContext('2d');
            var cx = 0;
            var vh = ca.height;
            var vw = ca.width;
            
            append(strip, ca);
            append(document.body, strip);        
                
            // store it for it to work inside this function scope
            var video = vid;
            var timeout = setInterval(function() {
                if (video.paused) {
                    if (video.ended) {
                        clearTimeout(timeout);    
                    }   
                    return;
                }
                
                co.drawImage(video, cx, 0, 4, vh);
                // co.fillStyle = "#000";
                // co.fillRect(cx + 1, 0, vw - cx, vh);
                
                cx = (cx + 2) % vw;
            }, 40);
        }   
    }
})();