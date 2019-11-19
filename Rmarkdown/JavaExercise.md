# Java错题训练
1. i++和++i 的区别
<br>
   错题：
   ```
   public class Increment
   {
       public static void main(String args[])
       {
           int a;
           a = 6;
           System.out.print(a);
           System.out.print(a++);
           System.out.print(a);
       }
   }
   输出：667 错误答案：677
   ```
   解析：a++先用后+，++a先加后用。
2. 编译Java的命令文件是：
    ```
    编译java程序的命令文件是( )

   正确答案: B   你的答案: B (正确)
   A.java.exe
   B.javac.exe
   C.applet.exe
    ```
3. 下面哪个不是Java的基础类型？
   ```
    short
    Boolean
    byte
    float
   ```
   选择Boolean，它是Java的包装类型，Java规定包装类的首字母必须大写，例如：
   ```
   基本类型-包装类类型
   int-Integer
   short-Short
   long-Long
   float-Float
   double-Double
   boolean-Boolean
   char-Character
   byte-Byte
   ```
4. 实例方法中的静态变量调用
   ```
    public class Spike
   {
       public static void main(String[] args)
       {
           Counter a = new Counter();
           System.out.println(a.increment());//count=0打印后=1
           System.out.println(a.anotherIncrement()); //count=2
           Counter b = new Counter();
           System.out.println(b.increment());//count=2
       }
   }
   class Counter
   {
       private static int count = 0;
       public int increment()
       {
           return count++;
       }
       public int anotherIncrement()
       {
           return ++count;
       }
   }

    输出：022
   ```
   解析：
   **count是静态变量，为所有对象所共享，因此不管a.increment()还是b.increment()都会使count持续增加。**<br>
   increment()方法返回当前count值，然后count增加1<br>
   antoherIncrement()方法让count增加1，然后返回count值<br>
   第一次a.increment()返回值为0，此时count值为1<br>
   第二次a.anotherIncrement()先让count+1再返回，返回值为2<br>
   第三次b.increment()先返回count当前值2，然后count+1
5. 