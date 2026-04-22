import StudentRow from "./StudentRow";

function StudentTable({ students, updateScore }) {
  return (
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>SCORE</th>
          <th>STATUS</th>
          <th>UPDATE</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <StudentRow
            key={student.id}
            student={student}
            updateScore={updateScore}
          />
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
