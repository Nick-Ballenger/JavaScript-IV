// CODE here for your Lambda Classes
class Person1 {
    constructor(att) {
        this.name = att.name,
        this.age = att.age,
        this.location = att.location,
        this.gender = att.gender
    }
    speak(){
      return  `Hi, my name is ${this.name}`
    }
};

class Instructor extends Person1{
    constructor(att) {
        super(att);
        this.specialty = att.specialty,
        this.favLanguage =  att.favLanguage,
        this.catchPhrase = att.catchPhrase
    };
     randomRangeWithIncrements(min, max, inc) {
        let grade = Student.grade;


        min = min || 0;
        inc = inc || 2;
      
        console.log (Math.floor(Math.random(student.grade) * (max - min) / inc) * inc + min);
    }
    
   randomRangeWithIncrements(Student);
    
    demo (subject){
           return `Today we are learning about ${subject}`
           
    };
    grade (student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }     
}

class Student extends Person1{
    constructor(att) {
        super(att);
        this.previousBackground = att.previousBackground,
        this.className = att.className,
        this.favSubjects = att.favSubjects, 
        this.grade = att.grade
    } 

    listSubjects(){
        let favorites=[];
        for (let i = 0; i < this.favSubjects.length; i++) {
           favorites.push(this.favSubjects[i]);
            }
            return favorites;
    }
    

    PRAssignments(subject){
        return `${this.name} has submitted a PR for ${subject}`
    };
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
   
}
class PM extends Instructor{
    constructor(att) {
        super(att);
        this.gradClassName = att.gradClassName,
        this.favInstructor = att.favInstructor
    }
    standup(channel){
        return `${this.name} announces to ${channel} @channel standy times!`
    }
    debugsCode(StudentName,subject){
      return  `${this.name} debugs ${StudentName}'s code on ${subject}`
    }
}
   
   
    

const Lambda = new Instructor({
    name: 'Josh',
    age: 34,
    location:'utah',
    gender: 'm',
    specialty:'Banjo',
    favLanguage:'JS',
    catchPhrase:'Special sauce'
  });

  
const Lambda1 = new Instructor({
    name: 'Jimmy',
    age: 28,
    location:'outside',
    gender: 'm',
    specialty:'Makin bacon pancakes',
    favLanguage:'PERL',
    catchPhrase:'Wubba lubba dub dub'
  });

  
const NewStudent = new Student({
    name:'Nick',
    age: 33,
    location:'texas',
    gender: 'm',
    previousBackground:'IT',
    className:'web18',
    favSubjects:  ['html', 'css','JS'],
    grade:100
});

const NewStudent1 = new Student({
    name:'John',
    age: 22,
    location:'Hogwarts',
    gender: 'm',
    previousBackground:'Wizardry',
    className:'Gryffindor',
    favSubjects:  ['potions', 'lunch'],
    grade:35
});

const PM1 = new PM({
    name:'Jarrad',
    age: 19,
    location:'Cali?',
    gender: 'm',
    specialty:'Providing sick morning beats',
    favLanguage:'Esperanto',
    catchPhrase:'If there are no more question I am going to go ahead and let you go',
    gradClassName:'Wolfy dudes',
    favInstructor:'josh'
});

const PM2 = new PM({
    name:'Austin',
    age: 24,
    location:'New Mexico?',
    gender: 'm',
    specialty:'Freestyle sandboarding',
    favLanguage:'Klingon',
    catchPhrase:'Waaaassssuuup',
    gradClassName:'Web15',
    favInstructor:'josh'
});
console.log(PM2.catchPhrase);
  console.log(Lambda.speak());
  console.log(NewStudent.sprintChallenge('CSS'));
  console.log(NewStudent1.PRAssignments('Defense against the Dark arts.'))
  console.log(PM2.specialty);
  console.log(PM1.debugsCode(NewStudent.name, 'C++' ))
  console.log (PM2.standup('my'))
//   console.log(NewStudent.favSubjects[1],NewStudent.favSubjects[0]);
  console.log(NewStudent1.listSubjects());
  console.log(Lambda1.grade(NewStudent,'HTML'))   
  console.log(PM2.name);
  console.log(Lambda.randomRangeWithIncrements())
 