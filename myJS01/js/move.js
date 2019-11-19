function getStyle(obj,name)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[name];
    }
    else
    {
        return getComputedStyle(obj,false)[name];
    }
}
//pin是传入的要运动的属性  iTarget目标值 obj是物体对象
function startMove(obj,pin,iTarget)
{
    //每个物体必须设定独立定时器 否则会出错 以 obj.定时器 来确定
    clearInterval(obj.timer);
    
    obj.timer=setInterval(function(){
        //使用getStyle函数来获取物体属性
        if(pin=='opacity')//如果是透明度 另外处理
        {
            obj.current = parseFloat(getStyle(obj,pin))*100;
        }
        else
        {
            obj.current =  parseInt(getStyle(obj,pin));
        }
        
        var speed = (iTarget -obj.current)/6;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);//缓冲运动速度必须取整
          
        if(obj.current==iTarget)
        {
            clearInterval(obj.timer);
        }
        else
        {   
            if(pin=='opacity')
            {
                //obj.style.filter='alpha(opcity='+(current+speed)+')';//ie用
                obj.style.opacity=(obj.current+speed)/100;//chrome用
            }
            else
            {
                obj.style[pin]=obj.current+speed+'px';
            }
           
        }

    },30);
}