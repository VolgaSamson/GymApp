import React from "react";

const SectionHead =({icon,title,className}) =>{
return(
    <div className={`section__head ${className}`}>
    <span>
{icon}
<h2>{title}</h2>
    </span>
</div>
)
}
export default SectionHead;