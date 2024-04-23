export default function createIteratorObject(report) {
  const employeeName = Object.values(report.allEmployees);
  return employeeName.map((employeeName) => employeeName).flat();
}
