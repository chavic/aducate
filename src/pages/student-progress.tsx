import Link from 'next/link';

export default function StudentProgress() {
  // Placeholder for state and logic to fetch and display student progress
  // For the demo, we'll use static data

  const mockStudentProgress = [
    { name: 'Student A', progress: 75 },
    { name: 'Student B', progress: 60 },
    { name: 'Student C', progress: 90 },
    // Add more mock data as needed
  ];

  return (
    <div>
      <h1>Student Progress</h1>
      <ul>
        {mockStudentProgress.map((student) => (
          <li key={student.name}>
            {student.name}: {student.progress}%
          </li>
        ))}
      </ul>
      <Link href="/teacher-dashboard"><a>Back to Dashboard</a></Link>
    </div>
  );
}
