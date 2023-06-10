import { IMAGE_BASE_URL } from 'services/api';
import { ListActors, Actor } from './ActorsList.styled';

function ActorsList({ cast }) {
  return (
    <ListActors>
      {cast.map(actor => (
        <Actor key={actor.id}>
          <img
            src={`${IMAGE_BASE_URL}${actor.profile_path}`}
            alt={actor.name}
          />
          <p>{`${actor.name}`}</p>
        </Actor>
      ))}
    </ListActors>
  );
}

export default ActorsList;
