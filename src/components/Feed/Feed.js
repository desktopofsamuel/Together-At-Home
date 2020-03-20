// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';
import Img from 'gatsby-image';

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__item-meta']}>
           {/* <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
            {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
           </time>
           <span className={styles['feed__item-meta-divider']} />  */}
          <span className={styles['feed__item-meta-category']}>
            <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category} / </Link>
          </span>
          {!!edge.node.frontmatter.socialImage && !!edge.node.frontmatter.socialImage.childImageSharp ? (<Img className={styles['feed__item-meta-thumbnail']} fluid={edge.node.frontmatter.socialImage.childImageSharp.fluid} />
          ) : <span></span>
          }
          <h2 className={styles['feed__item-meta-title']}>
           <a className={styles['feed__item-meta-title-link']} href={`${edge.node.frontmatter.url}?ref=TogetherAtHomeClub`} target="_blank">{edge.node.frontmatter.title}</a>
          </h2>
        </div>
        <div
              className={styles['feed__item-description']}
              dangerouslySetInnerHTML={{
                __html: `${edge.node.html}`
              }}
            />
        <a className={styles['feed__item-readmore']} href={`${edge.node.frontmatter.url}?ref=TogetherAtHomeClub`} target="_blank">
         View More →
        </a>
        <p className={styles['feed__item-deadline']}>{edge.node.frontmatter.deadLine}</p>
      </div>
    ))}
  </div>
);

export default Feed;
