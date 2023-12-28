import './App.css'
import Barchart from './components/Barchart'
import ImageTabs from './components/ImageTabs'
import Menubar from './components/Menubar'
import Navbar from './components/Navbar'
import SubNavbar from './components/SubNavbar'
import DashBoardContainer from './container/DashBoardContainer'
import MainListLayout from './layout/MainListLayout'

function App() {


  return (
    <>
      <div
        className="w-full max-h-[60vh] flex flex-row flex-wrap justify-between items-start  "
        style={{ zIndex: 1000 }}
      >
         <Menubar />
           <div className="w-[83%] ml-60  flex flex-col items-center ">
          <Navbar />
          <SubNavbar />
          <ImageTabs />

          <DashBoardContainer />


          <MainListLayout
            title={"Recent Stats"}
            description={"More than 400+ new members"}
            insideContainerDashBoard={false}
          >
            <Barchart />
          </MainListLayout>
        </div>
      </div>

     
    </>
  )
}

export default App
