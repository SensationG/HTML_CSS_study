// 可以传入函数的运动框架 可以无限往里传递函数 造成无限的动画叠加 ，且动画发生在前一个动画完成时
// 这是最终版 完美运动框架
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
//传入json fnEND是传入的函数，设计于最后执行
//函数传参，传什么类型都可以，包括函数
//startMove(oDiv,{width:400,height:400},function(){})
function startMove(obj,json,fnEND)
{
    //每个物体必须设定独立定时器 否则会出错 以 obj.定时器 来确定
    clearInterval(obj.timer);
    
    obj.timer=setInterval(function(){
        var bStop = true; //假设所有的属性都已经到了目标值

        //在定时器内遍历Json，可以做到一轮接一轮，最后变成同时动
        for(var key in json)
        {
             //key代表属性，json[key]代表目标值
             //key替换move2.js的pin，json[key]替换iTarget

            //--------------获取物体的位置-----------

            //使用getStyle函数来获取物体属性
            if(key=='opacity')//如果是透明度 另外处理
            {
                obj.current = parseFloat(getStyle(obj,key))*100;
            }
            else
            {
                obj.current =  parseInt(getStyle(obj,key));//获取当前物体位置
            }
            
            var speed = (json[key] -obj.current)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);//缓冲运动速度必须取整
            
            //-------------判断是否到达目标点------------

            if(obj.current!=json[key])//如果有物体未到达目标点，设置false
            {
                bStop=false;
            }

            //------------物体运动------------------------
            
            if(key=='opacity')
            {
                //obj.style.filter='alpha(opcity='+(current+speed)+')';//ie用
                obj.style.opacity=(obj.current+speed)/100;//chrome用
            }
            else
            {
                obj.style[key]=obj.current+speed+'px';
            }
            
        }//json循环结束

        if(bStop)//物体都到了目标点
        {
            clearInterval(obj.timer);
            //当物体到达目标值之后执行
            if(fnEND) //判断是否有传入，有传入才执行，防止出错
            {
                fnEND();//执行传入的函数
            }
        }

    },30);
}