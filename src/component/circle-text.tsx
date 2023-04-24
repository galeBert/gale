
export default function CircleText({children, className, fontSize = 12, width = 100 }: { children: string, className?: string, fontSize?: number, width?: number}) {
  return (
    <svg  viewBox="0 0 100 100" width={width} height={width}>
  <defs>
    <path id="circle"
      d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"/>
  </defs>
  <text font-size={fontSize}>
    <textPath  xlinkHref="#circle">
      <tspan className={className}>{children}</tspan>
    </textPath>
  </text>
</svg>
  )
}
