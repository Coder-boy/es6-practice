class student {
        constructor(sid, sName){
            this.id = sid;
            this.name = sName; 
            this.school = "bangla school"
        }
}

const student1 = new student(12, "ashraf");
const student2 = new student( 15,"arfa");
console.log(student1, student2);