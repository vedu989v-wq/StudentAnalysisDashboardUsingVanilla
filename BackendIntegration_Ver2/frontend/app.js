async function loadStudents(){
    try{
        //Loading the JSON file
        const response=await fetch("https://studentanalysisbackend.vercel.app/");
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

    if (filtered.length === 0) {
    renderTable([]);
    return;
}

    //cards (AI gen)

    const total=filtered.length;
    const totalCGPA=filtered.reduce((sum, student)=>{
        return sum+Number(student.cgpa);
    }, 0);
    const avg=totalCGPA/total;
    const highestCGPA=filtered.reduce((max, student)=>{
       return Math.max(max, Number(student.cgpa));
    }, filtered[0].cgpa)
    const lowestCGPA=filtered.reduce((min, student)=>{
        return Math.min(min, Number(student.cgpa));
    }, filtered[0].cgpa)

    document.querySelector(".total").innerHTML = `
    
    <div class="gaugeText">
        <p>Total Students</p>
        <h2>${total}</h2>
    </div>
`;
    document.querySelector(".avgCGPA").innerHTML = `
    <div class="gaugeText">
        <p>Average CGPA</p>
        <h2>${avg.toFixed(2)}</h2>
    </div>
`;
    document.querySelector(".maxCGPA").innerHTML = `
    
    <div class="gaugeText">
        <p>Highest CGPA</p>
        <h2>${highestCGPA.toFixed(2)}</h2>
    </div>
`;
    document.querySelector(".minCGPA").innerHTML = `
    
    <div class="gaugeText">
        <p>Lowest CGPA</p>
        <h2>${lowestCGPA.toFixed(2)}</h2>
    </div>
`;



    renderTable(filtered)
    renderDepartmentChart(filtered)
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
            <td>${student.studentid}</td>
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

//rendering Department chart 
let departmentChart;

function renderDepartmentChart(students){

    const departmentCount = {
        CSE: 0,
        IT: 0,
        ECE: 0,
        ME: 0,
        CE: 0
    };

    students.forEach(student=>{
        departmentCount[student.department]++;
    });

    const ctx = document.getElementById("department-chart");

    if(departmentChart){
        departmentChart.destroy();
    }

    departmentChart = new Chart(ctx,{

        type:"bar",

        data:{
            labels:Object.keys(departmentCount),

            datasets:[{
                label:"Number of Students",

                data:Object.values(departmentCount),

                backgroundColor:[
                    "#3b82f6",
                    "#10b981",
                    "#8b5cf6",
                    "#f59e0b",
                    "#ef4444"
                ],

                borderRadius:8,

                borderSkipped:false
            }]
        },

        options:{

            responsive:true,

            maintainAspectRatio:false,

            plugins:{

                legend:{
                    display:false
                },

                title:{
                    display:true,
                    text:"Students by Department",
                    font:{
                        size:20
                    }
                }

            },

            scales:{

                x:{
                    title:{
                        display:true,
                        text:"Department"
                    },

                    grid:{
                        display:false
                    }
                },

                y:{

                    beginAtZero:true,

                    ticks:{
                        stepSize:5
                    },

                    title:{
                        display:true,
                        text:"Number of Students"
                    }
                }

            }

        }

    });

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
