// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { useCategoriesList } from '../../hooks';
import styles from './CategoryList.module.scss';

const CategoryList = () => {
  const categories = useCategoriesList();

  return (
    <ul className={styles['list']}>
          {categories.map((category) => (
            <li key={category.fieldValue}>
              <Link className={styles['list__item']} to={`/category/${kebabCase(category.fieldValue)}/`}>
                {category.fieldValue}
                {/* ({category.totalCount}) */}
              </Link>
            </li>
          ))}
        </ul>
  );
};

export default CategoryList;
