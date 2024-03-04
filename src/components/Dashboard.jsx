import { useNavigate } from "react-router-dom";
import Banner from "./Banner";

function Dashboard({ children }) {
  let collection = [
    { id: 1, name: "Guess", description: "Guess the number between 1 to 5" },
    { id: 2, name: "Quiz", description: "Solve simple math question" },
    { id: 3, name: "Predict", description: "let me predict your birth month" },
  ];

  let navigate = useNavigate();

  let Card = ({ element }) => {
    return (
      <div className="card" onClick={() => navigate(`/${element.name}`)}>
        <h1>{element.name}</h1>
        <p>{element.description}</p>
      </div>
    );
  };

  return (
    <>
      <Banner />
      <div className="collection">
        {collection.map((task) => (
          <Card key={task.id} element={task} />
        ))}
      </div>
      <div className={children && "filter"} />
      {children}
    </>
  );
}
export default Dashboard;
