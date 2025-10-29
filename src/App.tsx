import { Button } from "@/components/ui/button"
import { assets } from "./shared/assets/assets"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      <p className="mt-4 text-center text-sm text-muted-foreground">Edit <code>src/App.tsx</code> and save to reload.</p>
      <img src={assets.card1} alt="Logo" className="mt-6 h-24 w-24 " />
    </div>
  )
}

export default App