import { useEffect, useState } from "react"
import { CalendarDays, Mail, Package, ShieldCheck, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useLocalStorage from '../hooks/useLocalStorage';
import { useContext } from 'react';
import { FirebaseContext } from '../context/Firebase';
import { logout } from '../Redux/authSlice';
import { deleteCart } from '../Redux/cartSlice';
import defaultDp from '@/assets/defaultDp.jpg'

const mockUser = {
  auth: "Admin",
  displayName: "Mohd Zaid",
  email: "razvizaid259@example.com",
  joined: "2023-01-15",
  photoURL: "https://lh3.googleusercontent.com/a/ACg8ocK0MjIfDOkJHqnQ97Pi1k7QtgrqawMY6NULw1kJasLS7YuviU0=s96-c",
  uid: "116979052881843192047",
}

function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user,setUser] = useState(mockUser)
  const {removeData:removeAuthData} = useLocalStorage('auth')
  const {removeCartData} = useLocalStorage('localCart')
  const {signOutUser,getCurrentUser} = useContext(FirebaseContext)

  useEffect(()=>{
    getCurrentUser()
      .then((res)=>{
        setUser(res)
      })
  },[])

  function handleLogout(){
    signOutUser()
    removeAuthData()
    removeCartData()
    dispatch(deleteCart())
    dispatch(logout())
    navigate('/')
  }

  return (
    <div className="h-screen flex justify-center items-center p-10 ">
      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background">
                <img src={user?.photoURL || defaultDp} alt={user?.displayName} className="object-cover" />
              </div>
            </div>
            <CardTitle>{user?.displayName}</CardTitle>
            <CardDescription className="flex items-center justify-center gap-1">
              {user?.auth === "Admin" ? (
                <>
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  Administrator
                </>
              ) : (
                <>
                  <User className="h-4 w-4" />
                  Customer
                </>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 opacity-70" />
                <span>{user?.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 opacity-70" />
                <span>Joined {user?.joined}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 opacity-70" />
                <span className="text-sm text-muted-foreground">UID: {user?.uid}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            {user?.auth === "Admin" ? (
              <Button onClick={()=>navigate('/dashboard')} className="w-full">
                <ShieldCheck className="mr-2 h-4 w-4" />
                  Admin Dashboard
              </Button>
            ) : (
              <Button onClick={()=>navigate('/orders')} className="w-full">
                <Package className="mr-2 h-4 w-4" />
                  My Orders
              </Button>
            )}
            <Button variant="outline" onClick={handleLogout} className="w-full">
              Logout
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='text-2xl'>Account Details</CardTitle>
            <CardDescription>Manage your account information and preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p>{user?.displayName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Address</p>
                  <p>{user?.email}</p>
                </div>
              </div>
            </div>

            <Separator/>

            <div>
              <h3 className="font-medium mb-2">Account Status</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Account Type</p>
                  <p>{user?.auth}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Member Since</p>
                  <p>{user?.joined}</p>
                </div>
              </div>
            </div>

            <Separator/>

            <div>
              <h3 className="font-medium mb-2">Recent Activity</h3>
              <p className="text-sm text-muted-foreground">
                {user?.auth === "Admin"
                  ? "You last accessed the admin dashboard 2 days ago"
                  : "You placed an order 5 days ago"}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Profile