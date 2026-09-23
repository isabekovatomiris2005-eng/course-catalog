import { notFound } from "next/navigation";
import { getCourse, getCourses } from "@/lib/courses";
import LikeButton from "@/components/LikeButton";

type CoursePageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({ id: course.id }));
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 dark:text-white">{course.title}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        {course.credits} credits · {course.isElective ? "Elective" : "Core"}
      </p>
      <LikeButton initialLikes={course.likes} />
    </main>
  );
}