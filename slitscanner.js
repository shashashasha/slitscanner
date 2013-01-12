/*
    human readable (i hope!) code for the slitscanner

    i simply converted it to the bookmarklet code by 
    compressing: http://jscompress.com/ 
    and then encoding: http://meyerweb.com/eric/tools/dencoder/
    and wrapping that in javascript:void();

    silly and roundabout but now it's done! and done is so much better than not.
*/
(function(){ 
    // vimeo or youtube right now
    var host = window.location.host.split('www.').join('');

    // when i thought i was being clever
    var create = function(element) {
        return document.createElement(element);
    };    
    
    // when i thought i was being clever
    var append = function(a, b) {
        a.appendChild(b);
    };

    // to do ['0', '2', '4'].map(mapInt)
    var mapInt = function(e) {
        return parseInt(e);
    };

    // from '02:30' to 150
    var getSeconds = function(text) {
        var time = text.split(':').map(mapInt);
        return time.length == 2 ? (time[0] * 60) + time[1] : (time[0] * 60 * 60) + (time[1] * 60) + time[2];   
    };

    // youtube has special html5 divs for timing
    var getYoutubeSeconds = function(className) {
        var text = document.body.getElementsByClassName(className)[0].innerHTML;
        return getSeconds(text);
    };

    // vimeo's current is on the playhead
    var getVimeoCurrentSeconds = function() {
        var current = document.body.getElementsByClassName('o')[1];
        var text = current.children[0].innerHTML;
        return getSeconds(text);
    };

    // vimeo's total is a meta tag in the video "cols" div
    var getVimeoTotalSeconds = function() {
        var cols = document.body.getElementById('cols');
        var text = cols.children[12].content;

        /*
            from "PT00H06M26S" to ["PT00H06M26S", 0, 6, 26]
            thanks txt2re.com!
        */
        var re1='.*?';    // Non-greedy match on filler
        var re2='(\\d+)'; // Integer Number 1
        var re3='.*?';    // Non-greedy match on filler
        var re4='(\\d+)'; // Integer Number 2
        var re5='.*?';    // Non-greedy match on filler
        var re6='(\\d+)'; // Integer Number 3

        var p = new RegExp(re1+re2+re3+re4+re5+re6,["i"]);
        var m = p.exec(text).map(mapInt);

        return (m[1] * 60 * 60) + (m[2] * 60) + m[3];
    };


    // main slitscanner
    var slitscan = function(video) {
        // create our slitscanner frame
        var strip = create("div");
        var stripStyle = 'display:block;background:#333;border-top:1px solid #444;box-shadow: 0px 0px 10px rgba(0,0,0,.25);padding:10px;position:fixed;left:0;bottom:0;z-index:1337;';
        strip.setAttribute("style", stripStyle);

        var ca = create("canvas");
        ca.height = video.offsetHeight;
        ca.width = document.body.offsetWidth - 20;

        // close the slit scanner
        var buttonStyle = "border: none;margin:0 5px 2px 0;padding:4px;background:#999;cursor:pointer;color: white;";
        var stop = create("button");
        stop.setAttribute("style", buttonStyle);
        stop.innerHTML = 'stop';
        stop.onclick = function() {
            if (timeout) {
                clearTimeout(timeout);
            }
        };

        // close the slit scanner
        var close = create("button");
        close.setAttribute("style", buttonStyle);
        close.innerHTML = 'close';
        close.onclick = function() {
            document.body.removeChild(strip);
            if (timeout) {
                clearTimeout(timeout);
            }
        };

        var link = create("a");
        link.innerHTML = '#slitscanner on tumblr';
        link.setAttribute("style", "margin: 3px; color: white;");
        link.href = "http://tumblr.com/tagged/slitscanner";
        link.target = "_blank";

        append(strip, stop);
        append(strip, close);
        append(strip, link);

        append(strip, ca);
        append(document.body, strip);    

        // getting ready to draw
        var co = ca.getContext('2d');
        var cx = 0;
        var ch = ca.height;
        var cw = ca.width;

        // store it for it to work inside this function scope
        var video;

        // different ways of getting the total length
        var totalSeconds = host == 'youtube.com' ? getYoutubeSeconds("html5-duration-time") : getVimeoTotalSeconds();
        // base the framerate on the length of the video
        // assuming here that we start slitscanner around the beginning of the video
        // this isn't quite exact but means we don't have to always calculate the "current time" in the video
        var framerate = (totalSeconds * 25 > cw) ? (totalSeconds * 25 / cw) * 40 : 40;
        
        var timeout = setInterval(function() {
            // stop if you pause or end it
            if (video.paused) {
                if (video.ended) {
                    clearTimeout(timeout);    
                }   
                return;
            }
            
            // draw a pixel
            co.drawImage(video, cx, 0, 1, ch);

            // increment a pixel
            cx++;

        }, framerate);
    };
        
    // grab all videos
    var videos = document.body.getElementsByTagName("video");

    for (var i = 0; i < videos.length; i++) {
        var vid = videos[i];
        // if they're not valid videos, ignore
        if (!vid.hasOwnProperty("paused")) {            
            continue;
        }

        // play it if it's paused, this works on youtube 
        // but i think vimeo initially doesn't have a video element?
        if (vid.paused == true) {
            vid.play();
        }

        // do it!
        slitscan(vid);
    }
})();
