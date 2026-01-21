export const inputBase =
  `
  w-full p-4 rounded-lg
  bg-[rgb(var(--bg-gray))]
  border border-[rgba(255,255,255,0.08)]
  text-[rgb(var(--text-primary))]
  placeholder:text-[rgba(255,255,255,0.45)]
  focus:border-[rgb(var(--accent))]
  focus:outline-none
  focus:shadow-[0_0_15px_rgba(46,255,193,0.45)]
  transition-all duration-300
`;

export const textareaBase =
  `
  ${inputBase}
  resize-none
`;

export const buttonBase =
  `
  py-4 rounded-lg
  bg-[#2effc1]
  to-[rgb(var(--accent))]
  text-black font-semibold
  hover:scale-105 hover:-translate-y-1
  transition-all duration-300
`;
