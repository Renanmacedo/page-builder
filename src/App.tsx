import { ComponentProps } from 'react';
import { Box, BoxComponent} from './components/Box/Box';
import DragContainer from './components/DragContainer/DragContainer';
import { Sidebar, SidebarItem }  from './components/Sidebar';
import LayoutContextProvider from './context/LayoutContext';
import { createComponent } from './utils/createComponent'


const components: ComponentProps<any>[] = [
  {
    key: `${new Date().getTime()}`,
    as: 'h1',
    component: "Box",
  },

]
function App() {

  return (
    <LayoutContextProvider>
        <div className="h-screen w-screen flex">
        <Sidebar>
          <SidebarItem>  
            { components.map(component => {

              const Component = createComponent<typeof component.as>(component);
              return <Component key={component.key} />
            })}
          </SidebarItem>
        </Sidebar>
        <DragContainer>
        <Box as="section">Box With As</Box>
        <BoxComponent as="main">Box Component With As</BoxComponent>
        </DragContainer>
      </div>
    </LayoutContextProvider>
  )
}

export default App
