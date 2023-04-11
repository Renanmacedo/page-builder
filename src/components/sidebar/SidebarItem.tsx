import {PropsWithChildren} from "react"
function SidebarItem({ children }: PropsWithChildren) {
    return (
        <div className="p-2">
            {children}
        </div>
    )
}
export default SidebarItem;