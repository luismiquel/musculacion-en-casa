import { Link } from 'react-router-dom';

const groups = ['Pecho', 'Espalda', 'Piernas', 'Hombros', 'Brazos', 'Core'];

const Home = () => {
  return (
    <div className="page">
      <h1>Ejercicios por Grupo Muscular</h1>
      <ul>
        {groups.map(group => (
          <li key={group}>
            <Link to={`/muscle/${group.toLowerCase()}`}>{group}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
