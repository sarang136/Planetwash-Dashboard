import { BsHandbag } from "react-icons/bs"
import { HiOutlineShoppingCart } from "react-icons/hi"
import { CiClock2 } from "react-icons/ci"
import { LuUsers } from "react-icons/lu"
import ChartCards from "../components/ChartCards"
import StatCards from "../components/StatCards"
import OrderTable from "../components/OrderTable"
import { FiPackage } from "react-icons/fi"

const Dashboard = () => {
    

    return <>
        <div className="">
            <ChartCards/>
            <StatCards/>
            <OrderTable/>
        </div>



    </>
}

export default Dashboard