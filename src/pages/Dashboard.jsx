import { useState } from "react"
import DashboardOverview from '../components/dashboard/Overview.jsx'
import ProductManagement from '../components/dashboard/ProductManage.jsx'
import UserManagement from '../components/dashboard/UserManage.jsx'
import DashboardSidebar from '../components/dashboard/Sidebar.jsx'
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
const isDesktop=true

const renderContent = () => {
  switch (activeTab) {
    case "overview":
      return <DashboardOverview />
    case "products":
      return <ProductManagement />
    case "users":
      return <UserManagement />
    default:
      return <DashboardOverview />
  }
}

  return (
    <div className="flex min-h-screen bg-background mt-[60px]">
      {isDesktop ? (
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      ) : (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="fixed top-4 left-4 z-40">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </SheetContent>
        </Sheet>
      )}

      <div className="flex-1 p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Manage your store and monitor performance</p>
        </div>

        {renderContent()}
      </div>
    </div>
  )
}
