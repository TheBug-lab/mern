function Collections({ handleSubmit }) {
  let tasks = [
    { id: 1, name: "Guess", description: "Guess the number between 1 to 5" },
    { id: 2, name: "Quiz", description: "Solve simple math question" },
    { id: 3, name: "Predict", description: "let me predict your birth month" },
  ];

  let Card = ({ element }) => {
    return (
      <div className="card" onClick={() => handleSubmit(element)}>
        <h1>{element.name}</h1>
        <p>{element.description}</p>
      </div>
    );
  };

  return (
    <div className="collection">
      {tasks.map((e) => (
        <Card key={e.id} element={e} />
      ))}
    </div>
  );
}
export default Collections;
