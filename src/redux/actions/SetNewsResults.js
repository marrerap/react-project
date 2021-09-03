export const SET_NEWS_RESULTS = 'SET_NEWS_RESULTS'

export function actionSetNewsResults(article) {
    return {
        type: SET_NEWS_RESULTS,
        article: article
    }
}

