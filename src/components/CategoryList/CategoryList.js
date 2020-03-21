// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { useCategoriesList } from '../../hooks';
import styles from './CategoryList.module.scss';

const CategoryList = () => {
  const categories = useCategoriesList();

  return (
    <div className={styles['list']}>
          {categories.map((category) => (

              <Link className={styles['list__item']} key={category.fieldValue} to={`/category/${kebabCase(category.fieldValue)}/`}>
                {category.fieldValue}
                {/* ({category.totalCount}) */}
              </Link>
          ))}
        </div>
  );
};

export default CategoryList;
