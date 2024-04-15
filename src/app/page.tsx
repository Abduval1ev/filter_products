import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Hight-quality cotton selection</h1>
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Sort
                <ChevronDown className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">

              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </main >
    </>
  );
}
