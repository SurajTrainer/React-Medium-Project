import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Fetchitem from "../components/FetchItem"
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";


function App() {

  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header/>
      <Fetchitem/>  
      {fetchStatus.currentFetching ? <LoadingSpinner/> : <Outlet/>}
      <Footer/>
    </>
  )
}

export default App
