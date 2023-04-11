
type SidebarProps = {
    children?: React.ReactNode
} 
 function Sidebar({ children } : SidebarProps) {
    return (
        <div className="h-full w-80  p-5">
            {children}
        </div>
    )
}
export default Sidebar