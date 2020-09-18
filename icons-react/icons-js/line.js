import * as React from "react";

const IconLine = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-line" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx={6} cy={18} r={2} /><circle cx={18} cy={6} r={2} /><line x1={7.5} y1={16.5} x2={16.5} y2={7.5} /></svg>;

export default IconLine;