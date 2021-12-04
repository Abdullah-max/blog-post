import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

const postDirectory = path.join(process.cwd(), 'posts')
console.log(postDirectory)
export function getStoredPostsData() {
    // get file name under /posts

    const filenames = fs.readdirSync(postDirectory);
    const allPostsData = filenames.map(filename => {
        // remove '.md' from file name to get id
        const id = filename.replace(/\.md$/, '')

        // read markdown file as string
        const fullPath = path.join(postDirectory, filename)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // use gray-matter to porse the post metadata section
        const matterResult = matter(fileContents)

        // combine the data with the id

        return {
            id,
            ...matterResult.data
        }
    })
    // sort posts by date
    return allPostsData.sort(({ date: a }, { date: b }) => {
        if(a>b){
            return 1
        }else{
            return 0
        }
    })
}

export function getAllPostIds(){
    const fileNames = fs.readdirSync(postDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostData(id){
    const fullPath = path.join(postDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}