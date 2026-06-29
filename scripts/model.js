export const DATA_NEWS = {
  title: '灯亮之前，他在路上',
  subtitle: '张黎明的31年抢修路、8万公里巡线图与一次次现场创新',
  deck: '停电对大多数人来说，是灯灭的一瞬。对张黎明来说，是电话响起后那段必须更快一点的路。',
  palette: {
    midnight: '#06172D',
    deepBlue: '#0B1F3A',
    electricYellow: '#FFD84D',
    electricBlue: '#4FD7FF'
  },
  sections: [
    { id: 'hero', label: '开屏', eyebrow: '数据新闻 H5', title: '灯亮之前，他在路上' },
    { id: 'road', label: '路有多长', eyebrow: '第一幕', title: '31年抢修路线' },
    { id: 'time', label: '时间怎么省', eyebrow: '第二幕', title: '从45分钟到8分钟' },
    { id: 'innovation', label: '创新怎么长', eyebrow: '第三幕', title: '从故障点到发明点' },
    { id: 'robot', label: '机器人', eyebrow: '第四幕', title: '把人从高处换回地面' },
    { id: 'community', label: '光照到哪里', eyebrow: '第五幕', title: '从抢修现场到社区楼道' },
    { id: 'legacy', label: '一个人之后', eyebrow: '第六幕', title: '更多人跟着出发' }
  ],
  heroMetrics: [
    { id: 'years', value: '31', unit: '年', label: '一线抢修', source: '新华网专题、新华社' },
    { id: 'mileage', value: '8万+', unit: '公里', label: '累计巡线', source: '新华社、新华网' },
    { id: 'repairs', value: '近2万', unit: '次', label: '抢修与停送电操作', source: '新华社、工人日报' },
    { id: 'drawings', value: '1500+', unit: '张', label: '手绘线路图', source: '工人日报、新华网' },
    { id: 'innovations', value: '400+', unit: '项', label: '技术革新', source: '新华社、工人日报' }
  ],
  metrics: [
    { id: 'years', value: '31年/30多年', display: '31年一线抢修', unit: '年', source: '新华网专题、新华社', usedIn: '开屏、第一幕', hasConflict: false, note: '不同报道存在“30多年”的概括写法，成片主展示采用更具体的31年。' },
    { id: 'mileage', value: '8万多公里', display: '巡线8万+公里', unit: '公里', source: '新华社、新华网', usedIn: '开屏、第一幕', hasConflict: false, note: '用于抽象累积路径，不绘制真实GIS轨迹。' },
    { id: 'repairs', value: '近2万次', display: '近2万次抢修', unit: '次', source: '新华社、工人日报', usedIn: '开屏、第一幕', hasConflict: false, note: '与停送电操作等表述可能合并出现，页面用“抢修与停送电操作”规避误读。' },
    { id: 'drawings', value: '1500多张', display: '1500+张线路图', unit: '张', source: '工人日报、新华网', usedIn: '第一幕', hasConflict: false, note: '用资料墙视觉表达，不展示真实图纸原件。' },
    { id: 'innovations', value: '400余项', display: '400+项技术革新', unit: '项', source: '新华社、工人日报', usedIn: '开屏、第三幕', hasConflict: false, note: '技术革新作为创新矩阵核心数字。' },
    { id: 'patents', value: '140多个 / 158项', display: '140余项专利', unit: '项', source: '工人日报、新华网', usedIn: '第三幕、数据备注', hasConflict: true, note: '专利数存在口径不一：部分报道为140多个，部分报道为158项；页面仅作备注，不与其他口径混算。' },
    { id: 'timeSaving', value: '45分钟→8分钟', display: '抢修时间缩短约82.2%', unit: '分钟', source: '工人日报、新华网', usedIn: '第二幕', hasConflict: false, note: '按(45-8)/45计算，四舍五入到一位小数。' },
    { id: 'robotUse', value: '20省；7亿元；1.7万次', display: '机器人应用数据需按统计时点标注', unit: '组', source: '新华网、共产党员网', usedIn: '第四幕', hasConflict: true, note: '机器人推广省份与产业化数据受统计时点影响，页面采用“报道口径”备注，不绘制具体省份清单。' },
    { id: 'communityLight', value: '37栋/148楼道/2000+户；后续累计400+楼道/4000+户', display: '148个黑楼道被点亮', unit: '组', source: '工人日报、求是网', usedIn: '第五幕', hasConflict: true, note: '148楼道与400+楼道属于不同统计阶段，页面提供口径切换说明，不混作同一时间点。' },
    { id: 'legacyScale', value: '63工作室；2000+创客；30分队；400+队员', display: '一个创新者带出更多人', unit: '组', source: '共产党员网', usedIn: '第六幕', hasConflict: false, note: '用于扩散网络图，表达经验—方法—队伍三层扩散。' }
  ],
  faultPoints: [
    {
      name: 'A点：夜间故障',
      route: '从抢修站出发，避开主路拥堵，沿支线快速接近杆塔。',
      result: '先定位，再隔离，最后恢复非故障区域供电。',
      x: 18,
      y: 58
    },
    {
      name: 'B点：暴雨跳闸',
      route: '按线路图先查低洼路段，再检查易积水节点。',
      result: '缩小排查范围，减少无效绕行。',
      x: 47,
      y: 34
    },
    {
      name: 'C点：老旧小区',
      route: '结合手绘图纸和楼栋出入口，先到用户影响最大的节点。',
      result: '把“找路”变成可复用的现场判断。',
      x: 76,
      y: 66
    }
  ],
  timelineFlows: {
    before: [
      { label: '停电隔离', minutes: 12 },
      { label: '登高作业', minutes: 14 },
      { label: '更换保险', minutes: 11 },
      { label: '复核送电', minutes: 8 }
    ],
    after: [
      { label: '地面操作', minutes: 3 },
      { label: '快速更换', minutes: 3 },
      { label: '复核送电', minutes: 2 }
    ]
  },
  funnel: [
    { label: '现场痛点', detail: '同类故障反复出现，耗时、风险和停电影响都需要被压缩。' },
    { label: '经验记录', detail: '把现场判断写成案例，把路线、杆塔、工具问题沉淀下来。' },
    { label: '工具改造', detail: '把“能不能少登高、少停电、少绕路”的问题改造成工具方案。' },
    { label: '测试验证', detail: '在真实抢修流程中验证效率、安全和可复制性。' },
    { label: '固化扩散', detail: '形成案例库、百宝书、专利和班组方法。' }
  ],
  innovationCases: [
    {
      title: '案例一：可摘取式低压刀闸',
      pain: '更换保险要登高，整套流程约45分钟。',
      outcome: '站在地面用绝缘拉杆完成操作，缩短到8分钟。',
      impact: '形成专利，年经济效益300多万元。'
    },
    {
      title: '案例二：抢修知识沉淀',
      pain: '故障种类复杂，个人经验难复制。',
      outcome: '分析近万个故障，整理30大类300多种经验。',
      impact: '形成《急修案例库》《抢修百宝书》，新人也能更快上手。'
    }
  ],
  keywords: [
    { text: '抢修', weight: 5 },
    { text: '创新', weight: 5 },
    { text: '服务', weight: 4 },
    { text: '线路', weight: 4 },
    { text: '故障', weight: 4 },
    { text: '楼道', weight: 3 },
    { text: '机器人', weight: 3 },
    { text: '专利', weight: 3 },
    { text: '社区', weight: 3 },
    { text: '图纸', weight: 2 },
    { text: '万家', weight: 2 },
    { text: '工作室', weight: 2 }
  ],
  robotParts: [
    { id: 'insulation', label: '绝缘', detail: '带电作业首先要隔开风险，让设备替人靠近高压环境。' },
    { id: 'positioning', label: '定位', detail: '复杂线路和狭小空间里，定位越稳，远程操作越可靠。' },
    { id: 'vision', label: '视觉识别', detail: '把现场经验转成机器可识别的目标和工序。' },
    { id: 'remote', label: '远程控制', detail: '工人回到地面，用控制台完成原本必须登高的关键动作。' }
  ],
  communityStats: [
    { value: '11', unit: '个社区', label: '建立长期服务联系' },
    { value: '150+', unit: '位', label: '老弱孤残服务档案' },
    { value: '近万', unit: '次', label: '志愿服务' },
    { value: '148', unit: '个黑楼道', label: '早期点亮口径' },
    { value: '2000+', unit: '户', label: '居民受益' }
  ],
  legacyNetwork: {
    nodes: [
      { id: 'zlm', name: '张黎明', category: '中心', value: 70, desc: '31年一线抢修经验的起点。' },
      { id: 'map', name: '线路图', category: '方法', value: 44, desc: '1500多张手绘线路图，把路记成方法。' },
      { id: 'cases', name: '案例库', category: '方法', value: 46, desc: '近万个故障分析，沉淀为可复用案例。' },
      { id: 'book', name: '抢修百宝书', category: '方法', value: 42, desc: '30大类300多种故障经验。' },
      { id: 'knife', name: '刀闸改造', category: '方法', value: 45, desc: '从45分钟压缩到8分钟。' },
      { id: 'robot', name: '机器人研发', category: '方法', value: 48, desc: '让人从高处回到地面。' },
      { id: 'team', name: '服务队', category: '队伍', value: 38, desc: '30个分队、400多名队员。' },
      { id: 'studios', name: '创新工作室', category: '队伍', value: 36, desc: '培育63个创新工作室。' },
      { id: 'makers', name: '电力创客', category: '队伍', value: 35, desc: '2000余名“电力创客”“蓝领创客”。' },
      { id: 'honors', name: '58人次荣誉', category: '结果', value: 28, desc: '近三年来省部级以上荣誉。' },
      { id: 'skills', name: '2700+技能提升', category: '结果', value: 30, desc: '方法被传下去，而不是停在个人经验里。' }
    ],
    links: [
      ['zlm', 'map'], ['zlm', 'cases'], ['zlm', 'knife'], ['zlm', 'robot'],
      ['cases', 'book'], ['book', 'team'], ['knife', 'studios'], ['robot', 'makers'],
      ['team', 'honors'], ['studios', 'skills'], ['makers', 'skills']
    ]
  },
  sources: [
    { label: '中宣部授予张黎明“时代楷模”称号 - 新华网', url: 'https://www.xinhuanet.com/politics/2018-05/28/c_1122900378.htm' },
    { label: '时代楷模张黎明 - 新华网专题', url: 'https://www.xinhuanet.com/politics/ldzt/sdkmzlm/index.htm' },
    { label: '工人日报2018年6月28日PDF', url: 'https://www.workercn.cn/papers/grrb/2018/06/28/7/grrb201806287.pdf' },
    { label: '跟着总书记看中国丨创新逐梦电力人 - 新华网', url: 'https://www.news.cn/politics/leaders/2022-10/01/c_1129047134.htm' },
    { label: '二十大代表风采丨张黎明：创新使工作更快乐 - 共产党员网', url: 'https://www.12371.cn/2022/09/26/ARTI1664181119271247.shtml' },
    { label: '代表访谈 | 架起党联系群众的连心桥 - 求是网', url: 'https://www.qstheory.cn/laigao/ycjx/2022-10/20/c_1129072707.htm' }
  ]
};

export function getMetric(id) {
  const metric = DATA_NEWS.metrics.find((item) => item.id === id);
  if (!metric) {
    throw new Error(`Unknown metric: ${id}`);
  }
  return metric;
}

export function calcReductionPercent(beforeMinutes, afterMinutes) {
  if (beforeMinutes <= 0 || afterMinutes < 0 || afterMinutes > beforeMinutes) {
    throw new Error('Invalid time values for reduction calculation');
  }
  return Number((((beforeMinutes - afterMinutes) / beforeMinutes) * 100).toFixed(1));
}

export function formatReductionLabel(beforeMinutes, afterMinutes) {
  return `缩短约${calcReductionPercent(beforeMinutes, afterMinutes)}%`;
}

export function makeGraphNodes(network) {
  return network.nodes.map((node) => ({
    id: node.id,
    name: node.name,
    value: node.value,
    category: node.category,
    symbolSize: Math.max(26, node.value),
    draggable: true,
    tooltip: node.desc
  }));
}

export function makeGraphEdges(network) {
  return network.links.map(([source, target]) => ({ source, target }));
}

export function makeCategoryList(network) {
  return [...new Set(network.nodes.map((node) => node.category))].map((name) => ({ name }));
}
