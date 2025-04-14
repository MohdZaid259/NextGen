import { useContext, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Mail } from "lucide-react"
import { FirebaseContext } from '../../context/Firebase.jsx'

export default function UserManagement() {
  const { getAllUsers } = useContext(FirebaseContext)

  //dummy users
  const value =[
    {
      displayName:'Mohd Anas',
      email:'anasChamp33@gmail.com',
      orders:1,
      phoneNumber:9382342324,
      photoURL:'https://res.cloudinary.com/dvk25m4cm/image/upload/v1744607170/nextgen/xearsn74umzquiayhdvb.jpg',
      joined:'13-8-2024'
    },
    {
      displayName:'Mohit bhatt',
      email:'mohitbhatt@gmail.com',
      orders:3,
      phoneNumber:7382343214,
      photoURL:'https://res.cloudinary.com/dvk25m4cm/image/upload/v1744607341/nextgen/rwuc7ppnkeidxacxboz9.png',
      joined:'28-9-2024'
    }
  ]
  const [users, setUsers] = useState(value)

  useEffect(()=>{
    (async () => {
      const res = await getAllUsers()
      const newUsers = res.filter(
        newUser => !users.some(existingUser => existingUser.photoURL === newUser.photoURL)
      );
      setUsers(prevUsers=>[...prevUsers,...newUsers])
    })()
  },[])


  const handleContactUser = (email) => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
    window.open(gmailUrl, '_blank');
  }

  return (
    <div className="space-y-4">
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Avatar</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead className="text-right">Send Mail</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length > 0 ? (
              users.map((user,i) => (
                <TableRow key={i}>
                  <TableCell>
                  {user.photoURL ? <img src={user.photoURL} alt={user.name} className="h-12 w-12 object-cover rounded-sm" /> : "No Avatar"}
                  </TableCell>
                  <TableCell className="font-medium">{user.displayName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.orders}</TableCell>
                  <TableCell>{user.joined}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => handleContactUser(user.email)}>
                      <Mail className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4">
                  No users found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}