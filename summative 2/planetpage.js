const questions = document.querySelectorAll('.question');
questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling; // gets the answer dropdown that is right after the question in the HTML
        question.classList.toggle('open'); // toggles the open class on the question to change its background color
        const chevron = question.querySelector('.chevron');
        chevron.classList.toggle('open');
        answer.classList.toggle('open'); // toggles the open class on the answer to show or hide it
    });
});