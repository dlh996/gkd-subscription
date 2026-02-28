// 全局规则黑名单
// 在一些非系统应用中禁用所有全局规则
export const blackListAppIDs: string[] = [
  // 系统自带非系统应用
  'com.android.soundrecorder', // 录音机
  'com.android.email', // 电子邮件
  'com.android.deskclock', // 时钟
  'com.android.calendar', // 日历
  'com.android.providers.downloads.ui', // 下载管理

  // 第三方应用
  'com.tencent.mm', // 微信
  'li.songe.gkd', // GKD
  'com.eg.android.AlipayGphone', //支付宝
  'com.tencent.wetype', // 微信输入法
  'com.tmri.app.main', // 交管12123
  'com.github.kr328.clash', // Clash for Android
  'org.localsend.localsend_app', // LocalSend
  'moe.shizuku.privileged.api', // Shizuku
  'io.legado.app.release', // 阅读
  'com.v2ray.ang', // v2rayNG
  'app.mihon', // Mihon
  'mark.via', // via浏览器
  'mark.via.gp', // via浏览器Google Play版
  'com.bilibili.app.in', // bilibili
  'com.alicloud.databox', // 阿里云盘
  'com.google.android.apps.authenticator2', // Authenticator
  'me.jmh.authenticatorpro', // Authenticator Pro
  'com.android.chrome', // Chrome
  'com.xunmeng.pinduoduo', // 拼多多
  'com.hpbr.bosszhipin', // BOSS直聘
  'com.music.moment', // 音乐时刻
  'com.quark.browser', // 夸克浏览器 开屏广告误触 https://i.gkd.li/i/18221460
  'com.fongmi.android.tv', // OK影视
  'com.crirp.zhipu', // 智谱
];

// 在应用中单独禁用某个全局规则
// 开屏广告黑名单
export const openAdBlackListAppIDs = new Set([...blackListAppIDs]);

// 青少年模式黑名单
export const yongBlackListAppIDs = new Set([
  ...blackListAppIDs,
  'xxx.pornhub.fuck', // JavDB
  'com.netease.cloudmusic', // 网易云音乐 全局规则在 https://i.gkd.li/i/14931708 误触
  'com.zhihu.android', // 知乎 全局规则在 https://i.gkd.li/i/14964990 误触
  'com.baidu.tieba', // 百度贴吧
  'bin.mt.plus', // MT管理器
  'com.android.bankabc', // 中国农业银行
  'com.autonavi.minimap', // 高德地图
  'com.baidu.netdisk', // 百度网盘
  'com.jingdong.app.mall', // 京东
  'com.max.xiaoheihe', // 小黑盒
  'com.MobileTicket', // 铁路12306
  'com.sinovatech.unicom.ui', // 中国联通
  'com.sdu.didi.psnger', // 滴滴出行
  'com.sankuai.meituan', // 美团
  'com.taobao.idlefish', // 闲鱼
  'com.tencent.mobileqq', // QQ
  'com.alibaba.android.rimet', // 钉钉
  'com.taptap', // TapTap
  'com.coolapk.market', // 酷安
  'com.xunlei.downloadprovider', // 迅雷
  'com.taobao.taobao', // 淘宝
  'com.xingin.xhs', // 小红书
  'com.ct.client', // 中国电信
  'me.ele', // 饿了么
  'com.tencent.qqmusic', // QQ音乐
  'com.ss.android.ugc.aweme', // 抖音 全局规则误触 https://i.gkd.li/i/20061572
  'com.ruanmei.ithome', // IT之家
  'com.xiaomi.vipaccount', // 小米社区
  'com.wandoujia.phoenix2', // 豌豆荚
  'com.luna.music', // 汽水音乐
  'com.hnnx.eBank.android',
]);

// 全局规则白名单（由于系统应用默认禁用全局规则，所以对系统应用启用白名单模式）
// 在一些系统软件中启用所有全局规则
export const whiteListAppIDs: string[] = [];

// 在应用中单独启用某个全局规则
// 开屏广告白名单
export const openAdWhiteListAppIDs = new Set([
  ...whiteListAppIDs,
  'com.miui.player', // 小米音乐
]);

// 青少年模式白名单
export const yongWhiteListAppIDs = new Set([...whiteListAppIDs]);
