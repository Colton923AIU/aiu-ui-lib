import '@/lib/global.scss'
import * as React from 'react'
import type { IFlexOptions } from './Flex.types'

interface FlexProps extends IFlexOptions {
    children: React.ReactNode;
}

const Flex = ({styles, align, dir, justify, h, w, children}: FlexProps) =>{

    return (
        <div 
            style={{
                display: 'flex', 
                width: w || undefined,
                height: h|| undefined,
                alignItems: align || 'center',
                flexDirection: dir || 'column',
                justifyContent: justify || 'center',
                ...styles
                }}
            >
            {children}
        </div>
    )
}

export default Flex