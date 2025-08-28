
import Image from "next/image";
import { Star } from "lucide-react"; 
import { Card } from "./ui/card";

type TestimonialCardProps = {
  testimonial: {
    name: string;
    role: string;
    program: string;
    image: string;
    rating: number;
    text: string;
  };
  serviceType?: "consultation" | "application-support" | "career-coaching" | "destination-support" | "visa-immigration" | "support"; 
};

const serviceColors = {
  consultation: "text-blue-600",
  "application-support" : "text-green-600",
  "career-coaching": "text-orange-600",
  "destination-support": "text-teal-600",
  "visa-immigration": "text-purple-600",
  support: "text-orange-600",
  default: "text-blue-600",
};

export function TestimonialCard({ testimonial, serviceType = "consultation" }: TestimonialCardProps) {
  const programColor = serviceColors[serviceType] || serviceColors.default;

  return (
    <Card className="p-6">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative h-[60px] w-[60px]">
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
            <p className={`text-sm ${programColor}`}>{testimonial.program}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 mb-3">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
      <p className="text-gray-700 italic">&quot;{testimonial.text}&quot;</p>
    </Card>
  );
}