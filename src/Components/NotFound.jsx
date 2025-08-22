import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='scene'>
      <h1 className='error404 text-center'>404</h1>
<h2 className='oups text-center'>Oups! La page que vous demandez n'existe pas.</h2>
<div className='text-center'>
<Link to='/'>Retourner sur la <span className='text-amber-600'>page d'accueil</span></Link>
</div>
</div>
  );
}
export default NotFound;