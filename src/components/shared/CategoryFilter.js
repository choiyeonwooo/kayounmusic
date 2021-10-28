import React from "react";
import { Button } from "react-bootstrap";

function CategoryFilter({ filter, setFilter }) {
  const categories = ["All", "Orchestral", "World", "Chamber", "Solo"];
  return (
    <div className="category-filter-wrapper">
      {categories.map((category) => (
        <Button
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
