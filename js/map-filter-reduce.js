//nailla js IIFE (Immediately invoked function expression)
// Acts as a "main method" for the script, and is executed immediately
(() => {

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];
    // question 1 done ==================================================
    // question 2 done
    const filteredUsers = users.filter(user => user.languages.length === 3);
    console.log(filteredUsers);


    // Question 3 done ==================================================
    const emailAddresses = users.map(user => user.email);
    console.log(emailAddresses);


    // Question 4 done ==================================================
    // Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

    // this will grab us the total years of experience from the users array
    const totalYearsExperience = users.reduce((accumulator, user) => {

        return accumulator + user.yearsOfExperience;
    }, 0);
    console.log(totalYearsExperience);

    const averageYearsExperience = totalYearsExperience / users.length;

    console.log(averageYearsExperience);


    // Question 5 =========================================================

    // console.log(totalYearsExperience);
    const longestEmail = users.reduce((longest, user) => {
        if (user.email.length > longest.length) {
            return user.email;
        } else {
            return longest;
        }
    }, '');

    console.log(longestEmail);


    // Question 6 =========================================================
    // Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

    const namesString = users.reduce((accumulator, user) => {
        if (accumulator === '') {
            return user.name;
        } else {
            return `${accumulator}, ${user.name}`;
        }
    }, '');

    console.log(`Your instructors are: ${namesString}`);

    // Bonus =================================================================

    const languageList = users.reduce((accumulator, string, index) => {
        if (accumulator === '') {
            return user.languages[i];

        }
    })



})();