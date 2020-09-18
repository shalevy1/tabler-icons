import * as React from "react";

const IconInfoCircle = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-info-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx={12} cy={12} r={9} /><line x1={12} y1={8} x2={12.01} y2={8} /><polyline points="11 12 12 12 12 16 13 16" /></svg>;

export default IconInfoCircle;