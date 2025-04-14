import { Home, Package, Users, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { logout } from '../../Redux/authSlice.js'
import { useDispatch } from 'react-redux';

export default function DashboardSidebar({ activeTab, setActiveTab }) {
  const dispatch = useDispatch()

  const menuItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "products", label: "Products", icon: Package },
    { id: "users", label: "Users", icon: Users }
  ]

  return (
    <div className="w-64 border-r bg-background h-screen flex flex-col">
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
                className="w-full justify-start"
                onClick={() => setActiveTab(item.id)}
              >
                <Icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            )
          })}
        </nav>
      </div>
      <div className="p-4 border-t">
        <Button variant="destructive" className="w-full justify-start">
          <LogOut onClick={()=>dispatch(logout)} className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}
