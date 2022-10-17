import AccordionItem from './AccordionItem'
import { AccordionData } from '../models/AccordionData'
import { useState } from 'react'

const Accordion = ({ items }: { items: Array<AccordionData> }) => {
  const [currentIdx, setCurrentIdx] = useState(-1)
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1))
  }

  return (
    <div className="value__accordion">
      {items.map((item, idx) => (
        <AccordionItem
          key={item.id}
          data={item}
          isOpen={idx === currentIdx}
          btnOnClick={() => btnOnClick(idx)}
        />
      ))}
    </div>
  )
}

export default Accordion
