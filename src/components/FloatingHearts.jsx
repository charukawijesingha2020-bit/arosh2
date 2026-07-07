export default function FloatingHearts() {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 30 + 10}px`,
            animationDuration: `${Math.random() * 5 + 5}s`,
          }}
        >
          ❤️

          
        </div>
      ))}
    </>
  );
}