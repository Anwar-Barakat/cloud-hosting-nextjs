
import React from 'react'

interface ArticleDetailProps {
    params: Promise<{
        articleId: string
    }>
}

const ArticleDetail = async ({ params }: ArticleDetailProps) => {
    // Await the params Promise to unwrap the articleId
    const { articleId } = await params;

    return (
        <div>
            <h1>Article Detail</h1>
            <p>Article ID: {articleId}</p>
        </div>
    )
}

export default ArticleDetail;
