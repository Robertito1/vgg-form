function display() {
var color = ["blue", "green", "red", "orange", "violet", "indigo", "yellow"];
var o = ["th", "st", "nd", "rd"];
var text = "choice is" ;
 for (i =1, num = color.length , aff = o.length ;i < 4 ; i++){
  console.log(i + o[i]+ " " + text + " " +color[i - 1]) ;
 }
 for (i = 4, num = color.length , aff = o.length ; i < 8; i++){
  console.log(i + o[0]+ " " + text + " " +color[i - 1]) ;
 }
}
function join() {
var myColor = ["Red" , "Green" , "White" , "Black"];
console.log(myColor.join(",")) + "<br>" ;
console.log(myColor.join("-")) + "<br>" ;
console.log(myColor.join("+")) + "<br>" ;
}
function developers() 
    {
let employees = [
    {
        id : 1,
        firstname : 'nestor',
        email : 'nede0@va.gov',
        gender : 'male',
        age :35,
        ip_address : '80.95.217.202',
        car : 'chevrolet',
        country : 'russia',
        company :'ozu',
        job: 'research associate',
        language :'kannada',
        phone : '369-416-1791',
        active : true,
        salary : 350000
    },
    {
        id : 2,
        firstname : 'boony',
        email : 'bconsidine1@dailymail.co.uk',
        gender : 'male',
        age :30,
        ip_address : '158.108.174.143',
        car : 'kia',
        country : 'indonesia',
        company :'flashspan',
        job: 'engineer iv',
        language :'bosnian',
        phone : '878-260-8542',
        active : true,
        salary : 150000 
    },
    {
        id : 3,
        firstname : 'humfrid',
        email : 'hmacaree2@craigslist.org',
        gender : 'male',
        age :25,
        ip_address : '13.121.145.193',
        car : 'dodge',
        country : 'china',
        company :'mita',
        job: 'web designer',
        language :'bosnian',
        phone : '721-765-6270',
        active : true,
        salary : 550000
    },
    {
        id : 4,
        firstname : 'hirsch',
        email : 'halbury3@themeforest.net',
        gender : 'male',
        age :21,
        ip_address : '154.153.161.16',
        car : 'dodge',
        country : 'russia',
        company :'kaymbo',
        job: 'software consultant',
        language :'northern sotho',
        phone : '515-581-1165',
        active : true,
        salary : 250000.8
    },
    {
        id : 5,
        firstname : 'granny',
        email : 'gmcsharry4@buzzfeed.com',
        gender : 'male',
        age :23,
        ip_address : '171.48.242.209',
        car : 'ford',
        country : 'china',
        company :'youtags',
        job: 'senior quality engineer',
        language :'swedish',
        phone : '757-973-8706',
        active : true,
        salary : 300000.05
    },
    {
        id : 6,
        firstname : 'bob',
        email : 'bbortolomei5@stanford.edu',
        gender : 'male',
        age :19,
        ip_address : '138.88.133.136',
        car : 'honda',
        country : 'poland',
        company :'vipe',
        job: 'web designer',
        language :'aymara',
        phone : '227-946-1788',
        active : true,
        salary : 100000
    },
    {
        id : 7,
        firstname : 'chen',
        email : 'cyurshev6@wikipedia.org',
        gender : 'male',
        age :20,
        ip_address : '76.98.240.178',
        car : 'audi',
        country : 'thailand',
        company :'midel',
        job: 'web designer',
        language :'malagasy',
        phone : '316-127-0004',
        active : false,
        salary : 300000
    },
    {
        id : 8,
        firstname : 'jacquetta',
        email : 'jtretwell7@macromedia.com',
        gender : 'female',
        age :28,
        ip_address : '125.157.172.237',
        car : 'ford',
        country : 'russia',
        company :'devpoint',
        job: 'web developer',
        language :'papiamento',
        phone : '542-329-7755',
        active : false,
        salary : 130000
    },
    {
        id : 9,
        firstname : 'marget',
        email : 'msooley8nba.com',
        gender : 'female',
        age :30,
        ip_address : '231.239.40.29',
        car : 'pontiac',
        country : 'nigeria',
        company :'photobean',
        job: 'web developer',
        language :'hebrew',
        phone : '502-799-5098',
        active : false,
        salary : 750000.5
    },
    {
        id : 10,
        firstname : 'tomkin',
        email : 'tkohtler9@howstuffworks.com',
        gender : 'male',
        age :17,
        ip_address : '121.234.135.93',
        car : 'pontiac',
        country : 'nigeria',
        company :'jaxbean',
        job: 'database administrator',
        language :'filipino',
        phone : '692-372-4141',
        active : false,
        salary : 50000
    }
]
let devellopers =[employees.filter((employees) => employees.job=== 'web developer')] ;
let nigerianDevelopers =[employees.filter((employees) =>employees.job =='web developer' && employees.country == 'nigeria')] ;
let youngsters =[employees.filter((employees) =>employees.age <= 20 )] ;
let activeWorkers = [employees.filter((employees) =>employees.active === true )] ;

 console.log (devellopers) ;
 console.log (nigerianDevelopers) ;
 console.log (youngsters) ;
 console.log (activeWorkers) ;
}