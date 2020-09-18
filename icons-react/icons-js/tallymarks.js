import * as React from "react";

const IconTallymarks = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-tallymarks" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1={6} y1={5} x2={6} y2={19} /><line x1={10} y1={5} x2={10} y2={19} /><line x1={14} y1={5} x2={14} y2={19} /><line x1={18} y1={5} x2={18} y2={19} /><line x1={3} y1={17} x2={21} y2={7} /></svg>;

export default IconTallymarks;