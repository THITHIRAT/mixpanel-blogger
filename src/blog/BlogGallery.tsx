import React, { useEffect, useState } from "react";

import { format } from "date-fns";
import Link from "next/link";

import { Pagination, IPaginationProps } from "../pagination/Pagination";
import { PostItems } from "../utils/Content";

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => {
  const [contentType, setContentType] = React.useState<string>("");
  const [list, setList] = useState<PostItems[]>(props.posts);
  let url = ''
  if (typeof window !== "undefined") {
    url = window?.location?.search;
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(url);
    const getContentType = urlParams.get("content_type");
    setContentType(getContentType ?? "");
  }, [url]);

  useEffect(() => {
    if (contentType !== "") {
      let postsItem = props.posts.filter((elt) => elt.ctype.toLowerCase() === contentType);
      setList(postsItem)
    } else {
      setList(props.posts)
    }
  }, [contentType])
  return (
    <>
      <ul>
        {list?.map((elt) => (
          <li key={elt.slug} className="mb-3 pb-3 flex justify-between border-b border-[#E4E4E4]">
            <div>
              <h2 className="font-bold">{elt.title}</h2>
              <p className="w-3/4">{elt.description}</p>
            </div>

            <div className="flex flex-col justify-between text-right whitespace-pre">
              {format(new Date(elt.date), "LLL d, yyyy")}
              <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
                <a className="text-[#121316] cursor-pointer">Read More</a>
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <Pagination
        previous={props.pagination.previous}
        next={props.pagination.next}
      />
    </>
  );
};

export { BlogGallery };
