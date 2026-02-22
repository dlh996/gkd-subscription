import { defineGkdGlobalGroups } from '@gkd-kit/define';
import * as appList from './globalDefaultApps';

export const OPEN_AD_ORDER = -10; // �������
export const YOUTH_MODE_ORDER = -9; // ������ģʽ

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '�������-ȫ��',
    order: OPEN_AD_ORDER,
    fastQuery: true,
    matchTime: 6000,
    actionMaximum: 2,
    resetMatch: 'app',
    forcedTime: 6000,
    actionCdKey: 0,
    actionMaximumKey: 0,
    priorityTime: 10000,
    disableIfAppGroupMatch: '�������',
    rules: [
      {
        key: 0,
        // ��ֹ��
        excludeMatches:
          '([text*="����" || text="��ʷ��¼" || text$="����"][text.length>3 && text.length<7][visibleToUser=true]) || ([text="Submit" || text*="�Ķ���ͬ��" || text="��ǩ" || text="NEXT"][visibleToUser=true]) || ([text$="����" || text$="ѡ����" || text^="��һ��" || text^="���" || text*="����Ƭ"][text.length<10][visibleToUser=true]) || ([text^="ѡ��"][text*="ƫ��" || text*="��Ȥ" || text*="ϲ��"][text.length<10][visibleToUser=true])',
        anyMatches: [
          '[text*="����"][text.length<10][width<500 && height<300][visibleToUser=true]',
          '@[name$="View" || name$="LinearLayout"][clickable=true][childCount<2][width<300 && height<200] - [text="�������"][visibleToUser=true]',
          '[childCount=0][visibleToUser=true][width<500 && height<300][(text.length<10 && (text*="����" || text*="�� ��" || text*="���^" || text~="(?is).*skip.*") && text!*="��Ƶ" && text!*="Ƭͷ" && text!*="Ƭβ") || (vid~="(?is).*skip.*" && vid!~="(?is).*video.*" && vid!~="(?is).*head.*" && vid!~="(?is).*tail.*" && !(text="����") && !(text="ȡ��") && !(text*="�˳�")) || id$="tt_splash_skip_btn" || (desc.length<10 && (desc*="����" || desc*="���^" || desc~="(?is).*skip.*"))]',
        ],
        snapshotUrls: [
          // �����������
          'https://i.gkd.li/i/21617612',
          'https://i.gkd.li/i/23557410',

          // text*="�� ��"
          'https://i.gkd.li/i/13421452',

          'https://i.gkd.li/i/24097095', // width<500
          'https://i.gkd.li/i/24766641', // height<300

          // ���ⱻexcludeMatchesƥ��
          'https://i.gkd.li/i/24330969',
          'https://i.gkd.li/i/24541384',
          'https://i.gkd.li/i/24588777',
        ],
        excludeSnapshotUrls: [
          // ������
          'https://i.gkd.li/i/15079224', // !(text*="�˳�")
          'https://i.gkd.li/i/17108010', // !(text="����")
          'https://i.gkd.li/i/18265000', // !(text="ȡ��")
          'https://i.gkd.li/i/19952277', // text="Submit"
          'https://i.gkd.li/i/20946730', // text$="����"
          'https://i.gkd.li/i/20949002', // vid!~="(?is).*video.*"
          'https://i.gkd.li/i/21617520', // text!*="��Ƶ"
          'https://i.gkd.li/i/22634992', // text$="��¼" text*="�Ķ���ͬ��"
          'https://i.gkd.li/i/23051921', // [text^="ѡ��"]
          'https://i.gkd.li/i/23742770', // [text^="ѡ��"]
          'https://i.gkd.li/i/23743049', // [text^="ѡ��"]
          'https://i.gkd.li/i/23052289', // text="ѡ����"
          'https://i.gkd.li/i/23122415', // text="��ǩ"
          'https://i.gkd.li/i/23225609', // text="NEXT"
          'https://i.gkd.li/i/23741801', // text^="��һ��" text$="����"
          'https://i.gkd.li/i/23741779', // text^="���" text$="����"
          'https://i.gkd.li/i/25039297', // text*="����Ƭ"��text!*="Ƭͷ"��text!*="Ƭβ"��vid!~="(?is).*head.*"��vid!~="(?is).*tail.*"
        ],
      },
      {
        key: 1, // �ֽ�SDK
        anyMatches: [
          '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="������Ӧ��" || text*="Ť���ֻ�" || text*="������ϻ�" || text*="ʡǮ����" || text*="ŤһŤ"][visibleToUser=true]',
          'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
        ],
        snapshotUrls: [
          'https://i.gkd.li/i/19685971', // +(1,2)
          'https://i.gkd.li/i/19701216', // +(1,2)
          'https://i.gkd.li/i/20262130',
          'https://i.gkd.li/i/20768349',
          'https://i.gkd.li/i/23549504', // text*="ŤһŤ"
        ],
      },
    ],
    apps: [...appList.openAdBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.openAdWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
  {
    key: 1,
    name: '������ģʽ-ȫ��',
    order: YOUTH_MODE_ORDER,
    fastQuery: true,
    matchTime: 8000,
    actionMaximum: 1,
    resetMatch: 'app',
    disableIfAppGroupMatch: '������ģʽ',
    rules: [
      {
        key: 0,
        matches: [
          '[text*="������" || text*="δ����"][text*="ģʽ" || text*="�ػ�"][text.length<15][childCount=0][visibleToUser=true]',
          '[text*="֪����" || text*="����֪��"|| text*="��������"][text.length<8][childCount=0][visibleToUser=true]',
        ],
      },
    ],
    apps: [...appList.yongBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.yongWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
]);
