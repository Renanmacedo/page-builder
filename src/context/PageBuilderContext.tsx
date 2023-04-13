import React, { FunctionComponent} from 'react';

const PageBuilderContext = React.createContext(null);

PageBuilderContext.displayName = 'PageBuilderContext';

const PageBulderProvider: FunctionComponent<any> = ({ children }) => {

    const onSubmit = () => {}
    return (
    <PageBuilderContext.Provider value={{ onSubmit }}>
        {children}
    </PageBuilderContext.Provider>
    )
}

export default PageBulderProvider