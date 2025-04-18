import { Home, Package, Users, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useContext } from 'react';
import { FirebaseContext } from '../../context/Firebase';
import { logout } from '../../Redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { deleteCart } from '../../Redux/cartSlice';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useDispatch } from 'react-redux';

export default function DashboardSidebar({ activeTab, setActiveTab }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {removeData:removeAuthData} = useLocalStorage('auth')
  const {removeCartData} = useLocalStorage('localCart')
  const {signOutUser} = useContext(FirebaseContext)

  const menuItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "products", label: "Products", icon: Package },
    { id: "users", label: "Users", icon: Users }
  ]

  function handleLogout(){
      signOutUser()
      removeAuthData()
      removeCartData()
      dispatch(deleteCart())
      dispatch(logout())
      navigate('/')
    }

  return (
    <div className="w-32 sm:w-52 border-r bg-background h-screen flex flex-col">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold">Store Admin</h2>
      </div>
      <div className="flex-1 py-4">
        <nav className="space-y-1 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "secondary" : "ghost"}
                className="w-full justify-start pl-0 sm:pl-4 "
                onClick={() => setActiveTab(item.id)}
              >
                <Icon className="mr-0 sm:mr-2 h-4 w-4" />
                {item.label}
              </Button>
            )
          })}
        </nav>
      </div>
      <div className="p-2 sm:p-4 border-t">
        <Button variant="destructive" onClick={handleLogout} className="w-full justify-start">
          <LogOut className="mr-0 sm:mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}
