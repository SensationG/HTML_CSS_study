# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题

正文直接写就可以了，以下是代码块区域：
```
<img src="img\asd.png" width="128px" usemap="#map1"> <!--usemap 对应 map的name 要加#号-->

    <map name="map1"> <!--1 rect举例-->
        <area href="demo01.html" shape="rect" coords="33,12,102,81" target="_blank"> <!-- coords的四个坐标是相对图片的坐标 而非相对网页的坐标-->
        <area href="demo02.html"> <!---以下类推-->
        <area href="demo03.html">
        <area href="demo04.html">
        <area href="demo05.html">
    </map>
```
## 列表显示
### 有序列表
1. 有序列表
   1. 列表子项
      1. 列表孙子项
      2. 列表孙子项
   2. 列表子项
      1. 列表孙子项
      2. 列表孙子项
2. 有序列表
3. 有序列表
### 无序列表
- 无序列表
  - 无序列表子项
    - 无序列表子项
    - 无序列表子项
  - 无序列表子项
  - 无序列表子项
- 无序列表
- 无序列表

**加粗**
*倾斜*
```
Java特性中,abstract class和interface有什么区别（）
正确答案: A B D   你的答案: B (错误)

抽象类可以有构造方法，接口中不能有构造方法
抽象类中可以有普通成员变量，接口中没有普通成员变量
抽象类中不可以包含静态方法，接口中可以包含静态方法
一个类可以实现多个接口，但只能继承一个抽象类。
```