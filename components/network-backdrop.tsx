export function NetworkBackdrop() {
  return (
    <div className="network-backdrop" aria-hidden="true">
      <svg viewBox="0 0 1200 680" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="network-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.05" />
            <stop offset="0.5" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <g
          className="network-lines"
          fill="none"
          stroke="url(#network-line)"
          strokeWidth="1.5"
        >
          <path d="M40 520 230 390 430 470 620 250 825 330 1010 165 1170 250" />
          <path d="M80 160 270 245 430 120 620 250 760 90 1010 165 1140 70" />
          <path d="M230 390 270 245M430 470 430 120M825 330 760 90M1010 165 1120 500" />
        </g>
        <g className="network-nodes" fill="currentColor">
          {[
            "40,520",
            "230,390",
            "430,470",
            "620,250",
            "825,330",
            "1010,165",
            "1170,250",
            "80,160",
            "270,245",
            "430,120",
            "760,90",
            "1140,70",
            "1120,500",
          ].map((point) => {
            const [cx, cy] = point.split(",");
            return <circle key={point} cx={cx} cy={cy} r="4" />;
          })}
        </g>
      </svg>
    </div>
  );
}
