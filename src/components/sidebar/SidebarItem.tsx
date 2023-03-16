import {PropsWithChildren} from "react"
export function SidebarItem({ children }: PropsWithChildren) {
    return (
        <div className="p-2">
            {children}
        </div>
    )
}