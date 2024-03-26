interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'DEMIBAV - Gitec',
    description: `Aim to reduce injection mold costs by employing steel insert gates - a permanent component - with inserts manufactured through additive manufacturing using low-cost materials, and inserts through machining of low-cost metallic alloy (e.g., Aluminum, ZAMAC, etc.) - a replaceable component.`,
    imgSrc: '/static/images/gitec.jpeg',
  },
]

export default projectsData
