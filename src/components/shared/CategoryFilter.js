import React from "react";
import { Button } from "react-bootstrap";

function CategoryFilter({ filter, setFilter }) {
  return (
    <div className="category-filter-wrapper">
      <Button
        size="sm"
        variant={`${filter === "All" ? "secondary" : "outline-secondary"}`}
        onClick={() => setFilter("All")}
      >
        All
      </Button>
      <Button
        size="sm"
        variant={`${filter === "Orchestral" ? "secondary" : "outline-secondary"}`}
        onClick={() => setFilter("Orchestral")}
      >
        Orchestral
      </Button>
      <Button
        size="sm"
        variant={`${filter === "World" ? "secondary" : "outline-secondary"}`}
        onClick={() => setFilter("World")}
      >
        World
      </Button>
      <Button
        size="sm"
        variant={`${filter === "Chamber" ? "secondary" : "outline-secondary"}`}
        onClick={() => setFilter("Chamber")}
      >
        Chamber
      </Button>
      <Button
        size="sm"
        variant={`${filter === "Solo" ? "secondary" : "outline-secondary"}`}
        onClick={() => setFilter("Solo")}
      >
        Solo
      </Button>
    </div>
  );
}

export default CategoryFilter;
