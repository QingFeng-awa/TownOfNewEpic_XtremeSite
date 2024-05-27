---
permalink: /tutorial
title: TONEX教程
description: 
---
## 安装教程
### 适用于Steam的安装教程
#### 通过dll安装(推荐)
::: danger 方法不适用
该方法似乎不能正确的帮你安装TONEX。<br>
请您尝试其它安装方法。<br>
如果您发现了正确的安装方法,请在GitHub创建Pull requst。
:::
1. 打开Among Us根目录,一个原版AmongUs根目录看起来应该如下图所示。
![AmongUs根目录](https://cn-sy1.rains3.com/xtremewave/TONEX-tutorial1.png)
::: tip 打开路径
如果您使用Steam提供的C盘默认路径安装TONEX,那么您应该打开:
```
C:\Program Files (x86)\Steam\steamapps\common\Among Us\
```
:::
2. 从[BepInEx官方GitHub仓库](https://github.com/BepInEx/BepInEx/releases)下载最新版BepInEx。
::: tip 版本选择
如果你使用的是64位的Windows,那么你应该下载`BepInEx_win_x64`开头的文件。<br>
反之,如果你使用的是32位的Windows,你就需要下载`BepInEx_win_x86`开头的文件。<br>
下载可能需要加速器,例如[Watt Toolkit](https://github.com/BeyondDimension/SteamTools/releases)。
:::
3. 将下载好的文件解压缩,并移动至Among Us根目录。完成后,目录现在看起来应是这样的:
![安装BepInEx后的AmongUs根目录](https://cn-sy1.rains3.com/xtremewave/TONEX-tutorial2.png)
4. [下载TONEX](https://tonex.cc/download)的dll文件,并确保其文件名为`TONEX.dll`而不是其它。
5. 打开Among Us根目录,并打开`BepInEx`。
6. 在`BepInEx`文件夹中新建文件夹,名称为`plugins`。
7. 将下载好的dll文件移动到此文件夹里,安装完成。
::: tip 首次启动须知
当你第一次启动时,你可能会发现Among Us迟迟没有弹出窗口,或者是弹出了一个控制台。<br>
请不要担心,这是BepInEx & TONEX正在补全文件,因此请您多等待一会。
:::

#### 通过安装包安装
1. 打开Among Us根目录,一个原版AmongUs根目录看起来应该如下图所示。
![AmongUs根目录](https://cn-sy1.rains3.com/xtremewave/TONEX-tutorial1.png)
::: tip 打开路径
如果您使用Steam提供的C盘默认路径安装TONEX,那么您应该打开:
```
C:\Program Files (x86)\Steam\steamapps\common\Among Us\
```
:::
2. [下载TONEX](https://tonex.cc/download)的安装包文件,解压缩。
3. 将解压缩完成的文件移动到Among Us根目录,安装完成。
::: tip 正确安装截图
若你正确安装了TONEX,那么Among Us根目录看起来应该是这样的:
![安装TONEX后的AmongUs根目录](https://cn-sy1.rains3.com/xtremewave/TONEX-tutorial3.png)
:::
::: tip 首次启动须知
当你第一次启动时,你可能会发现Among Us迟迟没有弹出窗口,或者是弹出了一个控制台。<br>
请不要担心,这是BepInEx & TONEX正在补全文件,因此请您多等待一会。
:::

#### 通过懒人包安装
***呃……<br>
在我们提供懒人包之后,我们就会更新此教程。***

### 适用于Epic的安装教程
::: danger 没有相关教程
我们不知该如何撰写此教程。<br>
如果您有想法,请在Github上创建Pull requst。
:::

## 安装XtremeWave游戏服务器
### 介绍
XtremeWave游戏服务器由QingFeng维护,为您带来低延迟游戏服务。
::: tip 服务器Ping过高?
如果您的延迟过高,请尝试挂一个香港节点的Among Us加速器。
:::
### Todo
- [x] 支持HTTPS连接,使得其允许iOS/Android端加入并游玩。
- [x] 禁用官方反作弊,支持模组房间。
- [x] 支持[Reactor.Impostor](https://github.com/NuclearPowered/Reactor.Impostor),允许非Host模组房间。
- [ ] 支持第三方反作弊,防止外挂。
- [ ] 优化推送服务,支持筛选房间。
- [ ] 多区域服务器,为玩家带来低延迟游戏体验。
### 安装
#### 快速安装(第三方)
::: tip 提示
快速安装所用到的'私服安装器'是其它开发者制作的程序。<br>
XtremeWave暂不提供该程序。
:::
1. 打开私服安装器。
2. 将安装地址填入<https://cn-sy1.rains3.com/xtremewave/regionInfo.json>。
3. 点击安装,即安装完成。
#### 手动安装
1. 下载[regionInfo.json](https://cn-sy1.rains3.com/xtremewave/regionInfo.json),并确保其文件名为`regionInfo.json`。
2. 按下`Windows徽标键` + `R键`打开'运行',并输入下方内容。
```
%APPDATA%\..\LocalLow\Innersloth\Among Us
```
随后你应该会看到下方内容。
![AppData\\LocalLow\\Innersloth\\AmongUs](https://cn-sy1.rains3.com/xtremewave/TONEX-tutorial4.png)
3. 将下载好的json文件覆盖文件夹中的文件,安装完成。
::: tip 拓展
你可能需要以下操作防止Among Us修改你的`regionInfo.json`文件。
1. 右键`regionInfo.json`,选择'属性'。
2. 勾选'常规'选项卡中的'只读'选项,应用并确定。
:::
## 载入自定义预设
1. 打开Among Us根目录,并打开`\TONEX_Data\SaveData`。
::: tip 打开路径
如果您使用Steam提供的C盘默认路径更换预设,那么您应该打开:
```
C:\Program Files (x86)\Steam\steamapps\common\Among Us\TONEX_Data\SaveData
```
:::
2. 将其它玩家的`Options.json`移动到此文件夹并覆盖旧文件,安装完成。

## 设置自定义`/n`消息
1. 启动Among Us。
2. 在Among Us启动并进入菜单后,按下`F5` + `X`导出语言文件。
3. 打开Among Us根目录,并打开`Language`。
::: tip 打开路径
如果您使用Steam提供的C盘默认路径设置`/n`消息,那么您应该打开:
```
C:\Program Files (x86)\Steam\steamapps\common\Among Us\Language
```
:::
4. 打开文件`export_SChinese.dat`,并找到`Message.NowOverrideText`开头行。
5. 将`Message.NowOverrideText`后方的内容改为自己想要的内容。
6. 保存文件,并将文件`export_SChinese.dat`重命名为`SChinese.dat`,修改完成。
::: tip 须知
在游戏内按下`F5` + `T`或重启游戏才会应用更改。
:::

## 快捷键列表
> 快捷键不支持未安装的模组的玩家。

|            快捷键           |          功能          |            适用场景            |       支持玩家       |
|:---------------------------:|:----------------------:|:------------------------------:|:--------------------:|
|              Y              |   向所有客户端同步RPC  |     启用调试模式<br>游戏中     |       模组房主       |
|              G              |      展示开场动画      |     启用调试模式<br>游戏中     |       模组房主       |
|              =              |    切换任务显示模式    |     启用调试模式<br>游戏中     |       模组房主       |
|              I              |      获取当前坐标      |     启用调试模式<br>游戏中     |       模组房主       |
|              F1             |      显示职业介绍      |             游戏中             | 模组玩家<br>模组房主 |
|             F11             |       切换分辨率       |            任何时候            | 模组玩家<br>模组房主 |
|             F10             |      打开游戏目录      |            任何时候            | 模组玩家<br>模组房主 |
|          LeftShift          |   跳过游戏开始倒计时   | 大厅等待时<br>开始倒计时显示时 |       模组房主       |
|            F5 + T           |      重载语言文件      |            任何时候            | 模组玩家<br>模组房主 |
|            F5 + X           |      导出语言文件      |            任何时候            | 模组玩家<br>模组房主 |
|         LeftAlt + C         |    复制当前游戏设置    |            任何时候            | 模组玩家<br>模组房主 |
|         LeftCtrl + N        |    显示当前游戏设置    |            任何时候            |       模组房主       |
|        LeftCtrl + F1        |     输出日志到桌面     |            任何时候            | 模组玩家<br>模组房主 |
|         LeftAlt + F4        |        直接胜利        |             游戏中             | 模组玩家<br>模组房主 |
|       LeftAlt + Enter       |    切换窗口显示模式    |            任何时候            | 模组玩家<br>模组房主 |
|      LeftCtrl + Delete      |    恢复模组默认设置    |           大厅等待时           |       模组房主       |
|    LeftShift + E + Enter    |          自杀          |             游戏中             |       模组房主       |
|    LeftShift + T + Enter    |      完成所有任务      |             游戏中             |       模组房主       |
|    LeftShift + D + Enter    | 打开TheAirship的所有门 |     启用调试模式<br>游戏中     |       模组房主       |
|    LeftShift + K + Enter    |   将击杀冷却设置为0秒  |     启用调试模式<br>游戏中     |       模组房主       |
|    LeftShift + C + Enter    |      显示聊天按钮      |             游戏中             |       模组房主       |
|    LeftShift + L + Enter    |      强制结束游戏      |             游戏中             |       模组房主       |
|    LeftShift + M + Enter    |    强制召开/跳过会议   |             游戏中             |       模组房主       |
|   LeftShift + LeftCtrl + N  |  显示当前游戏设置说明  |             游戏中             |       模组房主       |
| LeftCtrl + RightMouseButton |     处决选中的玩家     |      游戏中<br>游戏会议时      |       模组房主       |

## 聊天框命令列表

|      快捷键     |              功能              |          适用场景          |       支持玩家       |
|:---------------:|:------------------------------:|:--------------------------:|:--------------------:|
|        /l       |      显示上局游戏复盘信息      |         大厅等待时         |        所有人        |
|        /r       |        显示所有启用职业        |          任何时候          |        所有人        |
|        /n       |        显示当前游戏设置        |          任何时候          |        所有人        |
|        /h       |        显示基本指令帮助        |          任何时候          |        所有人        |
|        /v       |      查看所有玩家模组版本      |          任何时候          | 模组玩家<br>模组房主 |
|        /m       |        显示当前职业介绍        |           游戏中           |        所有人        |
|       /ss       |          获得扫描效果          |         大厅等待时         |        所有人        |
|       /qt       |          拉黑所在房间          |          任何时候          | 原版玩家<br>模组玩家 |
|       /xf       |      尝试修复消息遮挡问题      |           游戏中           |        所有人        |
|       /id       |           查看玩家ID           |          任何时候          |        所有人        |
|       /sr       |          更换当前职业          |   启用调试模式<br>游戏中   |       模组房主       |
|       /up       |      指定下一局的游戏职业      | 启用导演模式<br>大厅等待时 |       模组房主       |
|       /mt       |        强制召开/跳过会议       |           游戏中           |       模组房主       |
|       /win      |      显示上局游戏胜利玩家      |         大厅等待时         |        所有人        |
|       /eje      |    查看上一轮会议的驱逐记录    |         大厅等待时         |        所有人        |
|       /end      |          强制结束游戏          |           游戏中           |       模组房主       |
|      /dump      |         输出日志到桌面         |          任何时候          | 模组玩家<br>模组房主 |
|    /kill {id}   |          击杀指定玩家          |           游戏中           |       模组房主       |
|    /r {role}    |        显示指定职业介绍        |          任何时候          |        所有人        |
|    /exe {id}    |          放逐指定玩家          |           游戏中           |       模组房主       |
|    /rn {name}   |         修改自己的名字         |          任何时候          |       模组房主       |
|  /level {level} |         修改自己的等级         |          任何时候          |       模组房主       |
|  /color {color} |         修改自己的颜色         |         大厅等待时         |    (默认)模组房主    |
|   /mw {number}  |        设置最小发言间隔        |           游戏中           |       模组房主       |
| /dis {crew/imp} | 以船员或内鬼断连为结果结束游戏 |           游戏中           |       模组房主       |