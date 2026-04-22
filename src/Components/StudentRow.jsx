function StudentRow({ student, updateScore }) {
  const status = student.score >= 40 ? "PASS" : "FAIL";

  return (
    <tr>
      <td>{student.name}</td>

      <td style={{ color: "#facc15", fontWeight: "bold" }}>
        {student.score}
      </td>

      <td>
        <span className={status === "PASS" ? "pass" : "fail"}>
           {status}
        </span>
      </td>

      <td>
      <input
        type="number"
        value={student.score}
        min="0"
        max="100"
        onChange={(e) =>
          updateScore(student.id, e.target.value)
        }
      />
      </td>
    </tr>
  );
}

export default StudentRow;