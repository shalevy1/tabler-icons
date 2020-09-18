import * as React from "react";

const IconVector = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-vector" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x={3} y={3} width={4} height={4} rx={1} /><rect x={17} y={3} width={4} height={4} rx={1} /><rect x={17} y={17} width={4} height={4} rx={1} /><rect x={3} y={17} width={4} height={4} rx={1} /><line x1={5} y1={7} x2={5} y2={17} /><line x1={19} y1={7} x2={19} y2={17} /><line x1={7} y1={5} x2={17} y2={5} /><line x1={7} y1={19} x2={17} y2={19} /></svg>;

export default IconVector;