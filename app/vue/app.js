/* global Vue axios */ //> from vue.html
const $ = sel => document.querySelector(sel)
const GET = (url) => axios.get('/browse' + url)
const POST = (cmd, data) => axios.post('/browse' + cmd, data)

const faq = new Vue({

    el: '#app',

    data: {
        questions: [],
        question: undefined,
        order: {amount: 1, succeeded: '', failed: ''}
    },

    methods: {

        search: ({target: {value: v}}) => faq.fetch(v && '&$search=' + v),

        async fetch(etc = '') {
            const {data} = await GET(`/ListOfQuestions?$filter=released eq true&$expand=category${etc}`)
            faq.questions = data.value
        },

        async inspect(event) {
            faq.question = faq.questions[event.currentTarget.rowIndex - 1]
            //const res = await GET(`/ListOfQuestions/${question.ID}?$select=question,answer&$expand=category`)
            //Object.assign(question, res.data)
        }
    }
})

// initially fill list of questions
faq.fetch()