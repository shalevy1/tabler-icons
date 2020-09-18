import * as React from "react";

const IconArrowUpCircle = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-arrow-up-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx={12} cy={12} r={9} /><line x1={12} y1={8} x2={8} y2={12} /><line x1={12} y1={8} x2={12} y2={16} /><line x1={16} y1={12} x2={12} y2={8} /></svg>;

export default IconArrowUpCircle;