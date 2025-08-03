function Heart(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 64 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="heart-clip">
          <path d="M9.01 14.94C12.08 11.81 15.43 10.88 18.55 11.11C21.66 11.34 24.52 12.70 26.68 14.07C28.92 15.49 32.04 15.49 34.27 14.07C36.43 12.70 39.29 11.34 42.40 11.11C45.53 10.88 48.87 11.81 51.94 14.94C55.58 18.65 56.74 23.22 56.27 27.95C55.81 32.67 53.73 37.55 50.87 41.94C48.01 46.34 44.36 50.29 40.72 53.14C37.10 55.98 33.41 57.79 30.48 57.79C27.54 57.79 23.85 55.98 20.23 53.14C16.59 50.29 12.94 46.34 10.08 41.94C7.23 37.55 5.14 32.67 4.68 27.95C4.21 23.22 5.37 18.65 9.01 14.94Z" />
        </clipPath>

        <linearGradient
          id="heart-gradient"
          x1="29.08"
          y1="34.25"
          x2="58.23"
          y2="3.23"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#10411B" />
          <stop offset="1" stopColor="#28A745" />
        </linearGradient>

        <linearGradient
          id="heart-stroke"
          x1="5.08"
          y1="11.58"
          x2="50.56"
          y2="62.07"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.25" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.41 7.49C39.76 5.81 35.46 4.21 31.76 7.99C22.96 16.96 38.05 34.25 44.95 34.25C51.86 34.25 66.94 16.96 58.15 7.99C54.44 4.21 50.15 5.81 47.49 7.49C45.99 8.44 43.91 8.44 42.41 7.49Z"
        fill="url(#heart-gradient)"
      />
      <foreignObject
        x="0"
        y="0"
        width="64"
        height="65"
        className="pointer-events-none"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          className="w-full h-full"
          style={{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            clipPath: 'url(#heart-clip)',
          }}
        />
      </foreignObject>

      <path
        d="M9.01 14.94C12.08 11.81 15.43 10.88 18.55 11.11C21.66 11.34 24.52 12.70 26.68 14.07C28.92 15.49 32.04 15.49 34.27 14.07C36.43 12.70 39.29 11.34 42.40 11.11C45.53 10.88 48.87 11.81 51.94 14.94C55.58 18.65 56.74 23.22 56.27 27.95C55.81 32.67 53.73 37.55 50.87 41.94C48.01 46.34 44.36 50.29 40.72 53.14C37.10 55.98 33.41 57.79 30.48 57.79C27.54 57.79 23.85 55.98 20.23 53.14C16.59 50.29 12.94 46.34 10.08 41.94C7.23 37.55 5.14 32.67 4.68 27.95C4.21 23.22 5.37 18.65 9.01 14.94Z"
        fill="#28A745"
        fillOpacity="0.35"
        stroke="url(#heart-stroke)"
      />
    </svg>
  );
}

export default Heart;
