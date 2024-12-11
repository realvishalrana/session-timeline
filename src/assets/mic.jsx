import React from "react";

const MicIcon = (props) => {
  return (
    <svg
      width={23}
      height={22}
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={0.5} width={22} height={22} rx={9} fill="#5568FE" />
      <path
        d="M15 10V11C15 11.9283 14.6313 12.8185 13.9749 13.4749C13.3185 14.1313 12.4283 14.5 11.5 14.5M11.5 14.5C10.5717 14.5 9.6815 14.1313 9.02513 13.4749C8.36875 12.8185 8 11.9283 8 11V10M11.5 14.5V16.5M9.5 16.5H13.5M11.5 5.5C11.1022 5.5 10.7206 5.65804 10.4393 5.93934C10.158 6.22064 10 6.60218 10 7V11C10 11.3978 10.158 11.7794 10.4393 12.0607C10.7206 12.342 11.1022 12.5 11.5 12.5C11.8978 12.5 12.2794 12.342 12.5607 12.0607C12.842 11.7794 13 11.3978 13 11V7C13 6.60218 12.842 6.22064 12.5607 5.93934C12.2794 5.65804 11.8978 5.5 11.5 5.5Z"
        stroke="white"
        strokeWidth={0.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MicIcon;