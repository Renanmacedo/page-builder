import PageBuilder from './components/PageBuilder/PageBuilder';
import { Sidebar }  from './components/Sidebar';
import * as Tabs from './components/Tabs';
import LayoutContextProvider from './context/LayoutContext';

function App() {
  return (
    <LayoutContextProvider>
        <div className="h-screen w-screen flex ">
        <Sidebar>
          <Tabs.Root className="border border-solid border-transparent rounded-tl-md rounded-tr-md flex flex-col w-[300px] shadow-[0_2px_10px]" defaultValue="tab-1">
            <Tabs.List className="shrink-0 flex border-b border-mauve6 ">
              <Tabs.ListHeader className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11  rounded-tl-md rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default" value="tab-1"> 
                Tab 1
              </Tabs.ListHeader>
              <Tabs.ListHeader className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default" value="tab-2"> Tab 2</Tabs.ListHeader>
              <Tabs.ListHeader className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default" value="tab-3"> Tab 3</Tabs.ListHeader>
            </Tabs.List>
            <Tabs.Content value="tab-1">
              Content for tab 1
            </Tabs.Content>
            <Tabs.Content value="tab-2">
              Content for tab 2
            </Tabs.Content>
            <Tabs.Content value="tab-3">
              Content for tab 3
            </Tabs.Content>
          </Tabs.Root>
        </Sidebar>
        <PageBuilder />
      </div>
      </LayoutContextProvider>
  )
}

export default App
