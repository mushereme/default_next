import React from "react"

import { createFromIconfontCN } from "@ant-design/icons"

const IconFont = createFromIconfontCN({scriptUrl: 'http://at.alicdn.com/t/font_2091278_icnso7p2ao.js'})

export default function MotoIcon (props) {

    return <IconFont {...props}/>
}