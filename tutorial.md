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
如果您发现了正确的安装方法,请在GitHub提交Pull requst。
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
如果您有想法,请在Github上提交Pull requst。
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