import Link from "next/link";

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
    <Link
      href={`/courses/${id}`}
      className="block rounded-lg border border-gray-200 p-4 hover:shadow-md transition"
    >
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-gray-600 mb-3">{description}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <span>{credits} credits</span>
        <span>❤ {likes}</span>
      </div>
    </Link>
  );
}