import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

//.mdxファイルを格納するディレクトリを取得
const postsDirectory = path.join(process.cwd(), "posts");

// 日付が新しい順で .mdxファイル（記事）を一括取得
export const getStoredPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  //日付のソーティング
  return allPostsData.sort((dateA, dateB) => {
    if (dateA < dateB) {
      return 1;
    } else if (dateA > dateB) {
      return -1;
    } else {
      return 0;
    }
  });
};

//getStaticPaths用に、記事のファイル名を取得・整形
export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
};

/**
 *
 * @param id
 * @returns
 */
export const getPostData = async (id) => {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);

  return {
    id,
    source: mdxSource,
    frontMatter: data,
  };
};
