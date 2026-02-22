import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      key: 0,
      name: '�������',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          excludeActivityIds: [
            '.activity.ChatActivity', // ������������
            '.search.activity.UniteSearchActivity', // ������ҳ�����
          ],
          excludeMatches: '[vid="root"]', // �����������ã����ų�EditText[vid="input"]�򻬶���Ϣʱ�������
          matches: 'TextView[text^="����"][text.length<=10][!(vid="title")]',
          snapshotUrls: [
            'https://i.gkd.li/i/13093155',
            'https://i.gkd.li/i/13207731',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/13217807',
            'https://i.gkd.li/i/13856647',
            'https://i.gkd.li/i/13868177',
            'https://i.gkd.li/i/14341023',
            'https://i.gkd.li/i/15334565',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '������-��¼��Ȩ',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matchRoot: true,
          actionMaximum: 3,
          actionCd: 500,
          activityIds: [
            'com.tencent.biz.qrcode.activity.QRLoginAuthActivity',
            'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
            'com.tencent.open.agent.QuickLoginAuthorityActivity',
          ],
          matches: [
            '[text="��¼ȷ��" || text$="����ʹ��"][visibleToUser=true]',
            'Button[text="��¼" || text="ͬ��" || text="ȷ��"][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/20737721',
            'https://i.gkd.li/i/20737651',
            'https://i.gkd.li/i/20737675',
            'https://i.gkd.li/i/20737673',
            'https://i.gkd.li/i/22631619',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '�������-QQС���������',
      fastQuery: true,
      actionMaximum: 1,
      priorityTime: 10000,
      rules: [
        {
          activityIds: [
            '.mini.appbrand.ui.AppBrandUI',
            '.activity.miniaio.MiniChatActivity',
          ],
          matches: [
            '[text="���"][visibleToUser=true]',
            '[text="����"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12877215',
            'https://i.gkd.li/i/12919195',
            'https://i.gkd.li/i/15130235',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '������ʾ',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          activityIds: [
            '.upgrade.activity.UpgradeActivity',
            '.upgrade.ui.dialog.UpgradeActivity',
          ],
          matches: [
            '[text="��������"][visibleToUser=true]',
            '[text="���ڲ�����"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/19141671',
            'https://i.gkd.li/i/23670528',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '������ʾ-��Ϣҳ��-����',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: '.activity.SplashActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] -2 [text*="�°汾" || text*="�汾����"][text.length<10]',
          snapshotUrls: [
            'https://i.gkd.li/i/13931212',
            'https://i.gkd.li/i/17529150',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '������-�Զ�����',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: '.activity.SplashActivity',
          matches:
            'ImageView[childCount=0] < [desc$="���Ͽ�"] < RelativeLayout < FrameLayout +2 LinearLayout >3 @ViewGroup[clickable=true][!(getChild(childCount.minus(1)).text^="��")] + TextView[text="ƴ�������"]',
          snapshotUrls: 'https://i.gkd.li/i/24551887',
          excludeSnapshotUrls: 'https://i.gkd.li/i/18574530',
        },
        {
          preKeys: [0],
          key: 1,
          activityIds: 'com.tencent.biz.TenpayActivity',
          anyMatches: [
            '@[desc="�ر�"][clickable=true] < RelativeLayout -2 ViewGroup >4 [text^="����һ��"][visibleToUser=true]',
            '[desc="����"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/18724880',
            'https://i.gkd.li/i/24551748',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          activityIds: 'com.tencent.biz.TenpayActivity',
          matches: '@[desc="����"] +n [text="�����¼"]',
          snapshotUrls: 'https://i.gkd.li/i/24551886',
        },
      ],
    },
    {
      key: 9,
      name: '������-������Ⱥ���Զ�������Ͻǹر�',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.QQBrowserActivity',
          matches: [
            'TextView[text="��Ⱥ������"][visibleToUser=true]',
            'TextView[text="�ر�"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/14235163',
        },
      ],
    },
    {
      key: 10,
      name: '������-�Զ����� Windows QQ',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds:
            'com.tencent.biz.qrcode.activity.UnlockPCQuickVerifyActivity',
          matches: '[text="����"]',
          snapshotUrls: 'https://i.gkd.li/i/15360265',
        },
      ],
    },
    {
      key: 11,
      name: '������-�Զ�����������Ӧ��',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.QQBrowserActivity',
          matches: [
            '[text^="�����뿪QQ"][visibleToUser=true]',
            '[text="����"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23924557',
        },
      ],
    },
  ],
});
