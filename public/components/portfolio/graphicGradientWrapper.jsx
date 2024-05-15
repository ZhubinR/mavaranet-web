const GraphicGradientWrapper = ({ colors }) => {
  // Check if colors prop is defined and is an array
  if (!colors || !Array.isArray(colors) || colors.length === 0) {
    // Handle the case where colors is undefined, not an array, or empty
    return null; // or display an error message, return a default value, etc.
  }

  // Convert objects to strings and return an array of strings
  const arrayColor = colors.map(obj => obj.color);

  // Construct linear gradient string using the stringified colors
  const linearGradient = `linear-gradient(to right, ${arrayColor.join(', ')})`;

  return (
    <div className="gradient-box">
      <div className="gradient" style={{ background: linearGradient }}></div>
    </div>
  );
};

export default GraphicGradientWrapper;
