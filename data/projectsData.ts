interface Project {
  type: 'work' | 'personal'
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    type: 'work',
    title: 'DEMIBAV - Gitec',
    description: `Developing a Data Acquisition System (DAQ) for injection molding machines using microcontrollers and industrial sensors, such as thermocouples, load cells and extensometers to provide real-time data on the injection molding process.

    `,
    imgSrc: '/static/images/projects/gitec.jpeg',
  },
  // {
  //   type: 'personal',
  //   title: 'Chameleon Lamp',
  //   description: `In Progress`,
  //   imgSrc: '/static/images/projects/gitec.jpeg',
  // },
]

export default projectsData
