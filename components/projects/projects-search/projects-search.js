import {useRef} from 'react';
import Button from '../../ui/button';
import classes from './projects-search.module.css';

function ProjectSearch({onSearch}) {
  const typeInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const selectedType = typeInputRef.current.value;

    onSearch(selectedType);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='type'>Project</label>
          <select id='type' ref={typeInputRef}>
            <option value='react'>React</option>
            <option value='e-commerce'>E-Commerce</option>
            <option value='blog'>Blog</option>
          </select>
        </div>
      </div>
      <Button>Find Projects</Button>
    </form>
  );
}

export default ProjectSearch;
