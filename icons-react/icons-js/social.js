import * as React from "react";

const IconSocial = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-social" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx={12} cy={5} r={2} /><circle cx={5} cy={19} r={2} /><circle cx={19} cy={19} r={2} /><circle cx={12} cy={14} r={3} /><line x1={12} y1={7} x2={12} y2={11} /><line x1={6.7} y1={17.8} x2={9.5} y2={15.8} /><line x1={17.3} y1={17.8} x2={14.5} y2={15.8} /></svg>;

export default IconSocial;