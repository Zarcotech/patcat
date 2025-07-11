fetch('/patients')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#patientTable tbody');
        data.forEach(patient => {
            const row = document.createElement('tr');
            row.innerHTML = `
        <td>${patient.name}</td>
        <td>${patient.age}</td>
        <td>${patient.address}</td>
        <td>${patient.gender}</td>
        <td>${patient.employment}</td>
        <td>${patient.status}</td>
        <td>${patient.history}</td>
        <td>${patient.complaint}</td>
        <td>${patient.labs}</td>
        <td>${patient.imaging}</td>
        <td>${patient.medications}</td>
        <td>${patient.radiology}</td>
        <td>${patient.endoscopy}</td>
        <td>${patient.echo}</td>
        <td>${patient.kardex}</td>
        <td>${patient.bloodType}</td>
        <td>${patient.nextPlan}</td>
        <td>${patient.nextDate}</td>
      `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('❌ خطأ في تحميل البيانات:', error));
