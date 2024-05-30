import Link from 'next/link'
import React from 'react'

interface linksProps {
    title: string,
    path: string,
}

const Links = () => {

    const links = [
        {
            title: "Self Assesment Review",
            path: "/self",
        },{
            title: "Arrarisal Reports",
            path: "/self/appraisalreports",
        },{
            title: "My Profile",
            path: "/self/myprofile",
        },{
            title: "Performance Appraisal",
            path: "/self/performanceraisalform",
        },{
            title: "Weekly Wins",
            path: "/self/weeklywins",
        },{
            title: "Team Assesment Review",
            path: "/team"
        },
    ]
  return (
    <div>
      {links.map((link =>(
        <Link href={link.path} key={link.title}>{link.title}</Link>
      )))}
    </div>
  )
}

export default Links
