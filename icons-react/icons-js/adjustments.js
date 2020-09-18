import * as React from "react";

const IconAdjustments = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-adjustments" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx={6} cy={10} r={2} /><line x1={6} y1={4} x2={6} y2={8} /><line x1={6} y1={12} x2={6} y2={20} /><circle cx={12} cy={16} r={2} /><line x1={12} y1={4} x2={12} y2={14} /><line x1={12} y1={18} x2={12} y2={20} /><circle cx={18} cy={7} r={2} /><line x1={18} y1={4} x2={18} y2={5} /><line x1={18} y1={9} x2={18} y2={20} /></svg>;

export default IconAdjustments;