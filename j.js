function detect(u)
        {
        var        uaInfo = {},
                screens = [320, 480, 640, 768, 1024, 1152, 1280, 1440, 1680, 1920, 2560],
                allScreens = screens.length,
                ua=u.toLowerCase(),
                is=function(t) { return RegExp(t,"i").test(ua);  },
                version = function(p,n) 
                        { 
                        n=n.replace(".","_"); var i = n.indexOf('_'),  ver=""; 
                        while (i>0) {ver += " "+ p+n.substring(0,i);i = n.indexOf('_', i+1);} 
                        ver += " "+p+n; return ver; 
                        },
                g='gecko',
                w='webkit',
                c='chrome',
                f='firefox',
                s='safari',
                o='opera',
                m='mobile',
                a='android',
                bb='blackberry',
                lang='lang_',
                dv='device_',
                html=document.documentElement,
                b=        [
                
                        // browser
                        (!(/opera|webtv/i.test(ua))&&/msie\s(\d+)/.test(ua))?('ie ie'+(/trident\/4\.0/.test(ua) ? '8' : RegExp.$1))
                        :is('firefox/')?f
                        :is('konqueror')?f
                        :is('android') ? 
                                (  a +
                                        ( /Version\/(\d+)(\.(\d+))+/i.test(ua)
                                                ? " " + a+ RegExp.$1 + " "+a+ RegExp.$1+RegExp.$2.replace('.','_')
                                                : '')
                                        + (/Android (.+); (.+) Build/i.test(ua)
                                                ? ' '+dv+( (RegExp.$2).replace(/ /g,"_") ).replace(/-/g,"_")
                                                :''        )
                                ) //android
                        :is('chrome')?c
                        :is('mozilla/')?f
                        :''
                        // mobile
                        ,is("android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk")?m:''
                        
                        // os/platform
                        ,is('ipad|ipod|iphone')?  
                                ( 
                                        (
                                                /CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(ua)  ?
                                                'ios' + version('ios',RegExp.$2) : ''
                                        ) + ' ' + ( /(ip(ad|od|hone))/gi.test(ua) ?        RegExp.$1 : "" )
                                )
                        :is('mac')?'mac'+ (/mac os x ((\d+)[.|_](\d+))/.test(ua) ?    ( ' mac' + (RegExp.$2)  +  ' mac' + (RegExp.$1).replace('.',"_")  )     : '' )
                        :is('win')?'win'+(is('windows nt 5.2') || is('windows nt 5.1') ? ' win_xp': '') 
                        :''
                        
                
                
                ]; // b
  

        var cssbs = (b.join(' '));
        html.className =   ( cssbs + html.className.replace(/\b(no[-|_]?)?js\b/g,"")  ).replace(/^ /, "").replace(/ +/g," ");

        return cssbs;
}
        
detect(navigator.userAgent);