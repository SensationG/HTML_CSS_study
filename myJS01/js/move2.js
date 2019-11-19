// 可以传入函数的运动框架 可以无限往里传递函数 造成无限的动画叠加 ，且动画发生在前一个动画完成时
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
//pin是传入的要运动的属性  iTarget目标值 obj是物体对象 fnEND是传入的函数，设计于最后执行
//函数传参，传什么类型都可以，包括函数
function startMove(obj,pin,iTarget,fnEND)
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
            obj.current =  parseInt(getStyle(obj,pin));//获取当前物体位置
        }
        
        var speed = (iTarget -obj.current)/6;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);//缓冲运动速度必须取整
          
        if(obj.current==iTarget)//到达目标值 关闭定时器
        {
            clearInterval(obj.timer);
            //当物体到达目标值之后执行
            if(fnEND) //判断是否有传入，有传入才执行，防止出错
            {
                fnEND();//执行传入的函数
            }
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