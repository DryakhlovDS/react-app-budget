import React from 'react';
import { Button } from 'element-react';
import './ListControl.css';

function ListControl() {
  const classLinks = '';
  return (
    <div class='list-control'>
      <Button type='text' className={['link-active', classLinks].join(' ')}>
        Show all
      </Button>
      <Button type='text' className={classLinks}>
        Show income
      </Button>
      <Button type='text' className={classLinks}>
        Show outcome
      </Button>
    </div>
  );
}

export default ListControl;
