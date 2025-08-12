import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='scene'>
      <h1 className='error404'>404</h1>
<h2 className='oups'>Oups! La page que vous demander n'existe pas.</h2>
<Link to='/' className='retourner'>Retourner sur la page d'accueil</Link>
</div>
  );
}
export default NotFound;