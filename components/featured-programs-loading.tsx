import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ProgramsGridSkeleton from "@/components/programs-grid-skeleton"

export default function FeaturedProgramsLoading() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Featured Programs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular international opportunities designed to transform your career.
          </p>
        </div>
        <ProgramsGridSkeleton count={3} />
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/programs">
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
