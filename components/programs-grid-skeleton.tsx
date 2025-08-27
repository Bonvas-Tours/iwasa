import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProgramsGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <div className="relative">
            <Skeleton className="w-full h-48" />
            <div className="absolute top-4 left-4">
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
            <div className="absolute top-4 right-4">
              <Skeleton className="h-6 w-28 rounded-full" />
            </div>
          </div>
          <CardHeader>
            <div className="flex items-start justify-between">
              <Skeleton className="h-6 w-40" />
              <div className="flex items-center gap-2 ml-2">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-4 w-10" />
                <Skeleton className="h-3 w-8" />
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="flex items-center gap-1">
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <div className="flex flex-wrap gap-1">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-16" />
              </div>
              <Skeleton className="h-10 w-full" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}


