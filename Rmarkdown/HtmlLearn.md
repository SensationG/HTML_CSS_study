# HTML5 CSS 学习笔记
### 一. 基础标签设置（字体/超链接）
1. 使用a标签设置超链接
   ```
   <a href="http://www.baidu.com" target="_blank">这是超链接</a>
   <a href="http://www.baidu.com" target="_self">这是超链接</a>
   ```
   target 不设定，默认是 _self 效果,直接在原窗口打开页面<br>
   target="_blank": 新建一个窗口打开页面

2. <b>加粗</b>
   ```
   <b>加粗</b>
   ```
3. <em>斜体</em>
   ```
   <em>斜体</em>
   ```
4. <u>下划线</u>
   ```
   <u>下划线</u>
   ```
5. <s>删除线</s>
   ```
   <s>删除线</s>
   ```
6. 在整段话中测试
   <p>Hello，大家好，这里是<b>靠谱学院</b>，我是<em>hhw</em>，现在正在看的是html5教程的第四期，
    html基础<u>元素认识</u>，现在正在演示的是word<s>文档</s>修改文本
   </p>

### 二. 表格
1. 表格3大元素: 它们之间是递进关系 层层包含
    ```
    <table> 表格框架
    <tr>    一行
    <td>    一个单元格
    ```
2. 表中的元素对头尾进行分类（在CSS中用处较大）
   ```
    <thead>: 表头属性（可以放表格标题栏） <th>：表头标题栏属性 
    <tbody>: 表身属性（放表格内容） 
    <tfoot>: 表脚属性 
   ```
3. 使用举例
   <br>
   表格中默认没有边框线，所以在table中使用border属性加边框
   1. 一般的表格
      <table> 
           <thead> <!-- 表头属性 -->
               <tr>
                   <!-- 表格标题栏 有居中效果-->
                   <th>姓名</th>
                   <th>性别</th>
                   <th>密码</th>
               </tr>
           </thead>
           <tbody><!--表身-->
               <tr>
                   <!-- 第二行 -->
                   <td>admin</td>
                   <td>男</td>
                   <td>123</td>
               </tr>
               <tr>
                   <!-- 第三行 -->
                   <td>adminsss</td>
                   <td>男</td>
                   <td>123</td>
               </tr>
           </tbody>
           <tfoot>
               <!-- 表脚属性 -->
               <td>adminsss</td>
               <td>男</td>
               <td>123</td>
           </tfoot>
       </table>

      ```
       <table border="1px" align="center"> 
           <thead> <!-- 表头属性 -->
               <tr>
                   <!-- 表格标题栏 有居中效果-->
                   <th>姓名</th>
                   <th>性别</th>
                   <th>密码</th>
               </tr>
           </thead>
           <tbody><!--表身-->
               <tr>
                   <!-- 第二行 -->
                   <td>admin</td>
                   <td>男</td>
                   <td>123</td>
               </tr>
               <tr>
                   <!-- 第三行 -->
                   <td>adminsss</td>
                   <td>男</td>
                   <td>123</td>
               </tr>
           </tbody>
           <tfoot>
               <!-- 表脚属性 -->
               <td>adminsss</td>
               <td>男</td>
               <td>123</td>
           </tfoot>
       </table>
      ```
   2. 不规则的表格
      <br>
      含有合并（上下或左右）单元格效果
      <table> 
           <tr>
               <!-- 表格标题栏 有居中效果-->
               <th rowspan="2">姓名</th> <!--合并列单元格-->
               <th>性别</th>
               <th>密码</th>
               <th>aaaa</th>
           </tr>
           <tr>
               <!-- 第二行 -->
               <!-- 上面合并列单元格 这里要先删除 -->
               <td colspan="2">aaaa</td> <!--合并2个单元格 横-->
               <td>aaaa</td>
           </tr>
           <tr>
               <!-- 第三行 -->
               <td>adminsss</td>
               <td>男</td>
               <td>123</td>
               <td>aaaa</td>
           </tr>
       </table>

       ```
       <table border="1px" align="center"> 
        <tr>
            <!-- 表格标题栏 有居中效果-->
            <th rowspan="2">姓名</th> <!--合并列单元格-->
            <th>性别</th>
            <th>密码</th>
            <th>aaaa</th>
        </tr>
        <tr>
            <!-- 第二行 -->
            <!-- 上面合并列单元格 这里要先删除 -->
            <td colspan="2">aaaa</td> <!--合并2个单元格 横-->
            <td>aaaa</td>
        </tr>
        <tr>
            <!-- 第三行 -->
            <td>adminsss</td>
            <td>男</td>
            <td>123</td>
            <td>aaaa</td>
        </tr>
       </table>
       ```
### 三. 列表元素
1. 主要元素
   ```
    <ol>有序列表 
    <ul>无序列表 
    <li>表示列表中的项
   ```
2. 使用示例
   1. 有序列表 正序
      <ol>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
      </ol>

       ```
       <ol>
           <li>a</li>
           <li>a</li>
           <li>a</li>
           <li>a</li>
       </ol>
       ```
    2. 有序列表 降序(reversed)
         <ol reversed> 
           <li>a</li>
           <li>a</li>
           <li>a</li>
           <li>a</li>
         </ol>

         ```
        <ol reversed> 
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
        </ol>
         ```
    3. 使用Type属性设置排序标签
        <br>
        设置排序标签为"1"
         ```
        <ol type="1">
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
        </ol>
         ```
    4. 有序列表再插入有序列表
        <ol>
            <li>处理图像</li>
             <ol type="a">
                 <li>aaaa</li>
                 <li>bbbbb</li>
                 <li>cccc</li>
                 <li>dddd</li>
             </ol>
            <li>处理图像</li>
        </ol>

        ```
        <ol>
           <li>处理图像</li>
           <ol type="a">
               <li>aaaa</li>
               <li>bbbbb</li>
               <li>cccc</li>
               <li>dddd</li>
           </ol>
        </ol>
        ```
    5. 无序标签
        <ul>
        <li>aa</li>
        <li>vbbb</li>
        <li>ccc</li>
        </ul>

        ```
        <ul>
            <li>aa</li>
            <li>vbbb</li>
            <li>ccc</li>
        </ul>
        ```
### 四. 表单Input
1. 文本框 text
   1. 关键表单元素
      ```
      <form>    属性：1.method 2.action
      <input>   属性：Type name ....  
      ```
   2. 各个属性示例
      <form>
        <!-- text单行文本框 -->
        <!-- input不写type的话默认type="text" -->
        <input type="text" value="填充" /> <!--单行文本框-->
        <br><br>
        <input type="text" placeholder="文本框暗字提示" /> <!--placeholder 文本框暗字提示-->
        <br><br>
        <input type="text" placeholder="maxlength" maxlength="8"/> <!--maxlength最大长度限制-->
        <br><br>
        <input type="text" value="拓宽文本框" size="50"/>  <!--文本框的size 可大可小-->
        <br><br>
        <input type="text" value="文本框只读" readonly /> <!--readonly文本框只读-->
        <br><br>
        <input type="password" placeholder="输入密码"" /> <!--密码模式-->
        <br><br>

        <!-- 多行文本框 -->
        <textarea rows="10">aaaa</textarea>  <!-- rows设定初始行数 -->
    </form>
    
      ```
      <form>
        <!-- text单行文本框 -->
        <!-- input不写type的话默认type="text" -->
        <input type="text" value="填充" /> <!--单行文本框-->
        <br><br>
        <input type="text" placeholder="文本框暗字提示" /> <!--placeholder 文本框暗字提示-->
        <br><br>
        <input type="text" placeholder="maxlength" maxlength="8"/> <!--maxlength最大长度限制-->
        <br><br>
        <input type="text" value="拓宽文本框" size="50"/>  <!--文本框的size 可大可小-->
        <br><br>
        <input type="text" value="文本框只读" readonly /> <!--readonly文本框只读-->
        <br><br>
        <input type="password" placeholder="输入密码"" /> <!--密码模式-->
        <br><br>

        <!-- 多行文本框 -->
        <textarea rows="20">aaaa</textarea>  <!-- rows设定初始行数 -->
       </form>
      ```
2. 按钮button
    <!-- button -->
    <form>
        <input type="button" value="按钮" />
        <br><br>
        <button>按钮</button> <!--js合作并且作为绑定事件的-->
        <br><br>
        <input type="submit" value="提交"/> <!--提交表单 要求form中必须有method和action属性 html5一般不用-->
    </form>
    <br>
    1. 原理来讲：button元素和type="button"实际应用还是有区别的，button要比input按钮功能多，button元素可以当任何按钮来使用，适用范围更广。
    <br>
    2. input button 和 input submit区别：submit用于提交表单，适用范围比input button要小。
    <br>
    3. input submit用于提交表单时，要求form中必须有method和action属性
    <br>
    结论：适用范围和功能：button>input button>input sumbit
    
    
    ```
     <form>
        <input type="button" value="按钮" />
        <br><br>
        <button>按钮</button> <!--js合作并且作为绑定事件的-->
        <br><br>
        <input type="submit" value="提交"/> <!--提交表单 要求form中必须有method和action属性 html5一般不用-->
    </form>
    ```
3. 滑动选择器 Type="range"
   <br>
    <input type="range" min="-100" max="100" step="50"/> <!--type="range"一个滑动条 step:每次限制滑动的举例-->
    <br>
    <input type="range" min="-100" max="100" step="50" value="-100"/> <!--value 滑动条的初始值-->
    <br>
    <!-- type="number" -->
    <input type="number" min="-100" max="100" step="50" value="-100"/> <!--type="number" 一个数字条-->
    <br>
    ```
    <input type="range" min="-100" max="100" step="50"/> <!--type="range"一个滑动条 step:每次限制滑动的举例-->
    <br>
    <input type="range" min="-100" max="100" step="50" value="-100"/> <!--value 滑动条的初始值-->
    <br>
    <!-- type="number" -->
    <input type="number" min="-100" max="100" step="50" value="-100"/> <!--type="number" 一个数字条-->
    <br><br>
    ```
4. 复选框 checkbox
   <br>
    复选框：<input type="checkbox"/>
   ```
    <!-- checkbox 复选框 返回boolean -->
    <input type="checkbox"/>
   ``` 
5. 选择框 radio
    <br>
   选一个把！
    <br>
    <input type="radio" name="a" />aa 
    <input type="radio" name="a" checked/>aa  <!--checked属性是默认选中值-->
    <input type="radio" name="a"/>aa
    <br>
    ```
    <!-- radio 型选择框 多个radio的name值设置成一致时，只能选择其一 -->
    选一个把！
    <br>
    <input type="radio" name="a" value="2"/>aa <!--value属性不能显示，而是将值传给后台-->
    <input type="radio" name="a" checked/>aa  <!--checked属性是默认选中值-->
    <input type="radio" name="a"/>aa
    <br>
    ```
6. 下拉选择器 select
   <br>
    你喜欢吃什么水果？
    <br>
    <select>
        <option>苹果</option>
        <option>banana</option>
        <option>西瓜</option>
    </select>
    <br>
    ```
    你喜欢吃什么水果？
    <br>
    <select>
        <option>苹果</option>
        <option>banana</option>
        <option>西瓜</option>
    </select>
    <br>
    ```
7. 可输入的下拉选择器 datalist
    <br>
    类似于搜索引擎的历史记录
   ```
    <input type="text" list="datalist">
    <datalist id="datalist">
        <option>苹果</option>
        <option>苹果2</option>
        <option>苹果3</option>
    </datalist>
   ```
8. 其他不常用的Type类型
   ```
    <!-- 1 用input元素限制字符串格式 因为兼容问题 不好用-->
    <input type="email"/>
    <input type="tel"/>
    <input type="url"/>
    <br>
    <!-- 2 年月日选择器 供用户输入时间-->
    年月日选择： <br>
    <input type="date"/>
    <br>
    <!-- 3 颜色选择题 -->
    颜色选择：
    <input type="color">
    <br>
    <!-- 4 图片按钮 提供鼠标点击的坐标，但要写在form中-->
    <form>
    <input type="image" src="img\asd.png" width="80px">
    <br>
    <!-- 5 input上传文件 上传后可提交表单 -->
    <input type="file">
    </form>
   ```
   **注意：第四条 提供鼠标点击的在该图的相对坐标 对于之后的分区响应图有很大作用**
### 五. 嵌入图片/分区响应图
1. 基础图片设置
   <br>
   <img src="img\asd.png">
    <img src="img\asd.png" width="128px"> 
    <img src="img\asd.png" width="128px" height="128px">
    <img src="img\asd11.png" alt="下载">
    <br>
    ```
    <!-- 图片设置 img -->
    <img src="img\asd.png">
    <img src="img\asd.png" width="128px"> <!--如果图片只设置width 那么height会自适应-->
    <img src="img\asd.png" width="128px" height="128px"> <!--想要调整尺寸，width和height都要设置-->

    <img src="img\asd11.png" alt="下载"> <!--alt为备用内容，当src链接失效的时候，会显示alt中的内容-->
    ```
2. 创建图片超链接 配合a标签
   <br>
   <a href="demo01.html"> 
        <img src="img\asd.png">
   </a>
   ```
    <a href="demo01.html"> 
        <img src="img\asd.png">
    </a>
   ```
3. **创建客户端分区响应图** 
   <br>
   通过点击某张图像上的不同须臾让浏览器到不同URL上 
   <br>
   重要元素：
    1. map
    2. area  写在map中，可以有多个，每个各自代表图像上可以被点击的一块区域 带有的属性
       1. Href
       2. Alt
       3. Shape值（4种）
          1. Rect: 这个值代表一个矩形区域，用四个逗号分割的整数组成 四个整数代表：图像左边缘x 上边缘y 右边缘x 下边缘y
          2. Circle:代表圆形区域 四个整数代表图像左边缘x 上边缘y 右边缘x 下边缘y
          3. Poly: 代表多边形 至少包含六个逗号分割的整数组成，每一对数字代表多边形顶点
          4.  Dafault 代表默认区域，覆盖整张图片，不需要coords值

   **示例：Rect 只有设定范围的矩形区域才能点击**
   <br>
   制作分区响应图时并不需要a标签，在map编写完后使用img中的属性usemap启动分区响应
    <img src="img\asd.png" width="128px" usemap="#map1"> <!--usemap 对应 map的name 要加#号-->

    <map name="map1"> <!--1 rect举例-->
        <area href="demo01.html" shape="rect" coords="33,12,102,81" target="_blank"> <!-- coords的四个坐标是相对图片的坐标 而非相对网页的坐标-->
        <area href="demo02.html"> <!---以下类推-->
        <area href="demo03.html">
        <area href="demo04.html">
        <area href="demo05.html">
    </map>
    ```
    <img src="img\asd.png" width="128px" usemap="#map1"> <!--usemap 对应 map的name 要加#号-->

    <!-- 使用<form><input type="image" src="img\asd.png" ></form> 获取相应的坐标-->

    <map name="map1"> <!--1 rect举例-->
        <area href="demo01.html" shape="rect" coords="33,12,102,81" target="_blank"> <!-- coords的四个坐标是相对图片的坐标 而非相对网页的坐标-->
        <area href="demo02.html"> <!---以下类推-->
        <area href="demo03.html">
        <area href="demo04.html">
        <area href="demo05.html">
    </map>
    ```
### 六. 嵌入视频
1. HTML5 支持直接在浏览器中播放音频和视频文件，不需要使用flash插件 插件是令浏览器崩溃的重要原因，特别是flash
2. 使用video标签 
其属性有：1.src 2.Height 3.Width 4.Autoplay 5.Preload 6.controls 7.Loop 8.poster 9.muted
3. 示例
   <br>
    <video src="img\DJI_20190827_111551_793_video.MP4" height="400px" controls preload="Auto" loop poster="img\asd.png">
      <source src="img\DJI_20190827_111551_793_video.MP4" type="video/mp4"> <!--type是播放器播放的格式-->
    </video> 

    ```
     <video src="img\DJI_20190827_111551_793_video.MP4" height="500px" controls preload="None" loop poster="img\asd.png">
            <!--以上：1.src导入视频 2.height/width设置大小 3.autoplay自动播放（但测试无效） 4.controls(显示播放控件)
                  5.preload=" " :预先载入视频,3个属性(None,Metadata(只载第一帧),Auto)
                  6.Loop 循环播放
                  7.poster="封面图片路径" 显示封面图片路径
            -->
            
            <!-- 兼容性问题：不同的浏览器支持的视频格式不同 所以要做兼容性处理 source是备用线路 当上面无法播放时播放-->
            <source src="img\DJI_20190827_111551_793_video.MP4" type="video/mp4"> <!--type是播放器播放的格式-->
            <!-- <source src="img\DJI_20190827_111551_793_video.ogv" type="video/ogv"> 另一种格式-->
    </video> 
    ```
### 七. CSS
#### 1. 创建CSS的三种方法
 1. 使用元素行间样式
     <br>例如
     ```
     <a style="font-size:40px;color: lightblue;">元素内嵌样式表</a> 
     ```
 2. 使用文档内嵌样式表 style中 
    <br>例如 在head中写
    ```
     <style type="text/css">
        /* 控制所有的a标签样式 */
        a {
            font-size: 40px;
            color: lightcoral;
        }
    </style>
    ```

 3. 使用外部样式表 引入css
    <br>例如
    ```
    <link rel="stylesheet" type="text/css" href="css/myCSS.css">
    ```
4. **优先级：行间样式>文档内嵌样式表>外部样式表**
#### 2.CSS选择器
1. CSS选择器分为
   1. 选择所有元素
   2. 根据类型选择元素
   3. 根据类选择元素
   4. 根据id选择元素
   5. 根据属性选择元素
   6. 其他选择器
2. 举例
   1. 根据**类型**选择元素
        <br>style中
        ```
            /* 根据类型选择元素--所有a标签的内容样式 */
            a {
                font-size: 40px;
                color: lightcoral;
            }
        ```
         body中
        ``` 
         <a>根据类型选择元素</a> <!-- 变化 -->
        <p>根据类型选择元素</p> <!-- 不变 -->
        ```
    2. 根据**类**选择元素
        <br>style中
        ```
        /* 根据类选择元素 */
            .class1 {
                font-size: 30px;
                color: lightgreen;
            }
        ```
        body
        ```
        <a class="class1">类选择元素</a> <!--class是一个全局属性：即基本上所有元素都有class属性-->
        <p class="class1">类选择元素</p> <!--不管任何元素，只要class一样，都会实现该css的设定-->
        ```
    3. 根据id选择元素 
        <br>style中
        ```
         /* 根据id选择元素 */
            #id1 {
                font-size: 50px;
                color: maroon;
            }
        ```
        body
        ```
        <p id="id1">id选择元素</p> <!--id 是身份证号 只能唯一 不能与其他元素共用id 而class可以 class与id都有时 class优先-->
        ```
    4. 选择全部元素 *
        <br>使用通配符 * 来选择全部
        ```
         /* 选择所有元素 使用 * 号  */
            * {
                font-size: 40px;
                color: lightcoral;
            } 
        ```
    5. 根据属性选择元素
        <br> 可以只精确属性 也可以精确到属性+内容
        ```
         /* 属性选择元素 */
         [href] {
             font-size: 15px;
             color: mediumaquamarine;
         }
         /* 属性选择元素 精确到-属性名+属性值 
         [href="1.html"] {
             font-size: 15px;
             color: mediumaquamarine;
         }*/
        ```
        ```
        <a href="1.html">属性选择元素</a> <!--含有目标属性的元素都会有该css效果 -->
        <a href="2.html">属性选择元素</a> <!--属性选择元素可以具体到属性名+属性值-->
        <a >属性选择元素</a>
        ```
    6. 冒号选择器
        <br> 只有在鼠标定位时触发 这里举例a标签 即鼠标经过a标签时都会触发此css
        ```
        a:hover {
             font-size: 80px;
             color: midnightblue;
         }
        ```
#### 3.控制边框背景
1. 控制边框
   1. 第一种写法
   ```
    .class1 {
            border-color: lightblue;
            border-style: solid; /* 设置变宽样式 有多种 必须设置否则不会显示边框*/
            border-width: 3px; /* 设置边框粗细 */
            border-top-color: lightcoral; /* 可以单独给每条边设置颜色 这是上边*/
            border-bottom-style:ridge; /* 可以单独给每条边设置样式 这是下边 */
            border-radius: 10px/20px; /* 给边框设置圆角 第一个参数是圆心与左边的距离 第二个是圆心与上边的距离*/
            background: yellow; /* 设置边框内背景颜色 */
            /* background-image: url(); url里面写图片路径*/
        }
   ```
   2. 第二种写法
    ```
    /* 边框 第二种写法 整合写法 */
     .class2 {
         border: 5px solid slategrey;
         border-top: 10px dashed yellow; /* 可以单独给每条边设置样式/颜色 */
     }
    ```
    3. body中
    ```
    <!-- 使用css设置边框 -->
    <p class="class1">边框</p>
    <p class="class2">边框2</p>
    ```
2. 控制背景(图片)
   ```
     /* 控制背景 background */
     .class1 {
         background-image: url(./img/Sketchpad.png); /* 相对路径要这么写否则显示不了 */
         background-size: cover; /* auto：按照图片原大小显示 如果铺不满就重复 contain：类似auto cover：图片只出现一张铺满全局 */
         /* background-repeat: no-repeat; 保持原图片大小显示 且不重复铺满 */
         /* background-attachment: fixed; fixed：图片随着页面的滚动一起滚动 类似小广告 默认是local不滚动*/
     }
   ```
   ```
    <body class="class1"></body>
   ```