import * as React from 'react'
import type {
  TAccordionProps,
  TAccordionOptions,
  TAccordionItems,
} from './Accordion.types'
import Flex from '../../../components/Flex'
import Card from '../../../components/Card'
import styles from './Accordion.module.scss'

const Accordion = ({ items, options }: TAccordionProps) => {
  const [activeDropdown, setActiveDropdown] = React.useState<number[]>([])
  const DefaultIcon = () => {
    return (
      <div
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(0,0,0,.9) 50%, rgba(0,0,0,0) 50%)`,
          transform: 'translateY(25%) rotate(135deg)',
          width: '20px',
          height: '20px',
          padding: '1px',
        }}
      />
    )
  }

  const defaultOptions: TAccordionOptions = {
    variant: 'horizontal',
    withIcon: {
      Icon: DefaultIcon(),
      size: 'md',
      pos: 'start',
    },
  }
  const accordionOptions = options ?? defaultOptions

  const handleDropdown = (index: number) => {
    setActiveDropdown((oldList) => {
      if (oldList.includes(index)) {
        return oldList.filter((item) => item !== index)
      } else {
        return [...oldList, index]
      }
    })
  }

  const isActive = (index: number) => {
    if (activeDropdown.includes(index)) return true
    return false
  }

  const AnimatedIcon = ({ index }: { index: number }) => {
    if (accordionOptions.withIcon) {
      return (
        <div className={isActive(index) && styles.animatedIcon}>
          {accordionOptions.withIcon.Icon}
        </div>
      )
    } else {
      return null
    }
  }

  const AccordionContent = ({
    item,
    index,
  }: {
    item: TAccordionItems
    index: number
  }) => {
    if (isActive(index)) {
      return <>{item.dropdownContent}</>
    } else {
      return null
    }
  }

  return (
    <div className={'wrapper'} id="accordion-wrapper">
      <Card>
        <Flex>
          {items.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  handleDropdown(index)
                }}
                style={{
                  cursor: 'pointer',
                  minWidth: '330px',
                  width: '100%',
                  height: '100%',
                }}
              >
                <Flex
                  dir={accordionOptions.variant === 'vertical' ? 'row' : 'column'}
                >
                  <Flex
                    dir={
                      accordionOptions.variant === 'horizontal' ? 'row' : 'column'
                    }
                    w={'100%'}
                    align="center"
                    styles={
                      accordionOptions.withIcon &&
                      accordionOptions.withIcon.pos === 'end'
                        ? accordionOptions.variant === 'horizontal'
                          ? {
                              flexDirection: 'row-reverse',
                            }
                          : {
                              flexDirection: 'column-reverse',
                            }
                        : null
                    }
                  >
                    <AnimatedIcon index={index} />
                    <span
                      style={{
                        width: '200px',
                        margin: '0 1rem',
                        padding: '.1rem 0',
                      }}
                    >
                      {item.label}
                    </span>
                  </Flex>
                  <AccordionContent index={index} item={item} />
                </Flex>
              </div>
            )
          })}
        </Flex>
      </Card>
    </div>
  )
}

export default Accordion
