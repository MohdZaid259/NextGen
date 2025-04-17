import { useEffect, useState, useContext } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FirebaseContext } from '../context/Firebase';

const orderList = [
  {
    OrderID: "order_Kp8RbNzWx6UEd",
    Status: "Processing",
    Timestamp: 1713168311,
    TotalAmount: 24.99,
    UserID: "cust_QjT4dGqBvTiGTx",
  }
]

function Orders() {
  const [orders,setOrders] = useState(orderList)
  const { getAllOrders,cancelOrder } = useContext(FirebaseContext)

  useEffect(()=>{
    (async () => {
      const res = await getAllOrders()
      const newOrders = res.filter(
        newOrder => !orders.some(existingOrder => existingOrder.OrderID === newOrder.OrderID)
      );
      setOrders(prevOrders=>[...prevOrders,...newOrders])
    })()
  },[])

  async function handleCancelOrder(id){
    setOrders(orders.filter((item) => item.OrderID !== id));
    await cancelOrder(id)
  }

  return (
    <div className="w-1/2 mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      <div className="grid gap-6">
        {orders.map((item,i) => (
          <Card key={i}>
            <CardHeader className="relative flex flex-row items-start justify-between pb-2">
              <div>
                <CardTitle className="text-lg">{item.OrderID}</CardTitle>
                <CardDescription>
                  {new Date(item.Timestamp * 1000).toLocaleDateString()}
                </CardDescription>
              </div>
              <div className="absolute flex flex-col gap-10 right-4 ">
                <Badge className="ml-auto">
                  {item.Status}
                </Badge>
                {!(item.Status=='Delivered') && (
                  <Button variant="destructive" onClick={() => handleCancelOrder(item.OrderID)} className="text-xs w-full py-0 px-2 sm:w-auto">
                    Cancel Order
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Amount</p>
                  <p className="text-lg font-semibold">${item.TotalAmount}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Customer ID</p>
                  <p className="text-sm font-mono truncate">{item.UserID}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Orders