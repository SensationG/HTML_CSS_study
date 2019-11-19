//使用：ajax('a.txt',function(str){})
//str是接收返回值的形参
//oUrl:文件名
//fnSuccess:函数，用来接收结果,并进一步对返回结果进行处理
//fnFail:用来判断是否失败，并不是所有情况都需要传入，所以有传入再处理
function ajax(oUrl,fnSucess,fnFail)
{
     //1.创建AJAX对象
     var oAjax = new XMLHttpRequest();
     //2.连接服务器
     //open(方法,文件名,同步(false)/异步传输(true)) 
     //在JS中 同步异步的意思是反的 AJAX适合异步操作
     //同步：一件一件来 异步(true)：多个事情一起做（比如发微博同时也可以看别人微博）
     oAjax.open('GET',oUrl,true);
     //3.发送请求
     oAjax.send();
     //4.接收返回
     oAjax.onreadystatechange=function()
     {
         //oAjax.readyState      //浏览器和服务器，进行到哪一步了
         //readyState有四种值
         /*
             0：未初始化，还没有调用open方法
             1：载入 已调用send方法，正在发送请求
             2：载入完成 send方法完成，已收到全部响应内容
             3：解析 正在解析响应内容
             4：完成 (不论文件有无，完整都)解析完成，可以在客户端调用
         */
         if(oAjax.readyState==4)//读取完成
         {
             if(oAjax.status==200)//判断读取成功
             {
                 fnSucess(oAjax.responseText);//读取值返回给函数
                 //responseText就是文件文本内容
             }
             else
             {
                 if(fnFail)//判断有无传入这个函数
                 {
                    fnFail(oAjax.status);
                 }
                 
             }
         };
     };
}