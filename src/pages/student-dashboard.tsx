import Link from 'next/link';

export default function StudentDashboard() {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <nav>
        <ul>
          <li><Link href="/courses"><a>View Courses</a></Link></li>
          <li><Link href="/assignments"><a>View Assignments</a></Link></li>
          <li><Link href="/progress"><a>View Progress</a></Link></li>
          <li><Link href="/announcements"><a>Announcements</a></Link></li>
        </ul>
      </nav>
      {/* Additional dashboard content can be added here */}
    </div>
  );
}
  // Placeholder content for the student dashboard
  return (
    <div>
      <h1>Student Dashboard</h1>
      {/* Links to view courses, assignments, learning progress, etc. */}
    </div>
  );
}
