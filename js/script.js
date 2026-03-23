(function(){
let _0x5a=["getElementById","btn","message","mouseover","addEventListener","click","innerText","style","display","none","Date","now","random","innerWidth","innerHeight","offsetWidth","offsetHeight","px"];
let _0xbtn=document[_0x5a[0]](_0x5a[1]);
let _0xmsg=document[_0x5a[0]](_0x5a[2]);

let _0xc=0,_0xm=1000,_0xl=0,_0xh=false;

_0xbtn[_0x5a[4]](_0x5a[3],function(){_0xh=true});

_0xbtn[_0x5a[4]](_0x5a[5],function(){
    let _0xn=new Date()[_0x5a[11]]();
    let _0xd=_0xn-_0xl;
    _0xl=_0xn;

    if(!_0xh){
        _0xmsg[_0x5a[6]]="Ê 😏 phải đưa chuột vào nút đã!";
        return;
    }

    _0xh=false;

    let _0xr=Math[_0x5a[12]]()*150;
    if(_0xd<120+_0xr){
        _0xmsg[_0x5a[6]]="Click nhanh quá 😡 dùng tool hả?";
        return;
    }

    _0xc++;

    if(_0xc>=_0xm){
        _0xmsg[_0x5a[6]]="Chúc mừng bạn đã khám phá hết bí mật 😈";
        _0xbtn[_0x5a[7]][_0x5a[8]]=_0x5a[9];
    }else{
        if(_0xc===30){
            _0xmsg[_0x5a[6]]="Cố lên mọi bí mật sắp được phơi bày 😈";
        }else if(_0xc===50){
            _0xmsg[_0x5a[6]]="Cố lên sắp tới rồi đó 😈";
        }else if(_0xc<30){
            _0xmsg[_0x5a[6]]="khi nhấn đủ 30 lần thì bí mật sẽ được tiết lộ 😈";
        }else{
            _0xmsg[_0x5a[6]]="Nhanh lênnn 😈";
        }
        (function(){
            let _0xmx=window[_0x5a[13]]-_0xbtn[_0x5a[15]];
            let _0xmy=window[_0x5a[14]]-_0xbtn[_0x5a[16]];
            let _0xx=Math[_0x5a[12]]()*_0xmx;
            let _0xy=Math[_0x5a[12]]()*_0xmy;
            _0xbtn[_0x5a[7]].left=_0xx+_0x5a[17];
            _0xbtn[_0x5a[7]].top=_0xy+_0x5a[17];
        })();
    }
});
})();
