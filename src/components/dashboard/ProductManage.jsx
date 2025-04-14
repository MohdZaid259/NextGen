import { useContext, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Trash2, Plus } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import uploadToCloudinary from '../../lib/uploadImage.js'
import { FirebaseContext } from '../../context/Firebase.jsx'

export default function ProductManagement() {
  const { putProduct, getAllProducts, editProduct, deleteProduct } = useContext(FirebaseContext)

  const [products, setProducts] = useState([])
  const [visibleProducts, setVisibleProducts] = useState(6)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentProduct, setCurrentProduct] = useState(null)
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    image:""
  })

  useEffect(()=>{
    (async () => {
      const res = await getAllProducts()
      console.log(res) // inifinte call??
      setProducts([...res])
    })()
  },[products])

  const handleAddProduct = async () => {
    const imageUrl = await uploadToCloudinary(newProduct.image)
    const productToAdd = { ...newProduct, image: imageUrl }
    
    await putProduct(productToAdd)

    setProducts([...products, productToAdd])
    setNewProduct({ name: "", category: "", price: "", stock: "" , image:""})
    setIsAddDialogOpen(false)
  }

  const handleEditProduct = async () => {
    const id = currentProduct.id
    let updatedImageUrl = currentProduct.image;

    if (currentProduct.image instanceof File) {
      updatedImageUrl = await uploadToCloudinary(currentProduct.image)
    }

    const updatedProduct = { ...currentProduct, image: updatedImageUrl };
    await editProduct(id,updatedProduct)

    setProducts(products.map((product) => (product.id === currentProduct.id ? updatedProduct : product)));
    setIsEditDialogOpen(false);
  }

  const handleDeleteProduct = async (id) => {
    console.log('id',id)
    await deleteProduct(id)
    setProducts(products.filter((product) => product.id !== id));
  }

  const openEditDialog = (product) => {
    setCurrentProduct(product)
    setIsEditDialogOpen(true)
  }

  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 6)
  }

  const handleSeeLess = () => {
    setVisibleProducts(6)
  }

  
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
              <DialogDescription>Fill in the details to add a new product to your inventory.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Product Name</Label>
                <Input
                  id="name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={newProduct.category}
                  onValueChange={(value) => setNewProduct({ ...newProduct, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Soap">Soaps</SelectItem>
                    <SelectItem value="Juices">Juices</SelectItem>
                    <SelectItem value="Oils">Oils</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="stock">Stock</Label>
                <Input
                  id="stock"
                  type="number"
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="image">Product Image</Label>
                <Input
                  id="image"
                  type="file"
                  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.files[0] })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddProduct}>Add Product</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Image</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.length > 0 ? (
              products.slice(0, visibleProducts).map((product,i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>$ {product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    {product.image ? <img src={product.image} alt={product.name} className="h-12 w-12 object-cover rounded-sm" /> : "No Image"}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => openEditDialog(product)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteProduct(product.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4">
                  No products found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex justify-center items-center py-4 gap-4">
          {visibleProducts < products.length && (
            <div className="flex justify-center py-4">
              <Button onClick={handleLoadMore}>Load More</Button>
            </div>
          )}
          {visibleProducts > 10 && (
            <Button variant='outline' onClick={handleSeeLess}>See Less</Button>
          )}
        </div>
      </div>

      {currentProduct && (
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Product</DialogTitle>
              <DialogDescription>Update the product details.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-name">Product Name</Label>
                <Input
                  id="edit-name"
                  value={currentProduct.name}
                  onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-category">Category</Label>
                <Select
                  value={currentProduct.category}
                  onValueChange={(value) => setCurrentProduct({ ...currentProduct, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Soaps">Soaps</SelectItem>
                    <SelectItem value="Juices">Juices</SelectItem>
                    <SelectItem value="Oils">Oils</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-price">Price ($)</Label>
                <Input
                  id="edit-price"
                  type="number"
                  value={currentProduct.price}
                  onChange={(e) => setCurrentProduct({ ...currentProduct, price: Number.parseFloat(e.target.value) })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-stock">Stock</Label>
                <Input
                  id="edit-stock"
                  type="number"
                  value={currentProduct.stock}
                  onChange={(e) => setCurrentProduct({ ...currentProduct, stock: Number.parseInt(e.target.value) })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-image">Product Image</Label>
                <Input
                  id="edit-image"
                  type="file"
                  onChange={(e) => setCurrentProduct({ ...currentProduct, image: e.target.files[0] })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleEditProduct}>Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
