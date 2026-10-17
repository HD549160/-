import type { Lang } from '@/lib/i18n';

export const profile = {
  name: { zh: '黄丹', en: 'Huang Dan' },
  school: { zh: '福州大学厦门工艺美术学院', en: 'Xiamen Academy of Arts and Design, Fuzhou University' },
  degree: { zh: '工业设计与信息交互方向 · 硕士在读', en: 'M.A. candidate · Industrial Design and Information Interaction' },
  email: '',
  github: '',
  awards: {
    zh: [
      '两岸新锐设计竞赛华灿奖中华文化 IP 设计 · 福建省一等奖',
      '全国大学生工业设计大赛《Beeye 外卖骑手智能头盔设计》· 福建省三等奖',
      'NCDA 未来设计师全国高校数字艺术设计大赛 · 福建省三等奖',
      '“紫龙杯”全国艺术专业大学生产业命题创新就业大赛《穹顶·天宫》· 全国优秀奖',
      '福建省“闽人智慧”系列主题创意设计大赛 · 二等奖',
      '福建省福文化创意设计大赛《笔墨福延》· 入围奖'
    ],
    en: [
      'Huacan Award, Cross-Strait Emerging Designer Competition — Fujian First Prize, Chinese Cultural IP Design',
      'National College Student Industrial Design Competition — Fujian Third Prize, Beeye Smart Helmet',
      'NCDA Future Designer National Digital Art Design Competition — Fujian Third Prize',
      'Zilong Cup National Art Student Industry Challenge — National Excellence Award, Dome · Tiangong',
      'Fujian “Minnan Wisdom” Creative Design Competition — Second Prize',
      'Fujian Blessing Culture Creative Design Competition — Finalist, Blessings in Ink'
    ]
  },
  tools: ['Rhino', 'Adobe Photoshop', 'Adobe Illustrator', 'KeyShot', 'Figma / UI prototyping', 'CapCut'],
  principles: {
    zh: [
      ['理解问题', '从具体的人、任务和场景中识别真实矛盾。'],
      ['组织体验', '把角色、触点、信息和流程连接为可理解的系统。'],
      ['表达方案', '用界面、模型、结构与场景让决策可讨论。'],
      ['验证迭代', '区分已有证据与待验证假设，规划下一步学习。']
    ],
    en: [
      ['Understand the problem', 'Identify real tensions through people, tasks and contexts.'],
      ['Structure the experience', 'Connect roles, touchpoints, information and flows into a legible system.'],
      ['Make ideas tangible', 'Use interfaces, models, structures and scenarios to make decisions discussable.'],
      ['Validate and iterate', 'Separate evidence from assumptions and define the next learning step.']
    ]
  }
} as const;

export function profileText(lang: Lang) {
  return {
    name: profile.name[lang],
    school: profile.school[lang],
    degree: profile.degree[lang],
    awards: profile.awards[lang],
    principles: profile.principles[lang]
  };
}
