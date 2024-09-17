// import React, { useState, useEffect } from 'react';

// const StudentSheet = () => {
//   // Define different student lists for each slot
  
//   const slotData = {
//     Slot1: [
//         { name: 'Rohan Prajapati ', email: 'rohanprajapati121212@gmail.com', contact: '9794361187' },
//             { name: 'Kritika Kanchan ', email: 'kritika.kanchan_cs.h24@gla.ac.in', contact: '9555417891' },
//             { name: 'Aditya Kumar', email: 'vaecaeyz@gmail.com', contact: '9771696418' },
//             { name: 'Amar Dhingra ', email: 'amardhingra1134@gmail.com', contact: '6307269869' },
//             { name: 'Yatharth Nikhra ', email: 'yatharthnikhra@gmail.com', contact: '7307619950' },
//             { name: 'Venu Gopal', email: 'imvenugopal08@gmail.com', contact: '9359443888' },
//             { name: 'Arpit Saraswat ', email: 'arpitsaraswat70@gmail.com', contact: '7668703965' },
//             { name: 'Keshav Sharma ', email: 'keshavsharmacs11@gmail.com', contact: '9389272049' },
//             { name: 'Harsh Vardhan Sahu', email: 'harsh.sahu_cs.aiml24@gla.ac.in', contact: '8858776691' },
//             { name: 'Dev', email: 'aggarwaldeva789@gmail.com', contact: '90504499990' },
//             { name: 'Sumit Dinday  ', email: 'dindaysumit08@gmail.com', contact: '9625059997' },
//             { name: 'Dwig Yadav  ', email: 'dwig236434@gmail.com', contact: '8433191739' },
//             { name: 'Chandni Rawat ', email: 'chandnirawat73@gmail.com', contact: '9792039968' },
//             { name: 'Priya Singh ', email: 'priyasingh252006@gmail.com', contact: '91552 75661 ' },
//     ],
//     Slot2: [
//       { name: 'Akarshit Kaushik', email: 'akarshit0206@gmail.com', contact: '9520100398' },
//       { name: 'Zoya usmani ', email: 'zoyausmani778@gmail.com', contact: '7417232851' },
//       { name: 'Vanya Kulshrestha ', email: 'vanyakulshrestha2006@gmail.com', contact: '9084528563' },
//       { name: 'Krish choudhary ', email: 'krishchaudhary03255@gmail.com', contact: '9310007354' },
//       { name: 'Devansh Maheshwari  ', email: 'devansh.maheshwari_cs24@gla.ac.in', contact: '9690801212' },
//       { name: 'Yash pratap singh  ', email: 'tyash1206@gmail.com', contact: '9528123604' },
//       { name: 'Dev Shukla ', email: 'devs44236@gmail.com', contact: '7607859041' },
//       { name: 'Nowduru Dhamini ', email: 'nowduru.dhamini_cs24@gla.ac.in', contact: '9627058603' },
//       { name: 'Anishka jain ', email: 'jatul1984@gmail.com', contact: '9557031110' },
//       { name: 'Ayush Gaur ', email: 'ayushgaurkv@gmail.com', contact: '8318893535' },
//       { name: 'Bhoomi Gupta ', email: 'bhoomigupta75@gmail.com', contact: '9119017818' },
//       { name: 'Aditya Mishra  ', email: 'aadityamishra751@gmail.com', contact: '7307908851' },
//       { name: 'Archit Jain', email: '0xarchit@gmail.com', contact: '9027885083' },
//       { name: 'Vasu Agrawal ', email: 'vasu.agrawal_cs.aiml24@gla.ac.in', contact: '9140076721' },
//       { name: 'Shraddha singh ', email: 'shraddha.singh2_cs.aiml24@gla.ac.in', contact: '   9695925673' },
//       { name: 'Uchit Agrawal ', email: 'uchitagrawal2006@gmail.com', contact: '8979859039' },
   
//     ],
//     Slot3: [
//       { name: 'Sahil Chaudhary ', email: 'sahilchaudharycoder77@gmail.com', contact: '9797380892' },
//       { name: 'Ankusb', email: 'ankush.gla_cs.h24@gla.ac.in', contact: '9548096215' },
//       { name: 'Shraddha singh ', email: 'shraddha.singh2_cs.aiml24@gla.ac.in', contact: '9695925673' },
//       { name: 'Amit Upadhyay ', email: 'amitupadhyay966046@gmail.com', contact: '9193004968' },
//       { name: 'Vaibhav singh ', email: 'hs142636@gmail.com  ', contact: '8400678200' },
//       { name: 'Mitanshi Jain', email: 'mitanshi.jain_bca24@gla.ac.in', contact: '8218705832' },
//       { name: 'Suhani', email: 'suhani.gla_cs24@gla.ac.in', contact: '9259573556' },
//       { name: 'Riya Raghav', email: 'kaviriya6543@gmail.com', contact: '9368191025' },
//       { name: 'Kartik Agarwal ', email: 'vish.dedha22@gmail.com', contact: '8395806026' },
//       { name: 'Abhay Singh ', email: 'abhay.singh_cs.aiml24@gla.ac.in', contact: '7897350475' },
//       { name: 'Alok gupta', email: 'alokgupta598909@gmail.com', contact: '7410880559' },
//       { name: 'Yash yaduvanshi ', email: 'yashyaduvanshi102@gmail.com', contact: '8059101495' },
//       { name: 'Shairal ', email: 'meenuaggrawal40@gmail.com', contact: '9643037833' },
//       { name: 'Shivam gupta', email: 'guptashivam3005@gmail.com', contact: '9999327539  ' },
//       { name: 'Sohum sabhani ', email: 'sohumsabhani@gmail.com', contact: '7060839538' },
//       { name: 'Sushant Pathak', email: 'sushantm1100202@gmail.com', contact: '9045257261' },
//     ],
//   };

//   // Load status from localStorage if available
//   const savedStatus = JSON.parse(localStorage.getItem('studentsStatus')) || {};

//   // State to manage the selected slot
//   const [selectedSlot, setSelectedSlot] = useState('Slot1');
//   const [students, setStudents] = useState(
//     slotData[selectedSlot].map((student, index) => ({
//       ...student,
//       status: savedStatus[selectedSlot]?.[index] || '', // Use saved status or default to empty
//     }))
//   );

//   // Handle slot change and update students data accordingly
//   const handleSlotChange = (event) => {
//     const newSlot = event.target.value;
//     setSelectedSlot(newSlot);
//     setStudents(
//       slotData[newSlot].map((student, index) => ({
//         ...student,
//         status: savedStatus[newSlot]?.[index] || '', // Load status for the selected slot
//       }))
//     );
//   };

//   // Handle status update for students
//   const handleStatusChange = (index, newStatus) => {
//     const updatedStudents = [...students];
//     updatedStudents[index].status = newStatus;
//     setStudents(updatedStudents);

//     // Save status for the selected slot in localStorage
//     const updatedStatus = updatedStudents.reduce((acc, student, idx) => {
//       acc[idx] = student.status;
//       return acc;
//     }, {});
//     const allStatus = { ...savedStatus, [selectedSlot]: updatedStatus };
//     localStorage.setItem('studentsStatus', JSON.stringify(allStatus));
//   };

//   return (
//     <div className="container mx-auto mt-10 px-4 bg-black min-h-screen">
//     <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">Student Selection Sheet</h1>

//     {/* Slot Selection */}
//     <div className="mb-6 text-center">
//       <label className="text-white font-bold mr-4">Day 1:</label>
//       <select
//         value={selectedSlot}
//         onChange={handleSlotChange}
//         className="bg-gray-700 text-white py-2 px-4 rounded"
//       >
//         <option value="Slot1">Slot 1</option>
//         <option value="Slot2">Slot 2</option>
//         <option value="Slot3">Slot 3</option>
//       </select>
//     </div>

//     {/* Table Container with Scroll on Small Screens */}
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-gray-800 text-white border-collapse">
//         <thead>
//           <tr>
//             <th className="border px-4 md:px-6 py-2 border-gray-600">Name</th>
//             <th className="border px-4 md:px-6 py-2 border-gray-600">Email</th>
//             <th className="border px-4 md:px-6 py-2 border-gray-600">Mobile Number</th>
//             <th className="border px-4 md:px-6 py-2 border-gray-600">Status</th>
//             <th className="border px-4 md:px-6 py-2 border-gray-600">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student, index) => (
//             <tr key={index} className="text-center">
//               <td className="border px-2 sm:px-4 md:px-6 py-2 border-gray-600">{student.name}</td>
//               <td className="border px-2 sm:px-4 md:px-6 py-2 border-gray-600">{student.email}</td>
//               <td className="border px-2 sm:px-4 md:px-6 py-2 border-gray-600">{student.contact}</td>
//               <td
//                 className={`border px-2 sm:px-4 md:px-6 py-2 border-gray-600 ${
//                   student.status === 'Selected' ? 'text-green-400' : student.status === 'Rejected' ? 'text-red-400' : 'text-gray-300'
//                 }`}
//               >
//                 {student.status || 'Pending'}
//               </td>
//               <td className="border px-2 sm:px-4 md:px-6 py-2 border-gray-600">
//                 <button
//                   className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 md:px-4 rounded mr-2"
//                   onClick={() => handleStatusChange(index, 'Selected')}
//                 >
//                   Select
//                 </button>
//                 <button
//                   className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 md:px-4 rounded"
//                   onClick={() => handleStatusChange(index, 'Rejected')}
//                 >
//                   Reject
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>
//   );
// };

// export default StudentSheet;





import React, { useState, useEffect } from 'react';

const StudentSheet = () => {
  // Define admin password (for demonstration purposes, static password)
  const adminPassword = 'Aditya@1234';

  // Define different student lists for each slot
  const slotData = {
    Slot1: [
        { name: 'Rohan Prajapati ', email: 'rohanprajapati121212@gmail.com', contact: '9794361187' },
                    { name: 'Kritika Kanchan ', email: 'kritika.kanchan_cs.h24@gla.ac.in', contact: '9555417891' },
                    { name: 'Aditya Kumar', email: 'vaecaeyz@gmail.com', contact: '9771696418' },
                    { name: 'Amar Dhingra ', email: 'amardhingra1134@gmail.com', contact: '6307269869' },
                    { name: 'Yatharth Nikhra ', email: 'yatharthnikhra@gmail.com', contact: '7307619950' },
                    { name: 'Venu Gopal', email: 'imvenugopal08@gmail.com', contact: '9359443888' },
                    { name: 'Arpit Saraswat ', email: 'arpitsaraswat70@gmail.com', contact: '7668703965' },
                    { name: 'Keshav Sharma ', email: 'keshavsharmacs11@gmail.com', contact: '9389272049' },
                    { name: 'Harsh Vardhan Sahu', email: 'harsh.sahu_cs.aiml24@gla.ac.in', contact: '8858776691' },
                    { name: 'Dev', email: 'aggarwaldeva789@gmail.com', contact: '90504499990' },
                    { name: 'Sumit Dinday  ', email: 'dindaysumit08@gmail.com', contact: '9625059997' },
                    { name: 'Dwig Yadav  ', email: 'dwig236434@gmail.com', contact: '8433191739' },
                    { name: 'Chandni Rawat ', email: 'chandnirawat73@gmail.com', contact: '9792039968' },
                    { name: 'Priya Singh ', email: 'priyasingh252006@gmail.com', contact: '91552 75661 ' },
    ],
    Slot2: [
        { name: 'Akarshit Kaushik', email: 'akarshit0206@gmail.com', contact: '9520100398' },
      { name: 'Zoya usmani ', email: 'zoyausmani778@gmail.com', contact: '7417232851' },
      { name: 'Vanya Kulshrestha ', email: 'vanyakulshrestha2006@gmail.com', contact: '9084528563' },
      { name: 'Krish choudhary ', email: 'krishchaudhary03255@gmail.com', contact: '9310007354' },
      { name: 'Devansh Maheshwari  ', email: 'devansh.maheshwari_cs24@gla.ac.in', contact: '9690801212' },
      { name: 'Yash pratap singh  ', email: 'tyash1206@gmail.com', contact: '9528123604' },
      { name: 'Dev Shukla ', email: 'devs44236@gmail.com', contact: '7607859041' },
      { name: 'Nowduru Dhamini ', email: 'nowduru.dhamini_cs24@gla.ac.in', contact: '9627058603' },
      { name: 'Anishka jain ', email: 'jatul1984@gmail.com', contact: '9557031110' },
      { name: 'Ayush Gaur ', email: 'ayushgaurkv@gmail.com', contact: '8318893535' },
      { name: 'Bhoomi Gupta ', email: 'bhoomigupta75@gmail.com', contact: '9119017818' },
      { name: 'Aditya Mishra  ', email: 'aadityamishra751@gmail.com', contact: '7307908851' },
      { name: 'Archit Jain', email: '0xarchit@gmail.com', contact: '9027885083' },
      { name: 'Vasu Agrawal ', email: 'vasu.agrawal_cs.aiml24@gla.ac.in', contact: '9140076721' },
      { name: 'Shraddha singh ', email: 'shraddha.singh2_cs.aiml24@gla.ac.in', contact: '   9695925673' },
      { name: 'Uchit Agrawal ', email: 'uchitagrawal2006@gmail.com', contact: '8979859039' },
      // ... other students
    ],
    Slot3: [
        { name: 'Sahil Chaudhary ', email: 'sahilchaudharycoder77@gmail.com', contact: '9797380892' },
              { name: 'Ankusb', email: 'ankush.gla_cs.h24@gla.ac.in', contact: '9548096215' },
              { name: 'Shraddha singh ', email: 'shraddha.singh2_cs.aiml24@gla.ac.in', contact: '9695925673' },
              { name: 'Amit Upadhyay ', email: 'amitupadhyay966046@gmail.com', contact: '9193004968' },
              { name: 'Vaibhav singh ', email: 'hs142636@gmail.com  ', contact: '8400678200' },
              { name: 'Mitanshi Jain', email: 'mitanshi.jain_bca24@gla.ac.in', contact: '8218705832' },
              { name: 'Suhani', email: 'suhani.gla_cs24@gla.ac.in', contact: '9259573556' },
              { name: 'Riya Raghav', email: 'kaviriya6543@gmail.com', contact: '9368191025' },
              { name: 'Kartik Agarwal ', email: 'vish.dedha22@gmail.com', contact: '8395806026' },
              { name: 'Abhay Singh ', email: 'abhay.singh_cs.aiml24@gla.ac.in', contact: '7897350475' },
              { name: 'Alok gupta', email: 'alokgupta598909@gmail.com', contact: '7410880559' },
              { name: 'Yash yaduvanshi ', email: 'yashyaduvanshi102@gmail.com', contact: '8059101495' },
              { name: 'Shairal ', email: 'meenuaggrawal40@gmail.com', contact: '9643037833' },
              { name: 'Shivam gupta', email: 'guptashivam3005@gmail.com', contact: '9999327539  ' },
              { name: 'Sohum sabhani ', email: 'sohumsabhani@gmail.com', contact: '7060839538' },
              { name: 'Sushant Pathak', email: 'sushantm1100202@gmail.com', contact: '9045257261' },
    ],
  };

  // Load status from localStorage if available
  const savedStatus = JSON.parse(localStorage.getItem('studentsStatus')) || {};

  // State to manage the selected slot
  const [selectedSlot, setSelectedSlot] = useState('Slot1');
  const [students, setStudents] = useState(
    slotData[selectedSlot].map((student, index) => ({
      ...student,
      status: savedStatus[selectedSlot]?.[index] || '', // Use saved status or default to empty
    }))
  );

  // Handle slot change and update students data accordingly
  const handleSlotChange = (event) => {
    const newSlot = event.target.value;
    setSelectedSlot(newSlot);
    setStudents(
      slotData[newSlot].map((student, index) => ({
        ...student,
        status: savedStatus[newSlot]?.[index] || '', // Load status for the selected slot
      }))
    );
  };

  // Admin authentication
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminInput, setAdminInput] = useState('');

  const handleAdminLogin = () => {
    if (adminInput === adminPassword) {
      setIsAdmin(true);
    } else {
      alert('Incorrect password');
    }
  };

  // Handle status update for students
  const handleStatusChange = (index, newStatus) => {
    const updatedStudents = [...students];
    updatedStudents[index].status = newStatus;
    setStudents(updatedStudents);

    // Save status for the selected slot in localStorage
    const updatedStatus = updatedStudents.reduce((acc, student, idx) => {
      acc[idx] = student.status;
      return acc;
    }, {});
    const allStatus = { ...savedStatus, [selectedSlot]: updatedStatus };
    localStorage.setItem('studentsStatus', JSON.stringify(allStatus));
  };

  return (
    <div className="container mx-auto mt-10 px-4 bg-black min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">Student Selection Sheet</h1>

      {!isAdmin && (
        <div className="mb-6 text-center">
          <label className="text-white font-bold mr-4">Admin Password:</label>
          <input
            type="password"
            value={adminInput}
            onChange={(e) => setAdminInput(e.target.value)}
            className="bg-gray-700 text-white py-2 px-4 rounded"
          />
          <button
            onClick={handleAdminLogin}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-4 ml-4 rounded"
          >
            Login
          </button>
        </div>
      )}

      {isAdmin && (
        <>
          {/* Slot Selection */}
          <div className="mb-6 text-center">
            <label className="text-white font-bold mr-4">Day 1:</label>
            <select
              value={selectedSlot}
              onChange={handleSlotChange}
              className="bg-gray-700 text-white py-2 px-4 rounded"
            >
              <option value="Slot1">Slot 1</option>
              <option value="Slot2">Slot 2</option>
              <option value="Slot3">Slot 3</option>
            </select>
          </div>

          {/* Table Container with Scroll on Small Screens */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 text-white border-collapse">
              <thead>
                <tr>
                  <th className="border px-4 md:px-6 py-2 border-gray-600">Name</th>
                  <th className="border px-4 md:px-6 py-2 border-gray-600">Email</th>
                  <th className="border px-4 md:px-6 py-2 border-gray-600">Mobile Number</th>
                  <th className="border px-4 md:px-6 py-2 border-gray-600">Status</th>
                  <th className="border px-4 md:px-6 py-2 border-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index} className="text-center">
                    <td className="border px-2 sm:px-4 md:px-6 py-2 border-gray-600">{student.name}</td>
                    <td className="border px-2 sm:px-4 md:px-6 py-2 border-gray-600">{student.email}</td>
                    <td className="border px-2 sm:px-4 md:px-6 py-2 border-gray-600">{student.contact}</td>
                    <td
                      className={`border px-2 sm:px-4 md:px-6 py-2 border-gray-600 ${
                        student.status === 'Selected'
                          ? 'text-green-400'
                          : student.status === 'Rejected'
                          ? 'text-red-400'
                          : 'text-gray-300'
                      }`}
                    >
                      {student.status || 'Pending'}
                    </td>
                    <td className="border px-2 sm:px-4 md:px-6 py-2 border-gray-600">
                      <button
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 md:px-4 rounded mr-2"
                        onClick={() => handleStatusChange(index, 'Selected')}
                      >
                        Select
                      </button>
                      <button
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 md:px-4 rounded"
                        onClick={() => handleStatusChange(index, 'Rejected')}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default StudentSheet;
