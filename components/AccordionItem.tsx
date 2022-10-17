import { AccordionData } from '../models/AccordionData'
import { useEffect, useRef, useState } from 'react'

const AccordionItem = ({
  data,
  isOpen,
  btnOnClick
}: {
  data: AccordionData
  isOpen: boolean
  btnOnClick: () => void
}) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current as HTMLDivElement
      setHeight(contentEl.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [isOpen])

  return (
    <div className={`value__accordion-item ${isOpen ? 'active' : ''}`}>
      <header className="value__accordion-header" onClick={btnOnClick}>
        <div className={`value__accordion-icon ${isOpen ? 'active' : ''}`}>{data.icon}</div>
        <h3 className="value__accordion-title">{data.title}</h3>
        <div className={`value__accordion-arrow ${isOpen ? 'active' : ''}`}>
          {data.iconArrow}
        </div>
      </header>

      <div
        className="value__accordion-content"
        ref={contentRef}
        style={{ height }}
      >
        <p className="value__accordion-description">{data.description}</p>
      </div>
    </div>
  )
}

export default AccordionItem
