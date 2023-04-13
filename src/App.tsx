import Card from './components/Card/Card';
import Drop from './components/Drop/Drop';
import { Sidebar }  from './components/Sidebar';
import * as Tabs from './components/Tabs';
import LayoutContextProvider from './context/LayoutContext';

function App() {
  return (
    <LayoutContextProvider>
        <div className="h-screen w-screen flex ">
        <Sidebar className="h-full w-80  p-1">
          <Tabs.Root className="border border-solid border-transparent flex flex-col w-[300px]" defaultValue="pages">
            <Tabs.List className="flex border-mauve6 shrink-0">
              <Tabs.ListHeader className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11  rounded-tl-md rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default" value="pages"> 
               Páginas
              </Tabs.ListHeader>
              <Tabs.ListHeader className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default" value="components">
                Componentes
                </Tabs.ListHeader>
            </Tabs.List>
            <Tabs.Content value="pages">
              {/* page component */}
            </Tabs.Content>
            <Tabs.Content value="components">
              <Card />
            </Tabs.Content>
          </Tabs.Root>
        </Sidebar>
          <Drop className="container mx-auto h-full w-full bg-white border-x-2 border-gray-300" />
      </div>
      </LayoutContextProvider>
  )
}

export default App
