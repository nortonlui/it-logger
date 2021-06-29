import React from 'react';
import TechItem from './TechItem';

const TechListModal = () => {
  const [techs, setTechs] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch('/techs');
    const json = await res.json();
    setTechs(json);
    setLoading(false);
  };

  React.useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
