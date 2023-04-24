import { ReactNode } from "react"
interface SubPagesProps {
  children: ReactNode
}
const SubPages = ({children}: SubPagesProps) => (
  <>{children}</>
)

export default SubPages