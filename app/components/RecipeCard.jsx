import Link from 'next/link';
import Image from 'next/image';

//cards
export default function RecipeCard({
  id,
  title,
  category,
  difficulty,
  prepTime,
  cookTime,
  servings,
  rating,
  image,
}) {
  return (
    <Link href={`/recipe/${id}`}>
      <article className="bg-[var(--surface)] border border-[var(--border)] rounded-[18px] overflow-hidden shadow-[var(--shadow)] transition-all duration-200 hover:shadow-[var(--shadow-strong)] hover:-translate-y-1 cursor-pointer h-full">
        <div className="relative w-full h-[180px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="p-4">
          <h2 className="text-[var(--text-inside)] font-bold text-lg mb-2 line-clamp-2 min-h-[48px]">
            {title}
          </h2>
          <p className="text-[var(--text-inside)] text-sm my-1.5">
            {category} | {difficulty}
          </p>
          <p className="text-[var(--text-inside)] text-sm my-1.5">
            Prep: {prepTime} | Cook: {cookTime}
          </p>
          <p className="text-[var(--text-inside)] text-sm my-1.5">
            Servings: {servings} | Rating: {rating}
          </p>
        </div>
      </article>
    </Link>
  );
}
