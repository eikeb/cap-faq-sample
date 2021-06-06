using { sample.faq as my } from '../db/schema';

service FaqService @(path:'/browse') {

    /** Expose the list of categories */
    @readonly entity ListOfCategories as projection on my.Categories;

    /** Expose the list of Questions */
    @readonly entity ListOfQuestions as projection on my.Questions {
        *,
        category.name as categoryName
    } excluding { createdBy, modifiedBy };
}