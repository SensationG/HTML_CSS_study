function setCookie(name,value,iday)
{
    var oDate = new Date();
    oDate.setDate(oDate.getDate()+iday);//设置oDate的日期是14天之后
    document.cookie=name+'='+value+';expires='+oDate; 
};

function getCookie(name)
{
   var arr = document.cookie.split('; ');//字符串分隔 以'; '为单位
    //arr 是个数组 因为cookie含有多条数据
    for(var i=0;i<arr.length;i++)
    {
        var arr2 = arr[i].split('=');//把一组数据的name和value分开
        if(arr2[0]==name) //arr[0]是一组数据的name 
        {
            //如果name匹配 返回value 即arr2[1]
            return arr2[1];
        }
    }
    return '';//如果没有cooike记录 返回空
};

function removeCookie(name)
{
    setCookie(name,1,-1); //设置－1天过期 即删除
}
