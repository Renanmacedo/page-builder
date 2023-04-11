export type TabsProps  = {
    onSelection: (props: any) => void;
    currentIndex: number;
    defaultValue: string;
    orientation: string;
}

export type TabReturnType = Partial<TabsProps>