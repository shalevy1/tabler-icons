import * as React from "react";

const IconDevices = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-devices" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x={13} y={8} width={8} height={12} rx={1} /><path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" /><line x1={16} y1={9} x2={18} y2={9} /></svg>;

export default IconDevices;