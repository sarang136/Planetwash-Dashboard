import { useEffect, useState } from "react"
import { BsHandbag } from "react-icons/bs"
import { HiOutlineShoppingCart } from "react-icons/hi"
import { CiClock2 } from "react-icons/ci"
import { LuUsers } from "react-icons/lu"
import { FiPackage } from "react-icons/fi"

import ChartCards from "../components/ChartCards"
import StatCards from "../components/StatCards"
import OrderTable from "../components/OrderTable"
import ShimmerUiForDashboard from "../../ShimmerUis/ShimmerUiForDashboard"

const Dashboard = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <ShimmerUiForDashboard />
      ) : (
        <div>
          <ChartCards />
          <StatCards />
          <OrderTable />
        </div>
      )}
    </>
  )
}

export default Dashboard
