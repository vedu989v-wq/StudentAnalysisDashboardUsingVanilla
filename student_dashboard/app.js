async function loadStudents(){
    try{
        //Loading the JSON file
        const response=await fetch('data/students.json');
        console.log(response)
        //convert JSON to JS object
        const students=await response.json();
        return students;

        
    } catch(error){
        console.log("Error: ", error);
    }

    
}

function renderStuds(students){
const searchBox=document.querySelector('.search').querySelector('input')

searchBox.addEventListener('input', ()=>{
    const keyword=searchBox.value;

    const filteredStuds=students.filter(student=>{
        return student.name.includes(keyword);
    })

    return filteredStuds;
})
}

async function displayStudents(){
const unfilteredstuds=await loadStudents();
const students= renderStuds(unfilteredstuds);

console.log(students)
const t1body=document.querySelector('.student-table').querySelector('tbody');

students.forEach(student=>{
    const row=document.createElement('tr');

    row.innerHTML = `
            <td>${student.studentId}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.department}</td>
            <td>${student.year}</td>
            <td>${student.Cgpa}</td>
            <td>${student.attendance}</td>
        `;

        t1body.appendChild(row);
})
}

displayStudents();
