
type SidebarProps = {
    children?: React.ReactNode
} 
 function Sidebar({ children, ...props } : SidebarProps) {
    return (
        <div {...props}>
            {children}
        </div>
    )
}
export default Sidebar