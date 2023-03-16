
type SidebarProps = {
    children?: React.ReactNode
} 
export function Sidebar({ children } : SidebarProps) {
    return (
        <div className="h-full w-80  p-5">
            {children}
        </div>
    )
}