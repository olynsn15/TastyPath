function RecipeCard({ recipe }) {
  function onFavoriteClick() {
    alert("clicked");
  }

  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={recipe.url} alt={recipe.name} />
        <div className="recipe-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="recipe-info"></div>
    </div>
  );
}
