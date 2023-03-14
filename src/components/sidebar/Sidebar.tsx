
type SidebarProps = {
    children?: React.ReactNode
} 
export function Sidebar({ children } : SidebarProps) {
    return (
        <div className="h-full w-80 bg-purple-400 p-5">
            {children}
        </div>
    )
}