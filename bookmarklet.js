javascript:void((function()%7Bvar%20e%3Dwindow.location.host.split(%22www.%22).join(%22%22)%3Bvar%20t%3Dfunction(e)%7Breturn%20document.createElement(e)%7D%3Bvar%20n%3Dfunction(e%2Ct)%7Be.appendChild(t)%7D%3Bvar%20r%3Dfunction(e)%7Breturn%20parseInt(e)%7D%3Bvar%20i%3Dfunction(e)%7Bvar%20t%3De.split(%22%3A%22).map(r)%3Breturn%20t.length%3D%3D2%3Ft%5B0%5D*60%2Bt%5B1%5D%3At%5B0%5D*60*60%2Bt%5B1%5D*60%2Bt%5B2%5D%7D%3Bvar%20s%3Dfunction(e)%7Bvar%20t%3Ddocument.body.getElementsByClassName(e)%5B0%5D.innerHTML%3Breturn%20i(t)%7D%3Bvar%20o%3Dfunction()%7Bvar%20e%3Ddocument.body.getElementsByClassName(%22o%22)%5B1%5D%3Bvar%20t%3De.children%5B0%5D.innerHTML%3Breturn%20i(t)%7D%3Bvar%20u%3Dfunction()%7Bvar%20e%3Ddocument.body.getElementById(%22cols%22)%3Bvar%20t%3De.children%5B12%5D.content%3Bvar%20n%3D%22.*%3F%22%3Bvar%20i%3D%22(%5C%5Cd%2B)%22%3Bvar%20s%3D%22.*%3F%22%3Bvar%20o%3D%22(%5C%5Cd%2B)%22%3Bvar%20u%3D%22.*%3F%22%3Bvar%20a%3D%22(%5C%5Cd%2B)%22%3Bvar%20f%3Dnew%20RegExp(n%2Bi%2Bs%2Bo%2Bu%2Ba%2C%5B%22i%22%5D)%3Bvar%20l%3Df.exec(t).map(r)%3Breturn%20l%5B1%5D*60*60%2Bl%5B2%5D*60%2Bl%5B3%5D%7D%3Bvar%20a%3Dfunction(r)%7Bvar%20i%3Dt(%22div%22)%3Bvar%20o%3D%22display%3Ablock%3Bbackground%3A%23333%3Bborder-top%3A1px%20solid%20%23111%3Bbox-shadow%3A%200px%200px%2010px%20rgba(0%2C0%2C0%2C.5)%3Bpadding%3A10px%3Bposition%3Afixed%3Bleft%3A0%3Bbottom%3A0%3Bz-index%3A1138%3B%22%3Bi.setAttribute(%22style%22%2Co)%3Bvar%20a%3Dt(%22span%22)%3Ba.setAttribute(%22style%22%2C%22padding%3A%204px%3B%20color%3A%20white%3B%20margin%3A%200%205px%3B%22)%3Bvar%20f%3Dt(%22input%22)%3Bf.type%3D%22range%22%3Bf.min%3D%2220%22%3Bf.max%3D%22400%22%3Bf.setAttribute(%22style%22%2C%22width%3A%20100px%3B%22)%3Bf.innerHTML%3D%22stop%22%3Bf.onchange%3Dfunction()%7Bif(timeout)%7BclearTimeout(timeout)%7Dw%3Df.value%3Ba.innerHTML%3D%22speed%3A%20%22%2BMath.round(1e3%2Fw)%2B%22%20fps%22%3Btimeout%3DsetTimeout(E%2Cw)%7D%3Bvar%20l%3D%22border%3A%20none%3Bmargin%3A0%205px%202px%200%3Bpadding%3A4px%3Bbackground%3A%23999%3Bcursor%3Apointer%3Bcolor%3A%20white%3B%22%3Bvar%20c%3Dt(%22button%22)%3Bc.setAttribute(%22style%22%2Cl)%3Bc.innerHTML%3D%22clear%22%3Bc.onclick%3Dfunction()%7Bif(timeout)%7BclearTimeout(timeout)%7Dm%3D0%3Bv.clearRect(0%2C0%2Cy%2Cg)%3Btimeout%3DsetTimeout(E%2Cw)%7D%3Bvar%20h%3Dt(%22button%22)%3Bh.setAttribute(%22style%22%2Cl)%3Bh.innerHTML%3D%22close%22%3Bh.onclick%3Dfunction()%7Bdocument.body.removeChild(i)%3Bif(timeout)%7BclearTimeout(timeout)%7D%7D%3Bvar%20p%3Dt(%22a%22)%3Bp.innerHTML%3D%22%23slitscanner%20on%20tumblr%22%3Bp.setAttribute(%22style%22%2C%22margin%3A%203px%3B%20color%3A%20white%3B%22)%3Bp.href%3D%22http%3A%2F%2Ftumblr.com%2Ftagged%2Fslitscanner%22%3Bp.target%3D%22_blank%22%3Bn(i%2Cf)%3Bn(i%2Ca)%3Bn(i%2Cc)%3Bn(i%2Ch)%3Bn(i%2Cp)%3Bvar%20d%3Dt(%22canvas%22)%3Bd.height%3Dr.offsetHeight%3Bd.width%3Ddocument.body.offsetWidth-20%3Bn(i%2Cd)%3Bn(document.body%2Ci)%3Bvar%20v%3Dd.getContext(%222d%22)%3Bvar%20m%3D0%3Bvar%20g%3Dd.height%3Bvar%20y%3Dd.width%3Bvar%20r%3Bvar%20b%3De%3D%3D%22youtube.com%22%3Fs(%22html5-duration-time%22)%3Au()%3Bvar%20w%3Db*25%3Ey%3Fb*25%2Fy*40%3A40%3Bf.value%3Dw%3Ba.innerHTML%3D%22speed%3A%20%22%2BMath.round(1e3%2Fw)%2B%22%20fps%22%3Bvar%20E%3Dfunction()%7Bif(r.paused%7C%7Cr.ended)%7Breturn%7Dv.drawImage(r%2Cm%2C0%2C1%2Cg)%3Bm%2B%2B%3Bconsole.log(w)%3Btimeout%3DsetTimeout(E%2Cw)%7D%3BE()%7D%3Bvar%20f%3Ddocument.body.getElementsByTagName(%22video%22)%3Bvar%20l%3Dfunction()%7Bfor(var%20e%3D0%3Be%3Cf.length%3Be%2B%2B)%7Bvar%20t%3Df%5Be%5D%3Bif(!t.hasOwnProperty(%22paused%22))%7Bcontinue%7Dif(t.paused%3D%3Dtrue)%7Bt.play()%7Dreturn%20t%7D%7D%3Bif(e%3D%3D%22vimeo.com%22%26%26f.length%3D%3D0)%7Bvar%20c%3Ddocument.querySelectorAll(%22button.av%20canvas%22)%5B3%5D%3Bvar%20h%3Ddocument.createEvent(%22MouseEvents%22)%3Bh.initMouseEvent(%22click%22%2Ctrue%2Ctrue%2Cwindow%2C0%2C0%2C0%2C0%2C0%2Cfalse%2Cfalse%2Cfalse%2Cfalse%2C0%2Cnull)%3Bc.dispatchEvent(h)%3BsetTimeout(function()%7Bvar%20e%3Dl()%3Ba(e)%7D%2C400)%7Delse%7Bvar%20p%3Dl()%3Ba(p)%7D%7D)());