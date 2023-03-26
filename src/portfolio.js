const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Văn Thư',
  role: 'Front End Engineer',
  description:
    'I want to find an opportunity to learn more experience, improve myself and look forward to helping with company’s professional activities, becoming an official long-term employee in your company.',
  resume: 'https://drive.google.com/file/d/1UmaB6bAS1uZIy398jqbw1jemmPJkAKag/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/vanthudkr/',
    github: 'https://github.com/vanthudkr',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Confidential',
    description:
      'Building and implementing the technology behind a new automated bond underwriting platform is complex, but the Propeller team has done all the hard work — so you, and your clients, don’t have to.',
    stack: ['SASS', 'Tailwind', 'TypeScript', 'React', 'React Query', 'GraphQL', 'Redux'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Portal',
    description:
      'The portal project is a project to design the company’s system to suit that company, so that all information and manipulation functions can be automated on the system, easy to manage and use.',
    stack: ['SASS', 'TypeScript', 'NextJS', 'Redux'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Webapp - Game',
    description:
      'Is a web application to exchange information between users, such as chat, make friends, and unfriend',
    stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Webapp - Drink',
    description:
      'A food delivery application is a software on a phone/website, representing an intermediary unit that helps users order food and deliver food to their place.',
    stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'MiaHire Service',
    description:
      'MiaHire service is a service that can help recruiters spend very little time filtering and selecting candidates',
    stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://www.miahire.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'Unit test',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'vanthu1998it@gmail.com',
}

export { header, about, projects, skills, contact }
