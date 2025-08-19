import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='scene'>
      <h1 className='error404 text-center'>404</h1>
<h2 className='oups text-center'>Oups! La page que vous demandez n'existe pas.</h2>
<Link to='/' className='text-center retourner '>Retourner sur la page d'accueil</Link>
</div>
  );
}
export default NotFound;