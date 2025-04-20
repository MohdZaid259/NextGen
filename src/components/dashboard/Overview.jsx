import { useContext, useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, ShoppingCart, DollarSign } from "lucide-react"
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import { FirebaseContext } from '../../context/Firebase.jsx'

const salesData = [
  { name: "Jan", sales: 2000 },
  { name: "Feb", sales: 1000 },
  { name: "Mar", sales: 3000 },
  { name: "Apr", sales: 2500 },
  { name: "May", sales: 2000 },
  { name: "Jun", sales: 3500 },
  { name: "Jul", sales: 2200 },
  { name: "Aug", sales: 4000 }
]

const userActivityData = [
  { name: "Mon", visits: 10, orders: 3 },
  { name: "Tue", visits: 20, orders: 5 },
  { name: "Wed", visits: 30, orders: 9 },
  { name: "Thu", visits: 25, orders: 7 },
  { name: "Fri", visits: 30, orders: 12 },
  { name: "Sat", visits: 40, orders: 15 },
  { name: "Sun", visits: 20, orders: 6 },
]

function DashboardOverview() {
  const { getAllUsers, getAllOrders } = useContext(FirebaseContext)
  const [ data, setData ] = useState({
    totalUsers:0,
    totalOrders:0
  }) 

  useEffect(()=>{
    (async ()=>{
      const allOrders = await getAllOrders()
      const allUsers = await getAllUsers()

      setData({ totalUsers: allUsers.length,
                totalOrders:allOrders.length
              })
    })()
  },[])

  return (
    <div className="space-y-6">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:mr-10">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold">$5,231.89</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
            <Users className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold">850+</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold">1,234+</div>
          </CardContent>
        </Card>
      </div>

      <div className="hidden sm:grid gap-4 grid-cols-1 lg:grid-cols-2 lg:mr-10">
        <Card>
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
            <CardDescription>Monthly sales performance</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
            <CardDescription>Weekly site visits and orders</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={userActivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="visits" fill="#8884d8" />
                <Bar dataKey="orders" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DashboardOverview