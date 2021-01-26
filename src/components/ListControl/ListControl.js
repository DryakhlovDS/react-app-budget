import React from 'react';
import { Button } from 'element-react';
import './ListControl.css';

function ListControl({ sortListBtn }) {
  const classLinks = '';
  function sort(val, e) {
    const links = document.querySelectorAll('.list-control .el-button');
    links.forEach((link) => link.classList.remove('link-active'));
    let linkActive = e.target;
    while (!linkActive.classList.contains('el-button')) {
      linkActive = linkActive.parentElement;
    }
    linkActive.classList.add('link-active');
    sortListBtn(val);
  }
  return (
    <div class='list-control'>
      <Button
        type='text'
        onClick={(e) => sort('all', e)}
        className={['link-active', classLinks].join(' ')}
      >
        Show all
      </Button>
      <Button
        type='text'
        onClick={(e) => sort('Income', e)}
        className={classLinks}
      >
        Show income
      </Button>
      <Button
        type='text'
        onClick={(e) => sort('Outcome', e)}
        className={classLinks}
      >
        Show outcome
      </Button>
    </div>
  );
}

export default ListControl;
