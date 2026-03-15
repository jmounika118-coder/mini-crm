let leads = JSON.parse(localStorage.getItem("leads")) || [];

function renderLeads(data = leads){

let table = document.getElementById("leadList");
table.innerHTML = "";

data.forEach((lead,index)=>{

table.innerHTML += `
<tr>
<td>
<strong>${lead.name}</strong><br>
<small>${lead.email}</small>
</td>

<td>${lead.company}</td>

<td><span class="badge ${lead.status.toLowerCase()}">${lead.status}</span></td>

<td>$${lead.value}</td>

<td>${lead.source}</td>

<td>
<button onclick="deleteLead(${index})">Remove</button>
</td>

</tr>
`;

});

}

function addLead(){

let lead = {

name:document.getElementById("name").value,
email:document.getElementById("email").value,
company:document.getElementById("company").value,
value:document.getElementById("value").value,
source:document.getElementById("source").value,
status:"NEW"

};

leads.push(lead);

localStorage.setItem("leads",JSON.stringify(leads));

renderLeads();

}

function deleteLead(index){

leads.splice(index,1);

localStorage.setItem("leads",JSON.stringify(leads));

renderLeads();

}

function searchLead(){

let keyword = document.getElementById("searchInput").value.toLowerCase();

let filtered = leads.filter(lead =>
lead.name.toLowerCase().includes(keyword) ||
lead.company.toLowerCase().includes(keyword) ||
lead.source.toLowerCase().includes(keyword)
);

renderLeads(filtered);

}

renderLeads();