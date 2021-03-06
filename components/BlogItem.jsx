import { Component } from "react";
import Link from "next/link";
import GraphImg from "graphcms-image";
import { dmukhovskyy_en } from "../localization/content.json";
import Button from "./Button";

const { itemButton, read } = dmukhovskyy_en.blog;

export default class BlogItem extends Component {
  render() {
    const {
      id,
      postThumbnail,
      postTitle,
      readtime,
      postType
    } = this.props.blogData;

    return (
      <div className={`blog-item item__${id}`}>
        <div className={`collapsible-header blog-item__header`}>
          <GraphImg
            className="blog-item__icon"
            image={postThumbnail}
            maxWidth={150}
          />
          <div className="blog-item__wrapper">
            <div className="blog-item__description">
              <span className="blog-item__description__title">{postTitle}</span>
              <span className="blog-item__description__readTime">
                {readtime} {read}
              </span>
            </div>
            <Link passHref replace href={`/blogPost/${id}`}>
              <a>
                <Button text={itemButton} type="button" />
              </a>
            </Link>
          </div>
          <div className={`blog-item__type ${postType}`} />
        </div>
      </div>
    );
  }
}
