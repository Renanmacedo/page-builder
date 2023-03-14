import { Sidebar, SidebarItem }  from './components/sidebar'
import { CounterButton } from '@aquinoconsultoria/storefront'
function App() {
  return (
    <div className="h-screen w-screen bg-amber-50 flex">
      <Sidebar>
        <SidebarItem />

      </Sidebar>
      <div className="w-screen h-full p-2">

        <CounterButton 
        label="This is a button"
        style={{ 
          outline: 0, border: '1px solid #24b5d0', 
          backgroundColor: '#24b5d0', 
          color: '#fff',
          fontSize: '16px',
          borderRadius:'4px',
          padding: '10px',
          lineHeight: '1.5em',
        }} 
        ></CounterButton>
      </div>
    </div>
  )
}

export default App
