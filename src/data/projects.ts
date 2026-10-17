import type { Lang } from '@/lib/i18n';

export type ProjectCategory = 'deep' | 'product' | 'interaction' | 'service' | 'culture' | 'sketch';

export interface LocalizedText {
  zh: string;
  en: string;
}

export interface ProjectFacts {
  status: LocalizedText;
  evidence: LocalizedText;
  validation: LocalizedText;
  role?: LocalizedText;
  team?: LocalizedText;
  time?: LocalizedText;
}

export interface Project {
  id: string;
  number: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  summary: LocalizedText;
  category: ProjectCategory[];
  categoryLabel: LocalizedText;
  tags: { zh: string[]; en: string[] };
  cover: string;
  pages: number[];
  gallery: { src: string; alt: LocalizedText; caption: LocalizedText }[];
  featured: boolean;
  deep: boolean;
  facts: ProjectFacts;
}

const conceptFacts: ProjectFacts = {
  status: { zh: '概念 / 课程设计', en: 'Concept / academic project' },
  evidence: { zh: '依据原作品集中的研究、流程与设计产出整理', en: 'Based on research, process and design outputs shown in the original portfolio' },
  validation: { zh: '尚未提供真实上线或用户测试数据，案例以验证计划收束', en: 'No launch or user-testing data has been supplied; the case concludes with a validation plan' }
};

export const projects: Project[] = [
  {
    id: 'medicine', number: '01', featured: true, deep: true,
    pages: [10, 11, 12, 13, 14, 15, 16, 17, 18],
    title: { zh: '药你安全', en: 'For Your Safety' },
    subtitle: { zh: '适老化用药安全服务系统', en: 'Medication safety service system for older adults' },
    summary: { zh: '从老年人用药风险出发，连接老人、家属与医疗支持，构建实体设备和双端应用协同的服务系统。', en: 'A service system connecting older adults, family members and medical support through a physical dispenser and coordinated digital touchpoints.' },
    category: ['deep', 'service', 'interaction'],
    categoryLabel: { zh: '服务系统 / 软硬件体验', en: 'Service system / Hardware-software UX' },
    tags: { zh: ['多角色需求', '用户旅程', '服务蓝图'], en: ['Multi-stakeholder needs', 'User journey', 'Service blueprint'] },
    cover: 'assets/medicine/hero.webp',
    gallery: [
      { src: 'assets/medicine/ecosystem.webp', alt: { zh: '老年人用药生态系统图', en: 'Medication ecosystem map for older adults' }, caption: { zh: '从分散触点转向老人、家属与医疗支持协同的服务生态。', en: 'Reframing disconnected touchpoints as a coordinated service ecosystem.' } },
      { src: 'assets/medicine/journey.webp', alt: { zh: '老年用户用药旅程图', en: 'Medication journey map' }, caption: { zh: '按取药、用药、提醒与异常处理梳理体验机会。', en: 'Mapping opportunities across dispensing, medication, reminders and exceptions.' } },
      { src: 'assets/medicine/interfaces.webp', alt: { zh: '老人端与家属端界面', en: 'Interfaces for older adults and family members' }, caption: { zh: '用不同信息层级回应老人和家属的任务差异。', en: 'Different information hierarchies support distinct user responsibilities.' } },
      { src: 'assets/medicine/system.webp', alt: { zh: '设备与双端应用整体方案', en: 'Physical device and dual-app system' }, caption: { zh: '实体药盒、老人端与家属端共同组成完整体验。', en: 'The dispenser and two digital touchpoints form one connected experience.' } }
    ],
    facts: conceptFacts
  },
  {
    id: 'jiguang', number: '02', featured: true, deep: true,
    pages: [34, 35, 36, 37, 38, 39],
    title: { zh: '籍光', en: 'Jiguang' },
    subtitle: { zh: '缓解代际沟通障碍的 AI 应用概念', en: 'An AI-assisted concept for intergenerational connection' },
    summary: { zh: '把长辈口述故事转化为可共同观看和保存的动态纪念内容，探索 AI 在代际交流中的具体使用价值。', en: 'Turning narrated memories into shared, preservable stories to explore a concrete role for AI in intergenerational communication.' },
    category: ['deep', 'interaction', 'service'],
    categoryLabel: { zh: 'AI 应用 / 信息交互', en: 'AI application / Interaction design' },
    tags: { zh: ['用户痛点', '功能框架', '服务蓝图'], en: ['User pain points', 'Feature framework', 'Service blueprint'] },
    cover: 'assets/jiguang/hero.webp',
    gallery: [
      { src: 'assets/jiguang/research.webp', alt: { zh: '项目背景、用户画像与痛点', en: 'Background, user profiles and pain points' }, caption: { zh: '围绕记录困难、表达门槛与陪伴缺口组织问题。', en: 'Organising the problem around memory capture, expression barriers and companionship.' } },
      { src: 'assets/jiguang/framework.webp', alt: { zh: '用户旅程、功能框架与利益相关者', en: 'Journey, feature framework and stakeholders' }, caption: { zh: '把情感目标转化为可执行的功能与服务关系。', en: 'Translating an emotional goal into actionable features and service relationships.' } },
      { src: 'assets/jiguang/interfaces.webp', alt: { zh: '籍光应用界面', en: 'Jiguang application interfaces' }, caption: { zh: '记录、生成、整理与共同观看构成核心体验闭环。', en: 'Capture, creation, organisation and shared viewing form the core loop.' } },
      { src: 'assets/jiguang/blueprint.webp', alt: { zh: '籍光用户服务蓝图', en: 'Jiguang service blueprint' }, caption: { zh: '以前台行为和后台支持检查服务能否连续运作。', en: 'Checking continuity across frontstage behaviour and backstage support.' } }
    ],
    facts: conceptFacts
  },
  {
    id: 'beeye', number: '03', featured: true, deep: true,
    pages: [4, 5, 6, 7, 8, 9],
    title: { zh: 'Beeye', en: 'Beeye' },
    subtitle: { zh: '外卖骑手智能头盔', en: 'Smart helmet for delivery riders' },
    summary: { zh: '围绕骑行与配送高频任务，将导航、信息提醒和语音操作整合进头盔，减少骑手在路上的注意力切换。', en: 'Integrating navigation, alerts and voice interaction into a helmet to reduce attention switching during delivery.' },
    category: ['deep', 'product', 'interaction'],
    categoryLabel: { zh: '智能产品 / 软硬件交互', en: 'Smart product / Hardware-software UX' },
    tags: { zh: ['高频场景', 'AR 导航', '结构设计'], en: ['High-frequency context', 'AR navigation', 'Structural design'] },
    cover: 'assets/beeye/hero.webp',
    gallery: [
      { src: 'assets/beeye/painpoints.webp', alt: { zh: '外卖骑手痛点与使用场景', en: 'Delivery rider pain points and context' }, caption: { zh: '问题集中在路线切换、信息确认、联系客户和到达后的配送动作。', en: 'Pain points cluster around routing, confirmations, customer contact and handoff.' } },
      { src: 'assets/beeye/sketch.webp', alt: { zh: '产品定位与草图推演', en: 'Product positioning and sketch exploration' }, caption: { zh: '以安全、可视范围和操作负担约束形态与交互。', en: 'Safety, visibility and interaction load constrain form and experience.' } },
      { src: 'assets/beeye/structure.webp', alt: { zh: '头盔结构爆炸图与功能', en: 'Helmet exploded view and functions' }, caption: { zh: 'AR 眼镜、骨传导耳机、麦克风和灯光被组织为一个系统。', en: 'AR optics, bone-conduction audio, microphone and lighting are organised as one system.' } },
      { src: 'assets/beeye/scenario.webp', alt: { zh: '骑行第一视角导航与配送流程', en: 'First-person navigation and delivery flow' }, caption: { zh: '以第一视角检验信息在真实任务中的出现顺序。', en: 'A first-person view tests when information appears during real tasks.' } }
    ],
    facts: conceptFacts
  },
  {
    id: 'tiangong', number: '04', featured: false, deep: false,
    pages: [19, 20, 21, 22, 23, 24],
    title: { zh: '穹顶 · 天宫', en: 'Dome · Tiangong' },
    subtitle: { zh: '中国空间站系列形象设计', en: 'A visual design series for a Chinese space station' },
    summary: { zh: '以中国传统文化元素探索空间站、宇航服与飞船的系列形态。', en: 'A visual series translating Chinese cultural motifs into a station, spacesuit and spacecraft.' },
    category: ['product'], categoryLabel: { zh: '概念产品', en: 'Concept design' },
    tags: { zh: ['系列概念', '形态设计', '文化转译'], en: ['Design system', 'Form development', 'Cultural translation'] },
    cover: 'assets/archive/tiangong.webp', gallery: [], facts: conceptFacts
  },
  {
    id: 'wuxing', number: '05', featured: false, deep: false,
    pages: [25, 26, 27, 28, 29, 30, 31, 32, 33],
    title: { zh: '五行道院', en: 'Five Elements Institute' },
    subtitle: { zh: '五禽戏守护者 IP 形象设计', en: 'Guardian character IP inspired by Five-Animal Qigong' },
    summary: { zh: '围绕五禽戏与五行文化构建五个角色、关系体系与衍生品。', en: 'Five characters, their relationships and derivatives built around Five-Animal Qigong and the Five Elements.' },
    category: ['culture'], categoryLabel: { zh: '文化 IP', en: 'Cultural IP' },
    tags: { zh: ['角色系统', '文化研究', '衍生品'], en: ['Character system', 'Cultural research', 'Derivatives'] },
    cover: 'assets/archive/wuxing.webp', gallery: [], facts: conceptFacts
  },
  {
    id: 'pen', number: '06', featured: false, deep: false,
    pages: [40, 41, 42],
    title: { zh: '笔墨福延', en: 'Blessings in Ink' },
    subtitle: { zh: '福文化创意产品设计', en: 'Creative product inspired by the culture of blessing' },
    summary: { zh: '把福文化转译为钢笔、墨水瓶、包装和日常使用场景。', en: 'Translating the culture of blessing into a pen, ink bottle, packaging and everyday ritual.' },
    category: ['product', 'culture'], categoryLabel: { zh: '文创产品', en: 'Cultural product' },
    tags: { zh: ['元素提取', '结构与形态', '包装'], en: ['Element extraction', 'Structure and form', 'Packaging'] },
    cover: 'assets/archive/pen.webp', gallery: [], facts: conceptFacts
  },
  {
    id: 'poetry', number: '07', featured: false, deep: false,
    pages: [44],
    title: { zh: '清廉诗牌', en: 'Integrity Poetry Cards' },
    subtitle: { zh: '诗牌游戏与诗词手册', en: 'Poetry-card game and booklet' },
    summary: { zh: '将清廉主题诗词组织为可阅读、可游戏的视觉系统。', en: 'A visual system that turns integrity-themed poetry into both reading and play.' },
    category: ['culture'], categoryLabel: { zh: '视觉与游戏设计', en: 'Visual and game design' },
    tags: { zh: ['信息组织', '卡牌', '手册'], en: ['Information design', 'Cards', 'Booklet'] },
    cover: 'assets/archive/poetry.webp', gallery: [], facts: conceptFacts
  },
  {
    id: 'airport', number: '08', featured: false, deep: false,
    pages: [45],
    title: { zh: '机场空间装置', en: 'Airport Installation' },
    subtitle: { zh: '公共空间中的结构与节奏', en: 'Structure and rhythm in public space' },
    summary: { zh: '从闽南文化意象出发，探索机场公共空间中的装置语言。', en: 'Exploring an installation language for an airport through Minnan cultural imagery.' },
    category: ['product'], categoryLabel: { zh: '空间装置', en: 'Spatial installation' },
    tags: { zh: ['公共空间', '结构表达', '文化意象'], en: ['Public space', 'Structural expression', 'Cultural imagery'] },
    cover: 'assets/archive/airport.webp', gallery: [], facts: conceptFacts
  },
  {
    id: 'sketchbook', number: '09', featured: false, deep: false,
    pages: [46, 47, 48, 49, 50, 51],
    title: { zh: '手绘与造型探索', en: 'Sketchbook & Form Studies' },
    subtitle: { zh: '插画、汽车手绘与产品快题', en: 'Illustration, vehicle sketches and product ideation' },
    summary: { zh: '以一个精选合集呈现色彩叙事、工业产品形态和快速概念表达。', en: 'A curated collection spanning visual storytelling, industrial form and rapid product ideation.' },
    category: ['sketch'], categoryLabel: { zh: '手绘探索', en: 'Sketch exploration' },
    tags: { zh: ['插画', '汽车手绘', '产品快题'], en: ['Illustration', 'Vehicle sketching', 'Product ideation'] },
    cover: 'assets/archive/sketchbook.webp',
    gallery: [
      { src: 'assets/archive/illustration.webp', alt: { zh: '主题插画作品', en: 'Themed illustration work' }, caption: { zh: '主题叙事与色彩表达。', en: 'Narrative themes and colour expression.' } },
      { src: 'assets/archive/vehicles.webp', alt: { zh: '汽车与工业产品手绘', en: 'Vehicle and industrial product sketches' }, caption: { zh: '形态、透视与材质表现练习。', en: 'Studies in form, perspective and material rendering.' } },
      { src: 'assets/archive/ideation.webp', alt: { zh: '工业产品快题方案', en: 'Rapid industrial design concepts' }, caption: { zh: '从问题分析到草图方案的快速表达。', en: 'Rapid expression from problem framing to concept sketches.' } }
    ],
    facts: conceptFacts
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
export const archiveProjects = projects.filter((project) => !project.featured);
export const getProject = (id: string) => projects.find((project) => project.id === id);
export const text = (value: LocalizedText, lang: Lang) => value[lang];
