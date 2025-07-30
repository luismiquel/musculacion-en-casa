import { useParams } from 'react-router-dom';

const MuscleGroup = () => {
  const { group } = useParams();

  return (
    <div className="page">
      <h1>Ejercicios para {group.charAt(0).toUpperCase() + group.slice(1)}</h1>
      <p>(Aquí se mostrarán los ejercicios específicos para {group})</p>
    </div>
  );
};

export default MuscleGroup;
