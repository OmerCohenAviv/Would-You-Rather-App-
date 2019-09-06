
export const updateObject = (old, updated) => {
    return {
        ...old,
        ...updated
    };
}

export const setQuestions = (currentUserAnswer, allQuestions) => {
    let notAnsweredQuestions = []
    let answeredQuestionsUser = []
    const answeredQuestions = Object.keys(currentUserAnswer);
    notAnsweredQuestions = allQuestions.filter(question => {
        let returnedValue = false
        for (let answer of answeredQuestions) {
            if (answer === question.id) {
                answeredQuestionsUser.push(question)
                returnedValue = true
                break;
            }
        }
        return !returnedValue;
    });
    return {
        notAnsweredQuestions: notAnsweredQuestions,
        answeredQuestionsUser: answeredQuestionsUser
    };
};