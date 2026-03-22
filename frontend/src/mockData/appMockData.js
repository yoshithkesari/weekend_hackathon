export const appMockData = {
  trustHooks: ['Anonymous', 'End call anytime', 'Report available'],
  auth: {
    registration: {
      screenLabel: 'Registration',
      title: 'Start conversation without performance pressure.',
      description:
        'A gentle account setup gives people a stable entry point while preserving emotional safety and future anonymity.',
      hooks: [
        'Identity pressure stays low from the start',
        'You can shift into anonymous mode later',
        'A calm sign-up flow reduces drop-off anxiety',
      ],
    },
    login: {
      screenLabel: 'Login',
      title: 'Return to a space that feels emotionally safe.',
      description:
        'A warm re-entry experience reduces friction and reminds people the platform is about being heard, not watched.',
      demoUser: {
        email: 'demo@innercircle.app',
        password: 'demo1234',
      },
      hooks: [
        'Familiarity reduces decision fatigue',
        'Private re-entry restores emotional continuity',
        'Calm language lowers login stress',
      ],
    },
  },
  profileCreation: {
    screenLabel: 'Profile Creation',
    title: 'We will assign a private name and shape your first conversation gently.',
    description:
      'Automatic anonymous names reduce identity anxiety, while interests and mood help the system create thoughtful introductions.',
    anonymousNames: [
      'Velvet Comet',
      'North Star',
      'Quiet Harbor',
      'Moss Light',
      'Silver Pine',
      'Soft Orbit',
      'Velvet Echo',
      'Blue Lantern',
    ],
    interests: [
      'Music',
      'Art',
      'Fitness',
      'Meditation',
      'Reading',
      'Nature',
      'Cinema',
      'Journaling',
      'Travel',
      'Late-night Talks',
    ],
    moods: ['Calm', 'Energetic', 'Happy', 'Loving'],
    hooks: [
      'Automatic names soften identity exposure',
      'Shared interests reduce awkward silence',
      'Mood labeling increases emotional regulation',
    ],
  },
  matchingGraphExperience: {
    screenLabel: 'Matching Graph',
    title: 'Your energy map makes matching feel intentional.',
    description:
      'A visual graph helps people trust the system by showing how mood, interests, and communication style align.',
    clusters: [
      { label: 'Listening', position: 'left-[8%] top-[18%]', tone: 'slate' },
      { label: 'Music', position: 'right-[8%] top-[24%]', tone: 'violet' },
      { label: 'Reflection', position: 'left-[18%] bottom-[12%]', tone: 'emerald' },
      { label: 'Kindness', position: 'right-[18%] bottom-[10%]', tone: 'sky' },
    ],
    candidates: [
      {
        name: 'North Star',
        mood: 'Calm',
        compatibility: 92,
        sharedInterests: ['Music', 'Reading', 'Meditation'],
      },
      {
        name: 'Velvet Echo',
        mood: 'Happy',
        compatibility: 86,
        sharedInterests: ['Cinema', 'Art'],
      },
      {
        name: 'Quiet Harbor',
        mood: 'Loving',
        compatibility: 88,
        sharedInterests: ['Nature', 'Journaling'],
      },
    ],
    reassurance: 'Finding someone aligned with your energy',
  },
  socialCircle: {
    screenLabel: 'Social Circle',
    title: 'People nearby in spirit, not in status.',
    description:
      'The feed focuses on emotional familiarity and shared interests so discovery feels safe, warm, and relevant.',
    friends: [
      {
        name: 'North Star',
        vibe: 'Reflective and kind',
        mutualInterests: ['Music', 'Meditation', 'Reading'],
        note: 'Open to a calm evening conversation',
      },
      {
        name: 'Velvet Echo',
        vibe: 'Playful and emotionally aware',
        mutualInterests: ['Art', 'Cinema', 'Music'],
        note: 'Likely to enjoy creative conversations',
      },
      {
        name: 'Quiet Harbor',
        vibe: 'Gentle and grounding',
        mutualInterests: ['Nature', 'Journaling'],
        note: 'Usually available for slower, thoughtful check-ins',
      },
    ],
    anonymousPrompt: 'Prefer not to choose? Start an anonymous conversation instead.',
  },
  callingExperience: {
    screenLabel: 'Calling Interface',
    title: 'Focus on the voice.',
    description:
      'Whether the call is anonymous or with a familiar connection, the interface keeps visual noise low and safety visible.',
    controls: ['Mute', 'End call', 'Safety'],
    trustCopy: ['Anonymous option available', 'End call anytime', 'Report is always visible'],
  },
  safetyExperience: {
    screenLabel: 'Safety',
    title: 'You are always in control.',
    description:
      'Visible safety tools increase trust, lower perceived risk, and help people stay present in meaningful conversations.',
    actions: [
      'Report a conversation',
      'Block a person',
      'Review emotional safety guidelines',
      'Leave instantly without explanation',
    ],
    principles: [
      'Control should be visible before it is needed',
      'Safe exits reduce anxiety during vulnerable conversations',
      'Trust grows when protection feels immediate',
    ],
  },
  homeMatches: [
    { name: 'North Star', mood: 'Calm', topics: ['Reading', 'Nature'] },
    { name: 'Velvet Echo', mood: 'Happy', topics: ['Music', 'Cinema'] },
    { name: 'Drift Bloom', mood: 'Loving', topics: ['Art', 'Journaling'] },
  ],
  callStats: [
    { label: 'Voice only', value: '100%' },
    { label: 'Identity pressure', value: '0%' },
    { label: 'Shared interests', value: '2+' },
  ],
  identity: {
    screenLabel: '01 Anonymous Identity Creation',
    title: 'Exist without identity pressure.',
    description:
      'People open up more honestly when identity cues are softened. This screen creates a safe starting point with an anonymous name, a fluid avatar, and no social scorekeeping.',
    anonymousName: 'Velvet Comet',
    privacyCopy: [
      'Your identity stays private',
      'You are known by your thoughts, not your appearance',
    ],
    benefits: [
      'Reduces fear of judgement',
      'Reduces self comparison',
      'Reduces performance anxiety',
    ],
    profileRules: ['No real photo', 'No follower count', 'No bio pressure'],
  },
  interests: {
    screenLabel: '02 Interest Selection',
    title: 'Shared interests create easier conversations.',
    description:
      'Similarity Attraction Theory helps people feel safer with familiar topics before the first hello.',
    selected: ['Music', 'Art', 'Fitness', 'Meditation'],
    all: [
      'Music',
      'Art',
      'Fitness',
      'Meditation',
      'Reading',
      'Nature',
      'Cinema',
      'Journaling',
    ],
    emotionalEffect: 'Reduces awkward silence fear',
  },
  moods: {
    screenLabel: '03 Mood Selection',
    title: 'How are you feeling today?',
    description:
      'When people label emotions, they regulate them better. Mood helps the system align energy before conversation begins.',
    helperCopy: 'Your mood helps us connect you with the right energy',
    cards: [
      {
        name: 'Calm',
        note: 'Slow pace, reflective tone',
        accent: 'from-sky-400 to-cyan-300',
      },
      {
        name: 'Energetic',
        note: 'Lively, upbeat conversation',
        accent: 'from-orange-400 to-rose-400',
      },
      {
        name: 'Happy',
        note: 'Warm and positive energy',
        accent: 'from-amber-300 to-pink-300',
      },
      {
        name: 'Loving',
        note: 'Empathetic, gentle, caring',
        accent: 'from-violet-400 to-fuchsia-300',
      },
    ],
  },
  matching: {
    screenLabel: '04 Matching Visualization',
    title: 'Finding conversations aligned with you...',
    description:
      'Visual matching increases trust by making the system feel thoughtful instead of random.',
    nodes: [
      { label: 'You', position: 'left-[38%] top-[42%]', emphasis: true },
      { label: 'Calm', position: 'left-[64%] top-[12%]' },
      { label: 'Music', position: 'right-[6%] top-[40%]' },
      { label: 'Reading', position: 'left-[18%] bottom-[12%]' },
      { label: 'Voice', position: 'left-[8%] top-[18%]' },
    ],
    reassurance: 'Reduces fear of a random uncomfortable match',
  },
  matchPreview: {
    screenLabel: '05 Match Preview Card',
    title: 'You may enjoy this conversation.',
    description:
      'A small preview lowers uncertainty before the first interaction and helps people feel emotionally prepared.',
    profile: {
      anonymousName: 'North Star',
      mood: 'Calm',
      interests: ['Music', 'Reading', 'Meditation'],
      summary:
        'Soft-spoken, curious, and likely to enjoy reflective late-night conversations.',
      radar: [
        { axis: 'Warmth', value: 84 },
        { axis: 'Curiosity', value: 72 },
        { axis: 'Listening', value: 91 },
        { axis: 'Humor', value: 58 },
      ],
    },
    emotionalEffect: 'Reduces uncertainty fear',
  },
  voiceCall: {
    screenLabel: '06 Voice Call',
    title: 'Focus on the voice',
    description:
      'Voice-only communication reduces visual judgement and creates room for deeper listening.',
    participants: ['You', 'North Star'],
    indicators: ['Anonymous', 'End call anytime', 'Safety visible'],
  },
  mutualInterest: {
    screenLabel: '07 Mutual Interest Confirmation',
    title: 'Good conversations are mutual.',
    description:
      'Reciprocal liking helps people feel validated while making rejection gentler and safer.',
    actions: ['Interested', 'Not Interested', 'Report'],
    reassurance: 'This connection was not mutual',
  },
  friends: {
    screenLabel: '08 Friends Screen',
    title: 'People you felt comfortable talking to.',
    description:
      'Repeated positive exposure builds familiarity and trust over time.',
    connections: [
      {
        name: 'Velvet Echo',
        note: 'Shared a thoughtful conversation about music and burnout.',
        affinity: 'Comfort match',
      },
      {
        name: 'Quiet Harbor',
        note: 'Connected over meditation and slow mornings.',
        affinity: 'Gentle energy',
      },
      {
        name: 'Moss Light',
        note: 'Easy back-and-forth on books, routines, and recovery.',
        affinity: 'Trusted repeat',
      },
    ],
  },
  safety: {
    screenLabel: '09 Safety Center',
    title: 'You are always in control.',
    description:
      'Visible safety controls lower risk perception and strengthen platform trust.',
    actions: [
      'Report user',
      'Block user',
      'Review community guidelines',
      'Leave conversation instantly',
    ],
    trustNote: 'Visible safety options increase platform trust',
  },
  emptyState: {
    screenLabel: '10 Gentle Empty State',
    title: 'Good conversations take time.',
    description:
      'Emotionally reassuring empty states reduce churn more effectively than abrupt dead ends.',
    supportiveLines: [
      'Finding someone aligned with your energy',
      'A thoughtful match is worth a short wait',
    ],
  },
}
