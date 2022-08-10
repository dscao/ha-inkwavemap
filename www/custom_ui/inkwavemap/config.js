// HomeAssistant访问地址
// 支持相对路径(如:"./../../..")和绝对路径(如:"http://www.xxx.com:8123")
// !!! 注：非高级玩家请使用默认的相对路径，即"./../../.."，全部照搬，保留..，无需任何改动 !!!
HomeAssistantWebAPIUrl="./../../.."


// 高德API key
// 请至高德开放平台http://lbs.amap.com/获取
// (必填)
GaodeMapKey="cc9dxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

// 高德API key的安全密钥
// 可获取到key值和安全密钥jscode（自2021年12月02日升级，升级之后所申请的 key 必须配备安全密钥 jscode 一起使用)
// 注意：此次升级不会影响之前已获得 key 的使用；升级之后的新增的key必须要配备安全密钥一起使用（不需要则留空，但不能删除）
GaodeMapjscode=""
// 如果使用高德强烈推荐的方式一：JSAPI key搭配代理服务器并携带安全密钥转发（安全）（不使用则留空，但不能删除）
GaodeMapserviceHost=""
//以上两者都不为空时，以GaodeMapjscode优先。


// 永久Token(HomeAssistant 0.77.2版本以上时可用)
// HomeAssistant 0.77.2版本以后，HomeAssistant登录后如果未启用记住密码，墨澜地图将无法自行获取Token（配置了正确的LongTimeToken后可以正常使用）
// 获取方式见：https://bbs.hassbian.com/thread-4695-1-1.html
// (必填，“Bearer ”保留不变，后面的长串修改为你的HA长期访问令牌)
LongTimeToken="Bearer eyJ0eXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"



// 指定追踪设备ID（多个设备时用半角逗号做分隔“,”，如"device_tracker.gddr_gooddriver,device_tracker.iphone13"）
// 不指定时默认显示全部可追踪的设备
// (选填)
DeviceTrackerIDList=""
