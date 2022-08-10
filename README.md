# ha-inkwavemap
[![hacs_badge](https://img.shields.io/badge/Home-Assistant-%23049cdb)](https://www.home-assistant.io/)
[![ha-inkwavemap version](https://img.shields.io/badge/ha--inkwavemap-2022.3.0-blue.svg)](https://github.com/dscao/ha-inkwavemap)
![visit](https://visitor-badge.glitch.me/badge?page_id=dscao.ha-inkwavemap&left_text=visit)

   
![墨澜地图](https://raw.githubusercontent.com/cxlwill/ha-inkwavemap/master/media/screenshot.jpg)

![iOS](https://raw.githubusercontent.com/cxlwill/ha-inkwavemap/master/media/ios.jpg)

本项目为 Home Assistant 的定制化中国地图面板，支持ha 2022.3之后，已测试至2022.8版本。

制作者：[墨澜](https://github.com/cxlwill)， [Mr.Yin](https://github.com/YinHangCode)，[poerts](https://github.com/poerts)

## 简介
本地化 Home Assistant 的地图面板，实现：

- 高德地图显示
- 自带坐标系转换(即地理位置纠偏)
- 显示/隐藏 交通态势
- 显示/隐藏 区域（zone）范围及家标签
- 显示/隐藏 Home Assistant 中区域 `zone` 及设备 `device_tracker` 信息
- 显示/隐藏 预算到家时间及路线轨迹，支持不同交通方式 
- 替代原有图层替换方法，不受 HA 更新影响，一步到位

## 配置方法
1. 拷贝 `www` 文件夹至 Home Assistant 配置文件夹，即 /config/www/custom_ui/inkwavemap；

2. 安装自定义集成“侧边栏面板”：https://github.com/shaonianzhentan/panel_iframe ，UI中配置侧边栏：/local/custom_ui/inkwavemap/index.html （全屏）
![1](https://user-images.githubusercontent.com/16587914/183838379-0fa4f227-5f38-4702-9f76-693b753148cf.jpg)

3. 修改ha中 配置——通用——编辑位置，UI中拖拉座标修改家的位置；
![2](https://user-images.githubusercontent.com/16587914/183839091-88de129e-6466-4abf-9149-d6220db38976.jpg)

3. 前往 [高德开放平台](http://lbs.amap.com/) 申请开发者身份，创建新应用，**服务类型选择 web 端，注意是 web 端，不是 web 服务！！！** 之后获取 key；
![Gaode](https://raw.githubusercontent.com/cxlwill/ha-inkwavemap/master/media/gaode.jpg)

4. 打开 `www/custom_ui/inkwavemap` 中 `config.js` 文件，填入你的 HA长期访问令牌、高德key及高德安全密钥。如果要指定追踪设备ID，请填写实体ID,多个设备时用半角逗号做分隔。不指定则显示所有可跟踪的设备。

5. **清除浏览器缓存，重启 HA。**

## 使用 TIP
**因为 HA 密码以及高德 token 明文保存在www目录中，因此本地图的浏览地址及ha不要泄漏给不信任的人使用。**
- 如果有多人在同一地点，将聚合为数字标签，点触即可展开详情
- 点触 Dock 栏最后图标可选择追踪设备（对象）
 
## 补充说明
初版试水作品，欢迎试用。若有建议或 bug 欢迎提交 issue，一定积极修正 ：）

**欢迎各位加入QQ讨论群：[515348788](https://jq.qq.com/?_wv=1027&k=5ZGk07E) & [107927710](https://shang.qq.com/wpa/qunwpa?idkey=8b9566598f40dd68412065ada24184ef72c6bddaa11525ca26c4e1536a8f2a3d) 。**

## 适配性
适配各平台最新版 Chrome 及 Safari 浏览器，适配 iOS Home Assistant 客户端。

## TODO
- 添加百度地图图层及卫星图层
~~- 同步 `zone` 信息，生成多个地理围栏~~

## 常见问题
**1. 打开地图空白或报错Failed to load resource: net::ERR_CONNECTION_REFUSED**   
请检查config.js配置中HA的路径(即HomeAssistantWebAPIUrl项)是否正确，建议使用相对路径"./../../.."。   
   
**2. 地图中不显示设备**   
请检查config.js配置中HA的访问密码(即HomeAssistantWebAPIPassword项)是否正确。   
可通过访问HA提供的API地址`https://HA的地址:8123/api/states/device_tracker.设备的ID?api_password=HA的访问密码`，来查看是否可以通过HA获取到设备信息。

**3. 地图和设备可以加载，但无设备状态和交通轨迹**
出现此问题一般是由于高德 API 申请时选错『服务平台』导致，注意请选择『web 端』，而不是 『web 服务』。

## 版本更新日志

### 2022.3.0
1. 适配ha 2022.3新版后的家、地点及轨迹不出现的问题。

### 0.0.3
1. 增加路径图示；
2. 支持新版授权机制。

### 0.0.2
1. 修复设备列表中未勾选的成员依旧在"在家成员列表框"中显示的bug；  
2. 优化代码逻辑，减少设备回家线路轨迹在地图上的刷新次数。

### 0.0.1
1. 增加对高德地图的支持：家标签及区域范围，交通态势，设备坐标，设备回家线路及预算时间，设备点聚合，在家成员列表框。   
