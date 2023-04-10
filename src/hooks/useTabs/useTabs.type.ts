export type TabsProps  = {
    onTabChange?: () => any;
    currentIndex?: number;
    orientation?: string;
    changeOrintation?: () => void;
}

export type TabReturnType = ReturnType<() => TabsProps> & { hasChange: boolean;};