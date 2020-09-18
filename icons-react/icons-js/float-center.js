import * as React from "react";

const IconFloatCenter = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-float-center" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width={6} height={6} x={9} y={5} rx={1} /><line x1={4} y1={7} x2={5} y2={7} /><line x1={4} y1={11} x2={5} y2={11} /><line x1={19} y1={7} x2={20} y2={7} /><line x1={19} y1={11} x2={20} y2={11} /><line x1={4} y1={15} x2={20} y2={15} /><line x1={4} y1={19} x2={20} y2={19} /></svg>;

export default IconFloatCenter;