import RecipeCard from "./components/RecipeCard";

const recipes = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    category: "Italian",
    difficulty: "Easy",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 4,
    rating: 4.6,
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
  },
  {
    id: 2,
    title: "Vegetarian Stir-Fry",
    category: "Asian",
    difficulty: "Medium",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: 3,
    rating: 4.7,
    image: "https://cdn.dummyjson.com/recipe-images/2.webp",
  },
  {
    id: 3,
    title: "Chocolate Chip Cookies",
    category: "American",
    difficulty: "Easy",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 24,
    rating: 4.9,
    image: "https://cdn.dummyjson.com/recipe-images/3.webp",
  },
  {
    id: 4,
    title: "Chicken Alfredo Pasta",
    category: "Italian",
    difficulty: "Medium",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: 4,
    rating: 4.9,
    image: "https://cdn.dummyjson.com/recipe-images/4.webp",
  },
  {
    id: 5,
    title: "Mango Salsa Chicken",
    category: "Mexican",
    difficulty: "Easy",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: 3,
    rating: 4.9,
    image: "https://cdn.dummyjson.com/recipe-images/5.webp",
  },
  {
    id: 6,
    title: "Quinoa Salad with Avocado",
    category: "Mediterranean",
    difficulty: "Easy",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 4,
    rating: 4.4,
    image: "https://cdn.dummyjson.com/recipe-images/6.webp",
  },
  {
    id: 8,
    title: "Beef and Broccoli Stir-Fry",
    category: "Asian",
    difficulty: "Medium",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 4,
    rating: 4.7,
    image: "https://cdn.dummyjson.com/recipe-images/8.webp",
  },
];

export default function Home() {
  return (
    <div className="bg-[var(--bg-soft)]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/*her */}
        <section className="mb-7 py-2.5 text-center">
          <p className="text-[var(--text-outside)] mb-4">Tu pagina n1 de cocina</p>
          <h1 className="text-5xl font-bold text-[var(--text-outside)] mb-3 leading-tight">
            Recetas simples para inspirarte todos los dias.
          </h1>
          <p className="text-[var(--text-outside)] max-w-[58ch] mx-auto leading-relaxed">
            Explora los mejores sabores del mundo con nuestras recetas faciles de seguir.
          </p>
        </section>

        {/* recetas*/}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-max">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </section>
      </div>
    </div>
  );
}
