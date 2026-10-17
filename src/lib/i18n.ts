export type Lang = 'zh' | 'en';

export const languages: Lang[] = ['zh', 'en'];

export const copy = {
  zh: {
    locale: 'zh-CN',
    languageName: '中文',
    switchLabel: 'EN',
    nav: { work: '作品', method: '方法', about: '关于', resume: '简历', contact: '联系' },
    hero: {
      eyebrow: '产品经理 / 产品设计',
      title: '把复杂问题，\n转化为清晰可用的产品。',
      body: '我是黄丹，拥有工业设计与信息交互背景。我关注真实使用场景，擅长把用户洞察、产品结构与体验表达连接起来。',
      primary: '查看案例',
      secondary: '查看简历',
      availability: '寻找产品经理、产品助理与产品设计方向的机会'
    },
    sections: {
      featured: '精选案例',
      featuredNote: '三个案例，分别呈现服务系统、AI 应用和软硬件体验思考。',
      method: '产品方法',
      methodNote: '从问题识别到验证计划，让每一步都有清楚依据。',
      capabilities: '设计能力',
      capabilitiesNote: '工业设计训练，让产品判断不只停留在屏幕。',
      archive: '更多作品',
      archiveNote: '概念产品、文化 IP、文创、空间与手绘探索。',
      contact: '一起把问题讲清楚，把产品做扎实。'
    },
    actions: { viewCase: '查看案例', viewAll: '查看全部作品', explore: '查看作品', back: '返回作品库', next: '下一个项目', top: '返回顶部' },
    labels: { deepCase: '深度案例', archive: '作品归档', status: '项目状态', evidence: '内容依据', validation: '验证状态', role: '个人角色', team: '团队', time: '时间' },
    work: { title: '作品库', intro: '用三篇深度案例呈现产品思考，用精选归档保留跨学科设计能力。', all: '全部', deep: '深度案例', product: '工业产品', interaction: '交互 / UI', service: '服务系统', culture: '文化 / IP', sketch: '手绘探索' },
    about: { title: '设计的起点，始终是人。', intro: '我正在福州大学厦门工艺美术学院攻读工业设计与信息交互方向硕士。工业设计训练让我关注形态、结构和使用情境；信息交互训练让我进一步思考需求、流程与产品决策。', education: '教育背景', awards: '代表奖项', tools: '工具与能力', principles: '工作原则' },
    resume: { title: '简历', intro: '产品经理方向的公开版简历，隐藏手机号、生日、住址等敏感信息。', print: '打印 / 另存为 PDF', portfolio: '查看完整作品库', pending: '公开邮箱与 GitHub 将在发布前写入配置。' },
    footer: '工业设计 · 信息交互 · 产品思考'
  },
  en: {
    locale: 'en',
    languageName: 'English',
    switchLabel: '中文',
    nav: { work: 'Work', method: 'Method', about: 'About', resume: 'Résumé', contact: 'Contact' },
    hero: {
      eyebrow: 'Product Management / Product Design',
      title: 'Turning complex problems\ninto clear, usable products.',
      body: 'I am Huang Dan, with a background in industrial design and information interaction. I connect user insight, product structure and experience design around real-world contexts.',
      primary: 'View case studies',
      secondary: 'View résumé',
      availability: 'Open to product manager, product assistant and product design opportunities'
    },
    sections: {
      featured: 'Selected case studies',
      featuredNote: 'Three cases spanning service systems, an AI-assisted concept and hardware-software experience.',
      method: 'Product method',
      methodNote: 'A clear path from identifying the problem to planning validation.',
      capabilities: 'Design capabilities',
      capabilitiesNote: 'Industrial design training keeps product decisions grounded beyond the screen.',
      archive: 'More work',
      archiveNote: 'Concept products, cultural IP, creative products, spatial and sketch explorations.',
      contact: 'Let’s make the problem clear and the product useful.'
    },
    actions: { viewCase: 'View case study', viewAll: 'View all work', explore: 'Explore project', back: 'Back to work', next: 'Next project', top: 'Back to top' },
    labels: { deepCase: 'In-depth case', archive: 'Work archive', status: 'Project status', evidence: 'Evidence', validation: 'Validation', role: 'Role', team: 'Team', time: 'Timeline' },
    work: { title: 'Work', intro: 'Three in-depth cases demonstrate product thinking, while a curated archive preserves multidisciplinary design range.', all: 'All', deep: 'Case studies', product: 'Industrial design', interaction: 'Interaction / UI', service: 'Service system', culture: 'Culture / IP', sketch: 'Sketches' },
    about: { title: 'Design starts with people.', intro: 'I am pursuing a master’s degree in Industrial Design and Information Interaction at Xiamen Academy of Arts and Design, Fuzhou University. Industrial design trained me to consider form, structure and context; information interaction led me toward requirements, flows and product decisions.', education: 'Education', awards: 'Selected awards', tools: 'Tools & capabilities', principles: 'Working principles' },
    resume: { title: 'Résumé', intro: 'A public résumé for product roles. Phone number, date of birth and home address are intentionally omitted.', print: 'Print / save as PDF', portfolio: 'View complete work archive', pending: 'Public email and GitHub will be added to the site configuration before launch.' },
    footer: 'Industrial Design · Information Interaction · Product Thinking'
  }
} as const;

export function t(lang: Lang) { return copy[lang]; }

export function pathFor(lang: Lang, path = '') {
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  return `${base}${lang}/${path}`.replace(/([^:]\/)\/+/g, '$1');
}

export function assetPath(path: string) {
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  return `${base}${path.replace(/^\//, '')}`;
}
