import React from "react"
import ContentLoader from "react-content-loader"

import style from './ShopItem.module.css'

const Skeleton = (props) => (

  <ContentLoader 
    className={style.item}
    speed={2}
    width={400}
    height={600}
    viewBox="0 0 400 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="350" height="478" /> 
    <rect x="83" y="501" rx="0" ry="0" width="190" height="30" /> 
    <rect x="157" y="544" rx="0" ry="0" width="40" height="20" />
  </ContentLoader>
)

export default Skeleton