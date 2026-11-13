// 페이지에 보이는 모든 내용은 이 파일에서 관리합니다.
// 컴포넌트는 여기 있는 값을 읽어서 그리기만 합니다.

export type Project = {
  name: string
  description: string
  tech: string[]
  link?: string
}

export type School = {
  name: string
  status?: string
}

export type Profile = {
  name: string
  tagline: string
  about: string[]
  skills: string[]
  device: string
  education: School[]
  projects: Project[]
  contact: {
    github: string
    email: string
  }
}

export const profile: Profile = {
  name: '문상진',
  tagline: 'MLOps 교육생',

  // TODO: 자기소개 글 직접 다듬기 (배열의 항목 하나가 문단 하나)
  about: [
    '안녕하세요! MLOps를 공부하고 있는 문상진입니다.',
    '머신러닝 모델이 실제 서비스에서 안정적으로 돌아가도록 만드는 과정에 관심이 많습니다.',
  ],

  skills: ['Python', 'Architecture Design'],
  device: 'M5 Air',

  // 최근 학력부터
  education: [
    { name: '국립 한밭대학교', status: '3학년 휴학' },
    { name: '동대전고등학교' },
    { name: '오정중학교' },
    { name: '화정초등학교' },
  ],

  // TODO: 실제 프로젝트로 바꾸기
  projects: [
    {
      name: '자기소개 페이지',
      description: 'React와 TypeScript로 만든 한 페이지짜리 자기소개 사이트입니다.',
      tech: ['React', 'TypeScript', 'Vite'],
      link: 'https://github.com/deepbluemoon/my-profile', // TODO: 저장소를 올린 뒤 주소 확인하기
    },
    {
      name: '프로젝트 이름',
      description: '프로젝트에 대한 짧은 설명을 적어주세요.',
      tech: ['Python'],
    },
  ],

  contact: {
    github: 'https://github.com/deepbluemoon',
    email: 'dosle7061@gmail.com',
  },
}
