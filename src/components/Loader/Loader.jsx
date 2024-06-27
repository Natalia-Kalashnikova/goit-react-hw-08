import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';


const Loader=()=> {
  return (
    <div className={css.loader_wrapper}>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#ffbf47"
        secondaryColor="#ffbf47"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}


export default Loader;