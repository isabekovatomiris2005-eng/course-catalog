import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className="block h-full">
      <Card className="hover:shadow-md hover:border-blue-300 transition h-full dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:border-blue-500 dark:hover:shadow-lg dark:hover:shadow-blue-500/20">
        <CardHeader>
          <CardTitle className="text-lg dark:text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
          <div className="flex items-center justify-between mt-auto pt-2">
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              {credits} credits
            </span>
            <Button variant="ghost" size="sm" className="text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300">
              ❤ {likes}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}