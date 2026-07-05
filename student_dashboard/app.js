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

//PCB of This Application: Store current State
const state={
    students:[],
    search:"",
    department:"ALL",
    sort:"none"
}

function updateUI(){
    let filtered=[...state.students];

    //Search Function
    if(state.search!==""){
        filtered=filtered.filter(student=>student
            .name.toLowerCase()
            .includes(state.search.toLowerCase())
        ); //for matching purpose
    }

    //Department
    if(state.department!=='ALL'){
        filtered=filtered.filter(student=>student.department==state.department);
    }

    

    //sorting
    if(state.sort!='none'){
       if(state.sort=="cgpa-asc"){
         filtered.sort((a,b)=>a.cgpa-b.cgpa);
       }
       if(state.sort=="cgpa-desc"){
         filtered.sort((a,b)=>b.cgpa-a.cgpa);
       }
    }

    renderTable(filtered)
}

//Search Filter
function setupSearch(){

const searchBox=document.querySelector('.search').querySelector('input')

searchBox.addEventListener('input', ()=>{
    state.search=searchBox.value;
    updateUI();
    })

}

//Department Filter
function deptFilter(){
const departmentBox=document.querySelector(".dept");

departmentBox.addEventListener("change", ()=>{
    state.department=departmentBox.value;
    updateUI();
})
}

//sorting function
function sortCgpa(){
    const sortBox=document.querySelector(".sort").querySelector("select")
    sortBox.addEventListener("change", ()=>{
        state.sort=sortBox.value;
        updateUI();
    })
}


//Table Renderer
function renderTable(students){
    const t1body=document.querySelector('.student-table').querySelector('tbody');
    
    t1body.innerHTML='';
    students.forEach(student=>{
    const row=document.createElement('tr');

    row.innerHTML = `
            <td>${student.studentId}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.department}</td>
            <td>${student.year}</td>
            <td>${student.cgpa}</td>
            <td>${student.attendance}</td>
        `;

        t1body.appendChild(row);
})
}


async function displayStudents(){

//load students into state
state.students=await loadStudents();

//initial Render
updateUI();
setupSearch();
deptFilter();
sortCgpa();
}


displayStudents();
