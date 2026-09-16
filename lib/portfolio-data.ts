export const profile = {
  name: 'Stark',
  role: 'Web3 Community Manager & Moderator',
  quote:
    'Web3-native community operator with 3+ years of hands-on experience in community management, moderation, engagement, content and ecosystem growth.',
  status: 'Open to Web3 opportunities',
  timezone: 'UTC+3:30',
  photo: '/stark-profile.jpeg',
}

export const about =
  'Web3 community-focused operator with hands-on experience across Discord, Telegram and X. I manage communities, support users, organize engagement activities, create content and help revive and grow regional Web3 communities.'

export type Experience = {
  company: string
  role: string
  period: string
  description: string
  impact: string[]
}

export const experiences: Experience[] = [
  {
    company: 'AGNT.hub',
    role: 'Ambassador',
    period: 'May 2025 — Present',
    description:
      'High-volume Discord community activity, moderation, user support, engagement and X/Twitter community moderation & content creation. Contributed consistently to community discussions, helped users, supported ecosystem activities and worked on reviving the Persian community.',
    impact: [
      'Significantly increased Persian community activity and participation',
      'Maintained consistent Discord moderation and user support',
      'Produced a high volume of X/Twitter content and engagement',
      'Supported ongoing community growth and ecosystem visibility',
    ],
  },
  {
    company: 'ZenChain',
    role: 'VIP Community Member',
    period: 'Jan 2025 — Jan 2026',
    description:
      'Worked across Persian, Turkish and global communities; moderated and supported Discord communities, organized games, events and content contests, supported users and created engagement activities.',
    impact: [
      'Revived the Persian community with +200 active members',
      'Revived the Turkish community with +50 active members',
      'Helped global community growth from ~60K → 130K members',
      'Organized community activities with 500+ participants',
    ],
  },
  {
    company: 'EMBR Labs',
    role: 'Game Host / Community Support',
    period: 'Mar 2025 — May 2025',
    description:
      'Supported community operations, hosted games and competitions, interacted with members and collected community feedback.',
    impact: [
      'Helped grow a new community into +200–300 active members',
      'Hosted community competitions and engagement activities',
      'Supported ongoing member interaction and retention',
    ],
  },
  {
    company: 'Zivoe',
    role: 'Ambassador',
    period: 'Jul 2025 — Oct 2025',
    description:
      'Created content, supported awareness campaigns and engaged with the community.',
    impact: [
      'Contributed to community awareness and engagement during a short-term ambassador campaign',
      'Supported project visibility through social and community activity',
    ],
  },
]

export const skills = [
  'Community Management',
  'Moderation',
  'Discord',
  'Telegram',
  'X/Twitter',
  'Community Growth',
  'User Support',
  'Content Creation',
  'Events & Competitions',
  'Web3 Research',
  'Ambassador Programs',
]

export type ProofItem = {
  title: string
  hint: string
}

export const proofOfWork: ProofItem[] = [
  { title: 'Discord Communities', hint: 'Moderation & support screenshots' },
  { title: 'X / Twitter Posts', hint: 'Threads, content & engagement' },
  { title: 'Community Events', hint: 'Games, contests & AMAs' },
  { title: 'Campaigns', hint: 'Awareness & growth activations' },
  { title: 'Content', hint: 'Explainers & community assets' },
  { title: 'Testimonials', hint: 'Feedback from teams & members' },
]

export type ContactLink = {
  label: string
  value: string
  href: string
}

export const contactLinks: ContactLink[] = [
  { label: 'X / Twitter', value: '@web3_stark_', href: 'https://x.com/web3_stark_' },
  { label: 'Telegram', value: '@pNokiom', href: 'https://t.me/pNokiom' },
  { label: 'Email', value: 'kiarashnasr31@gmail.com', href: 'mailto:kiarashnasr31@gmail.com' },
]

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#proof' },
  { label: 'Connect', href: '#connect' },
]
