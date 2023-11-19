import { Button } from "react-bootstrap";

function CategoryFilter({
  categories = ["All", "Orchestral", "World", "Chamber", "Solo", "Arrangement"],
  filter,
  setFilter,
  style,
}) {
  return (
    <div className="category-filter-wrapper" style={style}>
      {categories.map((category) => (
        <Button
          key={category}
          size="sm"
          variant={`${filter === category ? "secondary" : "outline-secondary"}`}
          onClick={() => setFilter(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}

export default CategoryFilter;
