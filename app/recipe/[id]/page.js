import Image from 'next/image';
const recipes = {
  '1': {
    id: 1,
    title: 'Classic Margherita Pizza',
    category: 'Italian',
    difficulty: 'Easy',
    prepTime: '20 min',
    cookTime: '15 min',
    servings: 4,
    rating: 4.6,
    image: 'https://cdn.dummyjson.com/recipe-images/1.webp',
    description:
      'Una receta clasica y simple, con masa de pizza, salsa de tomate, mozzarella fresca, hojas de albahaca y un toque de aceite de oliva.',
    ingredients: [
      'Pizza dough',
      'Tomato sauce',
      'Fresh mozzarella cheese',
      'Fresh basil leaves',
      'Olive oil',
      'Salt and pepper to taste',
    ],
    instructions: [
      'Preheat the oven to 475F (245C).',
      'Roll out the pizza dough and spread tomato sauce evenly.',
      'Top with slices of fresh mozzarella and fresh basil leaves.',
      'Drizzle with olive oil and season with salt and pepper.',
      'Bake for 12 to 15 minutes or until the crust is golden brown.',
      'Slice and serve hot.',
    ],
    calories: 300,
    reviews: 98,
    mealType: 'Dinner',
    tags: ['Pizza', 'Italian'],
  },
};

export default async function RecipeDetailPage({ params }) {
  const { id } = await params;
  const recipe = recipes[id] || recipes['1'];

  return (
    <div className="bg-[var(--bg-soft)]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Recipe Header */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Image */}
          <div className="relative w-full h-[360px]">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover rounded-[18px] shadow-[var(--shadow)]"
              priority
            />
          </div>

          {/* inforecetas */}
          <div className="bg-[var(--surface-strong)] border border-[var(--border)] rounded-[18px] p-6 shadow-[var(--shadow)] text-[var(--text-inside)]">
            <div className="mb-4">
              <span className="inline-block mr-2 mb-2 px-3 py-1.5 bg-[#f2e7ca] text-[var(--text-outside)] rounded-full text-xs font-bold">
                {recipe.category}
              </span>
              <span className="inline-block mr-2 mb-2 px-3 py-1.5 bg-[#f2e7ca] text-[var(--text-outside)] rounded-full text-xs font-bold">
                {recipe.difficulty}
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-3 leading-tight text-[var(--text-inside)]">
              {recipe.title}
            </h1>

            <p className="mb-4 leading-relaxed text-[var(--text-inside)]">{recipe.description}</p>

            {/* Details Grid */}
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-[var(--surface-strong)] border border-[var(--border)] rounded-[16px] p-3.5 text-center shadow-[var(--shadow)]">
                <strong className="block text-sm mb-1.5 text-[var(--text-inside)]">Prep</strong>
                <span className="text-sm text-[var(--text-inside)]">{recipe.prepTime}</span>
              </div>
              <div className="bg-[var(--surface-strong)] border border-[var(--border)] rounded-[16px] p-3.5 text-center shadow-[var(--shadow)]">
                <strong className="block text-sm mb-1.5 text-[var(--text-inside)]">Cook</strong>
                <span className="text-sm text-[var(--text-inside)]">{recipe.cookTime}</span>
              </div>
              <div className="bg-[var(--surface-strong)] border border-[var(--border)] rounded-[16px] p-3.5 text-center shadow-[var(--shadow)]">
                <strong className="block text-sm mb-1.5 text-[var(--text-inside)]">Servings</strong>
                <span className="text-sm text-[var(--text-inside)]">{recipe.servings}</span>
              </div>
              <div className="bg-[var(--surface-strong)] border border-[var(--border)] rounded-[16px] p-3.5 text-center shadow-[var(--shadow)]">
                <strong className="block text-sm mb-1.5 text-[var(--text-inside)]">Rating</strong>
                <span className="text-sm text-[var(--text-inside)]">{recipe.rating}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <article className="bg-[var(--surface-strong)] border border-[var(--border)] rounded-[16px] p-5.5 shadow-[var(--shadow)] text-[var(--text-inside)]">
            <h2 className="text-2xl font-bold mb-4 mt-0 text-[var(--text-inside)]">Ingredients</h2>
            <ul className="m-0 pl-5 text-[var(--text-inside)] leading-[1.8]">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </article>

          <article className="bg-[var(--surface-strong)] border border-[var(--border)] rounded-[16px] p-5.5 shadow-[var(--shadow)] text-[var(--text-inside)]">
            <h2 className="text-2xl font-bold mb-4 mt-0 text-[var(--text-inside)]">Instructions</h2>
            <ol className="m-0 pl-5 text-[var(--text-inside)] leading-[1.8]">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </article>
        </section>

        <section className="bg-[var(--surface-strong)] border border-[var(--border)] rounded-[16px] p-5.5 shadow-[var(--shadow)] text-[var(--text-inside)]">
          <h2 className="text-2xl font-bold mb-4 mt-0 text-[var(--text-inside)]">Extra info</h2>
          <div className="space-y-2">
            <p className="mb-2.5">
              <strong className="text-[var(--text-inside)]">Calories per serving:</strong>{' '}
              {recipe.calories}
            </p>
            <p className="mb-2.5">
              <strong className="text-[var(--text-inside)]">Review count:</strong> {recipe.reviews}
            </p>
            <p className="mb-2.5">
              <strong className="text-[var(--text-inside)]">Meal type:</strong> {recipe.mealType}
            </p>
            <p className="mb-2.5">
              <strong className="text-[var(--text-inside)]">Tags:</strong>{' '}
              {recipe.tags.join(', ')}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
