import * as React from "react";

const IconGitCompare = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-git-compare" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx={6} cy={6} r={2} /><circle cx={18} cy={18} r={2} /><path d="M11 6h5a2 2 0 0 1 2 2v8" /><polyline points="14 9 11 6 14 3" /><path d="M13 18h-5a2 2 0 0 1 -2 -2v-8" /><polyline points="10 15 13 18 10 21" /></svg>;

export default IconGitCompare;