
import React from 'react'

type Props = {
    title: string
}

const SectionTitle = (props: Props) => {
  return (
   <h3 className="sectionTitle">{props.title}</h3>
  )
}

export default SectionTitle

