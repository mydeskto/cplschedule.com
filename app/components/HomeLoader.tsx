import { Loader2 } from "lucide-react"

export const HomeLoader = () => {
  return (
    <div className="bg-[#122754] min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="w-12 h-12 text-white animate-spin" />
        
      </div>
    </div>
  )
}


