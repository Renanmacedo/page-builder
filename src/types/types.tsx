export type As<Props = any> = React.ElementType<Props>;

export type PropsOf<T extends As> = React.ComponentPropsWithRef<T>& { 
    as: As
}

type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = 
    Omit<Target,'as' | OmitAdditionalProps>

export type RightJoinProps<SourceProps extends object = {},OverrideProps extends object = {}> = 
    OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps


type MergeWithAs<ComponentProps extends object, AsProps extends object, AdditionalProps extends object, AsComponent extends As = As>  =
    RightJoinProps<ComponentProps, AdditionalProps> &
    RightJoinProps<AsProps, AdditionalProps> & {
        as?: AsComponent
}

export type PageBuildComponent<Component extends As, Props extends object = {}> = {
    <AsComponent extends As = Component>(
        props: MergeWithAs<
        React.ComponentProps<Component>,
        React.ComponentProps<AsComponent>,
        Props,
        AsComponent
        >,
    ): JSX.Element
    
    id?: string
}

export type HTMLPageBuildProps<T extends As> = Omit<PropsOf<T>, 'as'> & { as?: As}