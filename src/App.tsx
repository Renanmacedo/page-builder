import { ComponentProps } from 'react';
import PageBuilder from './components/PageBuilder/PageBuilder';
import { Sidebar, SidebarItem }  from './components/Sidebar';
import { Tabs } from './components/Tabs';
import LayoutContextProvider from './context/LayoutContext';
const components: ComponentProps<any>[] = [
  {
    key: `${new Date().getTime()}`,
    as: 'h1',
    component: "Box",
    label: 'Text Component'
  },
]
function App() {

  return (
    <LayoutContextProvider>
        <div className="h-screen w-screen flex">
        <Sidebar>
          <Tabs>
            <div>Maquiagem</div>
          </Tabs>
        </Sidebar>
        <PageBuilder />
      </div>
    </LayoutContextProvider>
  )
}

export default App
